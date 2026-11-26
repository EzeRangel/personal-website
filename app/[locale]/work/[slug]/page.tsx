import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { site } from "@/config/site";
import { ContactSection } from "@/components/home/ContactSection";
import { CaseCover } from "@/components/work/CaseCover";
import { CaseHeader } from "@/components/work/CaseHeader";
import { NextProject } from "@/components/work/NextProject";
import { caseMdxComponents } from "@/components/work/caseMdx";
import { resolveImage, resolveScreens } from "@/lib/caseImages";
import { getCase, getDiagramSvg, getNextCase, getPublishedCases } from "@/lib/content";
import { getMessages, isLocale, localePath, ogLocale, type Locale } from "@/lib/i18n";

// Cases are only published in both languages, so both alternates always exist.
export function generateStaticParams({ params }: { params: { locale: string } }) {
  return isLocale(params.locale) ? getPublishedCases(params.locale).map((study) => ({ slug: study.slug })) : [];
}

function load(locale: string, slug: string) {
  if (!isLocale(locale) || !/^[a-z0-9-]+$/.test(slug)) return null;
  const study = getCase(slug, locale);
  const other: Locale = locale === "en" ? "es" : "en";
  if (!study || !getCase(slug, other)) return null;
  return { locale, study };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const loaded = load(locale, slug);
  if (!loaded) return {};
  const { study } = loaded;
  const path = `/work/${slug}`;
  const url = localePath(loaded.locale, path);

  return {
    title: { absolute: study.seo.title },
    description: study.seo.description,
    alternates: {
      canonical: url,
      languages: { en: localePath("en", path), es: localePath("es", path), "x-default": localePath("en", path) },
    },
    openGraph: {
      type: "article",
      url,
      siteName: site.name,
      title: study.seo.title,
      description: study.seo.description,
      locale: ogLocale[loaded.locale],
      alternateLocale: loaded.locale === "en" ? ogLocale.es : ogLocale.en,
      modifiedTime: study.updated,
    },
    twitter: { card: "summary_large_image", title: study.seo.title, description: study.seo.description },
  };
}

type Params = PageProps<"/[locale]/work/[slug]">["params"];

// The slug is URL data: on a client navigation (Home → case) it isn't part of the shared App Shell,
// so it's read inside <Suspense>. The case itself is cached, and links to cases use prefetch={true},
// so the content is resolved before the click and the fallback isn't seen.
export default function CaseStudyPage({ params }: PageProps<"/[locale]/work/[slug]">) {
  return (
    <Suspense fallback={<div className="pg-case-pending" />}>
      <CaseStudy params={params} />
    </Suspense>
  );
}

async function CaseStudy({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const loaded = load(locale, slug);
  if (!loaded) notFound();
  return <CachedCaseStudy locale={loaded.locale} slug={slug} />;
}

async function CachedCaseStudy({ locale, slug }: { locale: Locale; slug: string }) {
  "use cache";
  cacheLife("max"); // content only changes with a deploy
  const study = getCase(slug, locale)!;
  const messages = getMessages(locale);
  const copy = messages.work.case;
  const next = getNextCase(slug, locale);
  const diagramSvg = study.diagram ? getDiagramSvg(slug, study.diagram.src) : null;
  const { default: Body } = await import(`@/content/work/${slug}/${locale}.mdx`);
  const cover = study.cover ? await resolveImage(slug, study.cover) : null;
  const screens = await resolveScreens(slug, study.screens);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: study.name,
    description: study.lead,
    applicationCategory: study.schema.applicationCategory,
    ...(study.schema.operatingSystem && { operatingSystem: study.schema.operatingSystem }),
    ...(study.links[0] && { url: study.links[0].href }),
    author: { "@type": "Person", name: site.name, url: site.url },
    inLanguage: locale,
    dateModified: study.updated,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="pg">
        <article className="pg-case">
          <CaseHeader study={study} backHref={localePath(locale, "/work")} copy={copy} />
          {cover && <CaseCover image={cover} />}
          <div className="pg-case-body">
            <Body components={caseMdxComponents({ study, copy, diagramSvg, screens })} />
          </div>
        </article>
      </div>
      {next && (
        <NextProject from={slug} next={next} href={localePath(locale, `/work/${next.slug}`)} copy={copy} />
      )}
      <ContactSection number={5} copy={messages.home.contact} />
    </>
  );
}

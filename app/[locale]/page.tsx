import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { HowSection } from "@/components/home/HowSection";
import { OpinionsSection } from "@/components/home/OpinionsSection";
import { WorkSection } from "@/components/home/WorkSection";
import { WritingSection } from "@/components/home/WritingSection";
import { getArticles, getProjects, getPublishedCases } from "@/lib/content";
import { getMessages, isLocale, localePath, ogLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getMessages(locale);
  const url = localePath(locale, "/");

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical: url,
      languages: { en: localePath("en", "/"), es: localePath("es", "/"), "x-default": localePath("en", "/") },
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: meta.ogTitle,
      description: meta.description,
      locale: ogLocale[locale],
      alternateLocale: locale === "en" ? ogLocale.es : ogLocale.en,
    },
    twitter: { card: "summary_large_image", title: meta.ogTitle, description: meta.description },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.jobTitle,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: site.locality, addressCountry: site.country },
  sameAs: Object.values(site.social),
};

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { home } = getMessages(locale);
  const projects = getProjects(locale);
  const published = new Set(getPublishedCases(locale).map((c) => c.slug));
  const articles = getArticles(locale, 3);
  const contactNumber = articles.length > 0 ? 5 : 4;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero copy={home.hero} />
      <WorkSection locale={locale} number={1} copy={home.work} projects={projects} published={published} />
      <HowSection number={2} copy={home.how} />
      <OpinionsSection number={3} copy={home.opinions} />
      {articles.length > 0 && <WritingSection locale={locale} number={4} copy={home.writing} articles={articles} />}
      <ContactSection number={contactNumber} copy={home.contact} />
    </>
  );
}

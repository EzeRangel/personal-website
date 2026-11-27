import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { ContactSection } from "@/components/home/ContactSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ClientTable } from "@/components/work/ClientTable";
import { ProductItem } from "@/components/work/ProductItem";
import { resolveImage } from "@/lib/caseImages";
import { getClientWork, getProjectListings, getPublishedCases } from "@/lib/content";
import { getMessages, isLocale, localePath, ogLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/work">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getMessages(locale).work.index;
  const url = localePath(locale, "/work");

  return {
    title: { absolute: copy.seoTitle },
    description: copy.description,
    alternates: {
      canonical: url,
      languages: { en: localePath("en", "/work"), es: localePath("es", "/work"), "x-default": localePath("en", "/work") },
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: copy.ogTitle,
      description: copy.description,
      locale: ogLocale[locale],
      alternateLocale: locale === "en" ? ogLocale.es : ogLocale.en,
    },
    twitter: { card: "summary_large_image", title: copy.ogTitle, description: copy.description },
  };
}

// Page head · 01 Products (screenshot + facts per product) · 02 Client work (table) · Contact.
export default async function WorkPage({ params }: PageProps<"/[locale]/work">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);
  const copy = messages.work.index;
  const published = new Set(getPublishedCases(locale).map((study) => study.slug));
  const products = await Promise.all(
    getProjectListings(locale).map(async (product) => ({
      product,
      cover: product.cover ? await resolveImage(product.slug, product.cover) : null,
      caseHref: published.has(product.slug) ? localePath(locale, `/work/${product.slug}`) : null,
    })),
  );
  const clients = getClientWork(locale);
  let number = 0;

  return (
    <>
      <div className="pg">
        <header className="pg-pagehead">
          <h1 className="er-h1">
            {copy.title}
            <span className="er-cursor er-cursor--serif" aria-hidden="true" />
          </h1>
          <p className="er-lead">{copy.lead}</p>
        </header>
      </div>

      <div className="pg">
        <section className="pg-sec" aria-labelledby="products-title">
          <SectionLabel number={++number}>{copy.products.label}</SectionLabel>
          <div className="wk-intro">
            <h2 className="er-h2" id="products-title">
              {copy.products.title}
            </h2>
            <p className="er-lead">{copy.products.lead}</p>
          </div>
          <ol className="wk-list">
            {products.map(({ product, cover, caseHref }, index) => (
              <ProductItem
                key={product.slug}
                product={product}
                index={index}
                cover={cover}
                caseHref={caseHref}
                copy={copy.products}
              />
            ))}
          </ol>
        </section>
      </div>

      {clients.length > 0 && (
        <div className="pg">
          <section className="pg-sec" aria-labelledby="clients-title">
            <SectionLabel number={++number}>{copy.clients.label}</SectionLabel>
            <div className="wk-intro">
              <h2 className="er-h2" id="clients-title">
                {copy.clients.title}
              </h2>
              <p className="er-lead">{copy.clients.lead}</p>
            </div>
            <ClientTable clients={clients} copy={copy.clients} />
          </section>
        </div>
      )}

      <ContactSection number={++number} copy={messages.home.contact} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { site } from "@/config/site";
import { ContactSection } from "@/components/home/ContactSection";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";
import { PageHead } from "@/components/ui/PageHead";
import { getMessages, isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getMessages(locale).privacy;
  return pageMetadata({ locale, path: "/privacy", title: copy.seoTitle, description: copy.description, ogTitle: copy.title, noindex: true });
}

// "{email}" in a paragraph becomes the mailto link.
function Paragraph({ text }: { text: string }) {
  const parts = text.split("{email}");
  return (
    <p>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <a className="er-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          )}
          {part}
        </Fragment>
      ))}
    </p>
  );
}

const googlePrivacy = "https://policies.google.com/privacy";

// Head with facts · "On this page" + six short sections · Contact (01).
export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);
  const copy = messages.privacy;
  const { responsible, collect, cookies, processors, rights, changes } = copy.sections;
  const toc = [
    { id: "responsible", title: responsible.title },
    { id: "collect", title: collect.title },
    { id: "cookies", title: cookies.title },
    { id: "processors", title: processors.title },
    { id: "rights", title: rights.title },
    { id: "changes", title: changes.title },
  ];

  return (
    <>
      <div className="pg">
        <PageHead className="wr-head" kicker={copy.kicker} title={copy.title} lead={copy.lead}>
          <dl className="pg-facts pv-facts">
            <div>
              <dt>{copy.facts.updated.label}</dt>
              <dd className="er-tabular">{copy.facts.updated.value}</dd>
            </div>
            <div>
              <dt>{copy.facts.appliesTo.label}</dt>
              <dd>{copy.facts.appliesTo.value}</dd>
            </div>
            <div>
              <dt>{copy.facts.contact.label}</dt>
              <dd>
                <a className="er-link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </PageHead>
      </div>

      <div className="pg">
        <div className="pg-grid wr-body">
          <nav className="pg-side" aria-label={copy.toc}>
            <details className="wr-toc" open>
              <summary className="er-meta">{copy.toc}</summary>
              <ol>
                {toc.map((item, index) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          </nav>
          <div className="pg-main">
            <div className="wr-prose">
              <h2 id="responsible">{responsible.title}</h2>
              {responsible.text.map((text) => (
                <Paragraph key={text} text={text} />
              ))}

              <h2 id="collect">{collect.title}</h2>
              {collect.text.map((text) => (
                <Paragraph key={text} text={text} />
              ))}

              <h2 id="cookies">{cookies.title}</h2>
              <p>{cookies.intro}</p>
              <div className="cl-wrap">
                <table className="pv-table">
                  <caption className="er-sr">{cookies.title}</caption>
                  <thead>
                    <tr>
                      <th scope="col">{cookies.columns.name}</th>
                      <th scope="col">{cookies.columns.purpose}</th>
                      <th scope="col">{cookies.columns.duration}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookies.rows.map((row) => (
                      <tr key={row.name}>
                        <th scope="row">{row.name}</th>
                        <td>{row.purpose}</td>
                        <td className="er-tabular">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>{cookies.outro}</p>

              <h2 id="processors">{processors.title}</h2>
              {processors.text.map((text) => (
                <Paragraph key={text} text={text} />
              ))}

              <h2 id="rights">{rights.title}</h2>
              {rights.text.map((text) => (
                <Paragraph key={text} text={text} />
              ))}
              <div className="pv-actions">
                <CookieSettingsButton className="er-btn er-btn--secondary">{rights.change}</CookieSettingsButton>
                <a className="er-link" href={googlePrivacy} rel="noopener">
                  {rights.google} ↗
                </a>
              </div>

              <h2 id="changes">{changes.title}</h2>
              {changes.text.map((text) => (
                <p key={text}>
                  {text}
                  <span className="er-cursor" aria-hidden="true" />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactSection number={1} copy={messages.home.contact} />
    </>
  );
}

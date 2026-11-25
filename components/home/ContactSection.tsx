import { site } from "@/config/site";
import { socialLinks } from "@/lib/social";
import { CopyEmail } from "@/components/home/CopyEmail";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Messages } from "@/lib/i18n";

export function ContactSection({ number, copy }: { number: number; copy: Messages["home"]["contact"] }) {
  return (
    <div className="pg">
      <section className="er-contact pg-sec" id="contact" tabIndex={-1} aria-labelledby="contact-title">
        <SectionLabel number={number}>{copy.label}</SectionLabel>
        <h2 className="er-h2" id="contact-title">
          {copy.title}
        </h2>
        <p className="er-lead">{copy.text}</p>
        <div className="er-contact__mail">
          <a className="er-contact__address" href={`mailto:${site.email}`} data-track="email_click">
            {site.email}
          </a>
          <CopyEmail email={site.email} labels={copy} />
        </div>
        <ul className="er-social">
          {socialLinks.map((item) => (
            <li key={item.network}>
              <a href={item.href} rel="me" data-track="social_click" data-track-network={item.network}>
                {item.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

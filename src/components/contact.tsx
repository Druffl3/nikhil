import type { LinkEntry } from "@/src/content/portfolio";
import { ScrollReveal } from "@/src/components/scroll-reveal";

type ContactProps = {
  heading: string;
  body: string;
  links: LinkEntry[];
};

export function Contact({ heading, body, links }: ContactProps) {
  return (
    <ScrollReveal className="reveal-block" delay={200} label="contact">
      <section className="contact-panel" id="contact" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p className="section-kicker">Closeout / Contact</p>
          <h2 id="contact-title">{heading}</h2>
        </div>
        <p className="contact-copy">{body}</p>
        <div className="contact-links">
          {links.map((link) => (
            <a key={link.label} className="contact-link" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

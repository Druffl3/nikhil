import type { PortfolioContent } from "@/src/content/portfolio";
import { ScrollReveal } from "@/src/components/scroll-reveal";

type HeroProps = {
  content: PortfolioContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <ScrollReveal className="reveal-block" delay={0} label="hero">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">{content.status}</p>
          <h1>{content.name}</h1>
          <h2 className="hero-title">{content.heroTitle}</h2>
          <p className="hero-intro">{content.intro}</p>
          <ul className="hero-focus-list" aria-label="Primary design focus">
            {content.focusLabels.map((label) => (
              <li key={label} className="hero-focus-chip">
                {label}
              </li>
            ))}
          </ul>
          <div className="hero-stats" aria-label="Selected portfolio stats">
            {content.heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            {content.ctas.map((link, index) => (
              <a
                key={link.label}
                className={index === 0 ? "button button-primary" : "button button-secondary"}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <figure className="hero-frame">
          <figcaption className="frame-label">{content.heroMedia.eyebrow}</figcaption>
          <div
            className="hero-media"
            role="img"
            aria-label={content.heroMedia.title}
          >
            <div className="hero-media-stack" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="hero-media-copy">
              <p>{content.heroMedia.title}</p>
              <p>{content.heroMedia.caption}</p>
            </div>
          </div>
        </figure>
      </section>
    </ScrollReveal>
  );
}

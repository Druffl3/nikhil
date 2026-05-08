import type { AboutHighlightEntry } from "@/src/content/portfolio";
import { ScrollReveal } from "@/src/components/scroll-reveal";

type AboutProps = {
  heading: string;
  body: string;
  highlights: AboutHighlightEntry[];
  tools: string[];
};

export function About({ heading, body, highlights, tools }: AboutProps) {
  return (
    <ScrollReveal className="reveal-block" delay={160} label="about">
      <section className="content-section about-layout" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-kicker">Profile</p>
          <h2 id="about-title">{heading}</h2>
        </div>
        <div className="about-copy">
          <div className="about-profile" role="img" aria-label="Nikhil profile panel">
            <span>UI/UX lead</span>
            <span>Interface pacing</span>
          </div>
          <div className="about-body">
            <p>{body}</p>
            <dl className="about-highlights">
              {highlights.map((highlight) => (
                <div key={highlight.label}>
                  <dt>{highlight.label}</dt>
                  <dd>{highlight.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="about-tools">
            <p className="section-kicker">Tools + Strengths</p>
            <ul className="tool-cloud" aria-label="Tools and strengths">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

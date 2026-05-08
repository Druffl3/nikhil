import type { PrincipleEntry } from "@/src/content/portfolio";
import { ScrollReveal } from "@/src/components/scroll-reveal";

type DesignApproachProps = {
  principles: PrincipleEntry[];
};

export function DesignApproach({ principles }: DesignApproachProps) {
  return (
    <ScrollReveal className="reveal-block" delay={120} label="design-approach">
      <section className="content-section" aria-labelledby="design-approach-title">
        <div className="section-heading">
          <p className="section-kicker">Methods / Mindset</p>
          <h2 id="design-approach-title">Design Approach</h2>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

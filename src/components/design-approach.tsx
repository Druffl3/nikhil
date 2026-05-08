import type { PrincipleEntry } from "@/src/content/portfolio";

type DesignApproachProps = {
  principles: PrincipleEntry[];
};

export function DesignApproach({ principles }: DesignApproachProps) {
  return (
    <section className="content-section" aria-labelledby="design-approach-title">
      <div className="section-heading">
        <p className="section-kicker">How I Think</p>
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
  );
}

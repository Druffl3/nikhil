import type { ProjectEntry } from "@/src/content/portfolio";

type FeaturedWorkProps = {
  heading: string;
  projects: ProjectEntry[];
};

export function FeaturedWork({ heading, projects }: FeaturedWorkProps) {
  return (
    <section className="content-section" id="featured-work" aria-labelledby="featured-work-title">
      <div className="section-heading">
        <p className="section-kicker">Selected Projects</p>
        <h2 id="featured-work-title">{heading}</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-meta">
              <span>{project.category}</span>
              <span>{project.role}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className="project-outcome">{project.outcome}</p>
            <ul className="tag-row" aria-label={`${project.title} tags`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

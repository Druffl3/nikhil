type AboutProps = {
  heading: string;
  body: string;
  tools: string[];
};

export function About({ heading, body, tools }: AboutProps) {
  return (
    <section className="content-section about-layout" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="section-kicker">Profile</p>
        <h2 id="about-title">{heading}</h2>
      </div>
      <div className="about-copy">
        <p>{body}</p>
        <ul className="tool-cloud" aria-label="Tools and strengths">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

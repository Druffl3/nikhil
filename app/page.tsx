import { About } from "@/src/components/about";
import { Contact } from "@/src/components/contact";
import { DesignApproach } from "@/src/components/design-approach";
import { FeaturedWork } from "@/src/components/featured-work";
import { Hero } from "@/src/components/hero";
import { portfolioContent } from "@/src/content/portfolio";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page-backdrop" aria-hidden="true" />
      <div className="page-grid">
        <Hero content={portfolioContent} />
        <FeaturedWork
          heading={portfolioContent.featuredHeading}
          projects={portfolioContent.projects}
        />
        <DesignApproach principles={portfolioContent.principles} />
        <About
          heading={portfolioContent.aboutHeading}
          body={portfolioContent.aboutBody}
          tools={portfolioContent.tools}
        />
        <Contact
          heading={portfolioContent.contactHeading}
          body={portfolioContent.contactBody}
          links={portfolioContent.contactLinks}
        />
      </div>
      <footer className="site-footer">
        <p>{portfolioContent.name}</p>
        <p>{portfolioContent.status}</p>
      </footer>
    </main>
  );
}

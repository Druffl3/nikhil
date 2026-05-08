import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("shows the portfolio owner and featured work entry point", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Nikhil R" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /featured work/i })
    ).toBeInTheDocument();
  });

  it("renders UI/UX-first content, media-led project titles, and supporting chips", () => {
    render(<HomePage />);

    expect(
      screen.getAllByText(/available for selected collaborations/i).length
    ).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByText(/^product interface systems$/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /signal desk/i })
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/experience systems/i).length
    ).toBeGreaterThan(0);
    expect(
      screen.getByText(/03 launches/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /start a sharp interface conversation/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view work/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /contact me/i })
    ).toBeInTheDocument();
  });

  it("renders a visual-lab hero with media, focus chips, stats, and CTAs", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /i design product interface systems that read instantly/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/^product interface systems$/i)).toBeInTheDocument();
    expect(screen.getAllByText(/^experience systems$/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/^game design depth$/i)).toBeInTheDocument();
    expect(screen.getAllByText(/03 launches/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/visual lab/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /^signal desk$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view work/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact me/i })).toBeInTheDocument();
  });

  it("renders featured work as image-first cards with metadata and tags", () => {
    render(<HomePage />);

    expect(screen.getByText(/selected ui\/ux case studies/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /signal desk preview/i })).toBeInTheDocument();
    expect(screen.getAllByText(/ui\/ux systems/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/lead product designer/i)).toBeInTheDocument();
    expect(
      screen.getByText(/image-led operations dashboard concept tuned for legibility/i)
    ).toBeInTheDocument();
    expect(screen.getAllByText(/experience systems/i).length).toBeGreaterThan(0);
  });

  it("renders grouped approach cards and a mixed-media about section", () => {
    render(<HomePage />);

    expect(screen.getByText(/methods \/ mindset/i)).toBeInTheDocument();
    expect(screen.getByText(/readable systems/i)).toBeInTheDocument();
    expect(screen.getByText(/feedback earns trust/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /nikhil profile panel/i })).toBeInTheDocument();
    expect(screen.getByText(/ui\/ux direction/i)).toBeInTheDocument();
    expect(screen.getByText(/game systems thinking/i)).toBeInTheDocument();
    expect(screen.getByText(/tools \+ strengths/i)).toBeInTheDocument();
  });

  it("renders a redesigned closing CTA and footer identity", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /start a sharp interface conversation/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/available for ui\/ux design, product direction, and visual systems work/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getAllByText(/nikhil r/i).length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(/available for selected collaborations/i).length
    ).toBeGreaterThan(0);
  });

  it("marks major sections with reveal wrappers for scroll animation", () => {
    const { container } = render(<HomePage />);

    const revealLabels = ["hero", "featured-work", "design-approach", "about", "contact"];

    revealLabels.forEach((label) => {
      const block = container.querySelector(`[data-reveal-label="${label}"]`);

      expect(block).not.toBeNull();
      expect(block).toHaveAttribute("data-reveal-delay");
      expect(block).toHaveAttribute("data-reveal");
      expect(block).toHaveAttribute("data-reveal-reduced");
    });
  });
});

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

  it("renders the full landing-page structure and primary actions", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /design approach/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /let's build something sharp/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view work/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /contact me/i })
    ).toBeInTheDocument();
  });
});

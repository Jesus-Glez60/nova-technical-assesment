import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/PageBuilder/blocks/Hero";
import type { HeroBlock } from "@/types/cms";

const heroBlock: HeroBlock = {
  type: "hero",
  props: {
    title: "Hello World",
    subtitle: "Test subtitle text",
    ctaLabel: "Click me",
    ctaHref: "/test",
  },
};

describe("Hero", () => {
  it("renders the title in an h1", () => {
    render(<Hero {...heroBlock} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Hello World");
  });

  it("renders the subtitle", () => {
    render(<Hero {...heroBlock} />);
    expect(screen.getByText("Test subtitle text")).toBeInTheDocument();
  });

  it("renders the CTA link with the correct href", () => {
    render(<Hero {...heroBlock} />);
    const link = screen.getByRole("link", { name: "Click me" });
    expect(link).toHaveAttribute("href", "/test");
  });
});

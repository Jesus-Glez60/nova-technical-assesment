import React from "react";
import { render, screen } from "@testing-library/react";
import { CTA } from "@/components/PageBuilder/blocks/CTA";
import type { CTABlock } from "@/types/cms";

const ctaBlock: CTABlock = {
  type: "cta",
  props: {
    heading: "Get started",
    body: "Join thousands of users",
    primaryLabel: "Sign up",
    primaryHref: "/signup",
    secondaryLabel: "Learn more",
    secondaryHref: "/about",
  },
};

describe("CTA", () => {
  it("renders the heading in an h2", () => {
    render(<CTA {...ctaBlock} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Get started");
  });

  it("renders the body text", () => {
    render(<CTA {...ctaBlock} />);
    expect(screen.getByText("Join thousands of users")).toBeInTheDocument();
  });

  it("renders the primary CTA link with correct href", () => {
    render(<CTA {...ctaBlock} />);
    expect(screen.getByRole("link", { name: "Sign up" })).toHaveAttribute("href", "/signup");
  });

  it("renders the optional secondary link when provided", () => {
    render(<CTA {...ctaBlock} />);
    expect(screen.getByRole("link", { name: "Learn more" })).toHaveAttribute("href", "/about");
  });

  it("does not render a secondary link when omitted", () => {
    const blockWithoutSecondary: CTABlock = {
      ...ctaBlock,
      props: {
        ...ctaBlock.props,
        secondaryLabel: undefined,
        secondaryHref: undefined,
      },
    };
    render(<CTA {...blockWithoutSecondary} />);
    expect(screen.queryByRole("link", { name: "Learn more" })).not.toBeInTheDocument();
  });
});

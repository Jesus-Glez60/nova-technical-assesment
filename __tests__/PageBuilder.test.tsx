import React from "react";
import { render, screen } from "@testing-library/react";
import { PageBuilder } from "@/components/PageBuilder";
import type { CMSPayload } from "@/types/cms";

const mockBlocks: CMSPayload = [
  {
    type: "hero",
    props: {
      title: "Integration Hero",
      subtitle: "Subtitle here",
      ctaLabel: "CTA Button",
      ctaHref: "/cta",
    },
  },
  {
    type: "features",
    props: {
      heading: "Features Heading",
      items: [{ icon: "⚡", title: "Item 1", description: "Desc 1" }],
    },
  },
  {
    type: "cta",
    props: {
      heading: "CTA Heading",
      body: "CTA body text",
      primaryLabel: "Primary Action",
      primaryHref: "/primary",
    },
  },
];

// Requirement: Known component types render correctly
describe("PageBuilder — known block types", () => {
  it("renders a Hero block", () => {
    render(<PageBuilder blocks={[mockBlocks[0]]} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Integration Hero");
  });

  it("renders a Features block", () => {
    render(<PageBuilder blocks={[mockBlocks[1]]} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Features Heading");
  });

  it("renders a CTA block", () => {
    render(<PageBuilder blocks={[mockBlocks[2]]} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("CTA Heading");
  });

  it("renders all blocks in a full payload", () => {
    render(<PageBuilder blocks={mockBlocks} />);
    expect(screen.getByText("Integration Hero")).toBeInTheDocument();
    expect(screen.getByText("Features Heading")).toBeInTheDocument();
    expect(screen.getByText("CTA Heading")).toBeInTheDocument();
  });
});

// Requirement: Unknown component type renders fallback — app must not crash
describe("PageBuilder — unknown block type fallback", () => {
  it("does not crash when an unknown type is encountered", () => {
    const blocksWithUnknown: CMSPayload = [{ type: "slider", props: { items: [] } }];
    expect(() => render(<PageBuilder blocks={blocksWithUnknown} />)).not.toThrow();
  });

  it("renders the UnknownBlock fallback for unregistered types", () => {
    const blocksWithUnknown: CMSPayload = [{ type: "slider", props: { items: [] } }];
    render(<PageBuilder blocks={blocksWithUnknown} />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("displays the unknown type name in the fallback warning", () => {
    const blocksWithUnknown: CMSPayload = [{ type: "slider", props: {} }];
    render(<PageBuilder blocks={blocksWithUnknown} />);
    expect(screen.getByText(/slider/i)).toBeInTheDocument();
  });

  it("renders known blocks alongside unknown blocks without crashing", () => {
    const mixedBlocks: CMSPayload = [
      { type: "slider", props: {} },
      ...mockBlocks,
    ];
    render(<PageBuilder blocks={mixedBlocks} />);
    expect(screen.getByText("Integration Hero")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
});

// Requirement: PageBuilder handles an empty blocks array
describe("PageBuilder — empty array", () => {
  it("renders nothing when blocks array is empty", () => {
    const { container } = render(<PageBuilder blocks={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("does not crash with an empty array", () => {
    expect(() => render(<PageBuilder blocks={[]} />)).not.toThrow();
  });
});

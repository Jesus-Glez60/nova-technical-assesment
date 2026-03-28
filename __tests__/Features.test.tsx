import React from "react";
import { render, screen } from "@testing-library/react";
import { Features } from "@/components/PageBuilder/blocks/Features";
import type { FeaturesBlock } from "@/types/cms";

const featuresBlock: FeaturesBlock = {
  type: "features",
  props: {
    heading: "Our Features",
    items: [
      { icon: "⚡", title: "Fast", description: "Very fast indeed" },
      { icon: "🛡️", title: "Secure", description: "Very secure indeed" },
    ],
  },
};

describe("Features", () => {
  it("renders the section heading in an h2", () => {
    render(<Features {...featuresBlock} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Our Features");
  });

  it("renders all feature item titles", () => {
    render(<Features {...featuresBlock} />);
    expect(screen.getByText("Fast")).toBeInTheDocument();
    expect(screen.getByText("Secure")).toBeInTheDocument();
  });

  it("renders feature item descriptions", () => {
    render(<Features {...featuresBlock} />);
    expect(screen.getByText("Very fast indeed")).toBeInTheDocument();
    expect(screen.getByText("Very secure indeed")).toBeInTheDocument();
  });

  it("renders the correct number of list items", () => {
    render(<Features {...featuresBlock} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});

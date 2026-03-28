import React from "react";
import { render, screen } from "@testing-library/react";
import { UnknownBlock } from "@/components/PageBuilder/blocks/UnknownBlock";

describe("UnknownBlock", () => {
  it("renders a warning alert for the unknown type", () => {
    render(<UnknownBlock type="slider" props={{}} />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("displays the unknown type name in the warning", () => {
    render(<UnknownBlock type="slider" props={{}} />);
    expect(screen.getByText(/slider/i)).toBeInTheDocument();
  });

  it("does not throw for any arbitrary type string", () => {
    expect(() =>
      render(<UnknownBlock type="some-completely-unknown-widget" props={{}} />)
    ).not.toThrow();
  });

  it("does not throw for an empty type string", () => {
    expect(() => render(<UnknownBlock type="" props={{}} />)).not.toThrow();
  });
});

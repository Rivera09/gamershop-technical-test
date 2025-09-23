import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Spinner from "./";

describe("Spinner component", () => {
  it("renders the spinner", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });
});

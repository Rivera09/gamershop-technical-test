import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Dropdown from "./";

describe("Dropdown component", () => {
  const options = ["Option A", "Option B", "Option C"];

  it("renders the label correctly", () => {
    render(<Dropdown label="Choose option" options={options} />);
    expect(screen.getByText("Choose option")).toBeInTheDocument();
  });

  it("renders all options", () => {
    render(<Dropdown label="Choose option" options={options} />);
    options.forEach((opt) => {
      expect(screen.getByRole("option", { name: opt })).toBeInTheDocument();
    });
  });

  it("renders the deselect option when provided", () => {
    render(
      <Dropdown
        label="Choose option"
        options={options}
        deselectOption="Select none"
      />
    );
    expect(
      screen.getByRole("option", { name: "Select none" })
    ).toBeInTheDocument();
  });

  it("calls onChange when a new option is selected", () => {
    const handleChange = vi.fn();
    render(
      <Dropdown
        label="Choose option"
        options={options}
        onChange={handleChange}
      />
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "Option B" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((select as HTMLSelectElement).value).toBe("Option B");
  });
});

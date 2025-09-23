import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import Button from ".";

describe("components/Button", () => {
  test("should render the button with children text", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  test("should apply outlined variant styles", () => {
    render(<Button variant="outlined">Outlined</Button>);

    const button = screen.getByRole("button", { name: /outlined/i });
    expect(button).toHaveClass("border", "border-primary");
  });

  test("should apply filled variant styles", () => {
    render(<Button variant="filled">Filled</Button>);

    const button = screen.getByRole("button", { name: /filled/i });
    expect(button).toHaveClass(
      "bg-fill-primary",
      "text-white",
      "lg:text-button-desktop"
    );
  });

  test("should accept additional className", () => {
    render(
      <Button variant="outlined" className="extra-class">
        Custom
      </Button>
    );

    const button = screen.getByRole("button", { name: /custom/i });
    expect(button).toHaveClass("extra-class");
  });

  test("should handle onClick event", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByRole("button", { name: /click/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

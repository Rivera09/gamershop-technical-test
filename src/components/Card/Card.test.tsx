import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import Card from "./";
import { Game } from "@/utils/endpoint";

const mockGame: Game = {
  id: "1",
  name: "Test Game",
  description: "description",
  genre: "Action",
  price: 59.99,
  image: "/test-image.jpg",
  isNew: true,
};

describe("components/Card", () => {
  test("renders game info correctly", () => {
    render(<Card game={mockGame} />);

    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(mockGame.genre)).toBeInTheDocument();
    expect(screen.getByText(`$${mockGame.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(mockGame.name)).toBeInTheDocument();
  });

  test('renders "New" badge if game.isNew is true', () => {
    render(<Card game={mockGame} />);
    expect(screen.getByText(/new/i)).toBeInTheDocument();
  });

  test('renders "Add to cart" button if isOnCart is false', () => {
    render(<Card game={mockGame} isOnCart={false} />);
    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
  });

  test('renders "Remove from cart" button if isOnCart is true', () => {
    render(<Card game={mockGame} isOnCart />);
    expect(
      screen.getByRole("button", { name: /remove from cart/i })
    ).toBeInTheDocument();
  });

  test("calls onButtonClick when button is clicked", () => {
    const handleClick = vi.fn();
    render(<Card game={mockGame} onButtonClick={handleClick} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledWith(mockGame);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

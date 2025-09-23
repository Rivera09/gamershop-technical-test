import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Game } from "@/utils/endpoint";

import CartCard from "./";

const mockGame: Game = {
  id: "1",
  name: "Mock Game",
  genre: "Adventure",
  price: 49.99,
  image: "/mock-game.jpg",
  isNew: false,
  description: "A fun adventure game",
};

describe("components/CartCard", () => {
  test("renders game info correctly", () => {
    render(<CartCard game={mockGame} />);

    expect(screen.getByText(mockGame.genre)).toBeInTheDocument();
    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockGame.price}`)).toBeInTheDocument();
    expect(screen.getByText(mockGame.description!)).toBeInTheDocument();
  });

  test("renders game image", () => {
    render(<CartCard game={mockGame} />);
    expect(screen.getByAltText(mockGame.name)).toBeInTheDocument();
  });

  test("renders remove button with icon", () => {
    render(<CartCard game={mockGame} />);
    const removeButton = screen.getByRole("button");
    expect(removeButton).toBeInTheDocument();
    expect(screen.getByAltText(/remove from cart/i)).toBeInTheDocument();
  });

  test("calls onRemove when remove button is clicked", () => {
    const handleRemove = vi.fn();
    render(<CartCard game={mockGame} onRemove={handleRemove} />);

    const removeButton = screen.getByRole("button");
    fireEvent.click(removeButton);

    expect(handleRemove).toHaveBeenCalledTimes(1);
    expect(handleRemove).toHaveBeenCalledWith(mockGame);
  });

  test("does not render description if not provided", () => {
    const gameWithoutDescription = { ...mockGame, description: undefined };
    render(<CartCard game={gameWithoutDescription} />);
    expect(screen.queryByText(mockGame.description!)).not.toBeInTheDocument();
  });
});

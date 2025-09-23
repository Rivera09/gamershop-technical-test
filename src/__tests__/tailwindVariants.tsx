import { describe, it, expect } from "vitest";

import tv from "@/utils/tailwindVariants";

describe("tv utility function", () => {
  it("returns base styles", () => {
    const buttonStyles = tv({ base: "base-class" });
    expect(buttonStyles()).toBe("base-class");
  });

  it("applies variant styles when provided", () => {
    const buttonStyles = tv({
      base: "base-class",
      variants: {
        primary: "bg-blue text-white",
        secondary: "bg-gray text-black",
      },
    });

    expect(buttonStyles("primary")).toBe("base-class bg-blue text-white");
    expect(buttonStyles("secondary")).toBe("base-class bg-gray text-black");
  });

  it("applies defaultVariant when no variant is provided", () => {
    const buttonStyles = tv({
      base: "base-class",
      variants: {
        primary: "bg-blue",
      },
      defaultVariant: "primary",
    });

    expect(buttonStyles()).toBe("base-class bg-blue");
  });

  it("appends extra className", () => {
    const buttonStyles = tv({ base: "base-class" });

    expect(buttonStyles(undefined, "extra-class")).toBe(
      "base-class extra-class"
    );
  });

  it("ignores unknown variant", () => {
    const buttonStyles = tv({
      base: "base-class",
      variants: { primary: "bg-blue" },
    });

    expect(buttonStyles("nonexistent")).toBe("base-class");
  });
});

import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("next/image", () => {
  return {
    __esModule: true,
    default: (props: any) => {
      return <img {...props} />;
    },
  };
});

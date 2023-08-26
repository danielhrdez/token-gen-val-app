import { describe, it, expect } from "vitest";
import { TokenDisplay } from "./TokenDisplay";
import { render, screen } from '@testing-library/react'
import { Token } from "../types/token";

describe("TokenDisplay", () => {
  it("renders", () => {
    const token: Token = [
      1, 2, 3, 4,
      5, 6, 7, 8,
      9, 0, 1, 2,
      3, 4, 5, 6,
    ];
    render(<TokenDisplay token={token} />);
    const tokenDisplay = screen.findByText(/1234-5678-9012-3456/);
    expect(tokenDisplay).toMatchSnapshot();
  });
});

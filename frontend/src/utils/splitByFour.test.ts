import { describe, it, expect } from "vitest";
import { splitByFour } from "./splitByFour";
import { Token } from "../types/token";

describe("splitByFour", () => {
  it("splits a token into 4 parts", () => {
    const token: Token = [
      1, 2, 3, 4,
      5, 6, 7, 8,
      9, 0, 1, 2,
      3, 4, 5, 6,
    ];
    const splittedToken = splitByFour(token);
    expect(splittedToken).toEqual([
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ],
      [
        [9, 0, 1, 2],
        [3, 4, 5, 6],
      ],
    ]);
  });
});

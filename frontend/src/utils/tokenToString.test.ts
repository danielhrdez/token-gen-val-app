import { describe, it, expect } from "vitest";
import { tokenToString } from "./tokenToString";
import { Token } from "../types/token";

describe("tokenToString", () => {
  const token: Token = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5];
  const tokenString = tokenToString(token);

  it("converts a token to a string", () => {
    expect(tokenString).toBe("0123-4567-8901-2345");
  });

  it("do not add a dash at the end", () => {
    expect(tokenString).not.toBe("0123-4567-8901-2345-");
  });

  it("do not add a dash at the beginning", () => {
    expect(tokenString).not.toBe("-0123-4567-8901-2345");
  });
});

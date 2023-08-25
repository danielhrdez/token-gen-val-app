import { Token } from "../types/token";

export const digits = Array.from({ length: 10 }).map((_, i) => i);

export const defaultToken: Token = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

export const defaultDigitsActive: Record<number, boolean> = {
  0: true,
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
};

export const generateUrl = "http://localhost:8081/generate";
export const verifyUrl = "http://localhost:8082/validate";

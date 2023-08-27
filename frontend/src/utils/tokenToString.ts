import { Token } from "../types/token";

/**
 * Converts the given token to a string with dashes.
 * @example
 * 1234567890123456 -> 1234-5678-9012-3456
 * @param token The token to convert.
 */
export function tokenToString(token: Token) {
  let tokenString = "";
  token.forEach((digit, index) => {
    if (index % 4 === 0 && index !== 0) {
      tokenString += "-";
    }
    tokenString += digit;
  });
  return tokenString;
}

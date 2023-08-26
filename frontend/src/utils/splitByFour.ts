import { Digit } from "../types/digits";
import { Token } from "../types/token";

type FourDigits = [Digit, Digit, Digit, Digit];

type SplittedToken = [
  [FourDigits, FourDigits],
  [FourDigits, FourDigits],
];

/**
 * Splits the given token into 4 parts.
 * @param token The token to split.
 * @returns The splitted token.
 */
export function splitByFour(token: Token): SplittedToken {
  const nHalf = token.length / 2;
  const nQuarter = nHalf / 2;
  const firstHalf = token.slice(0, nHalf);
  const secondHalf = token.slice(nHalf, token.length);
  const firstQuarter = firstHalf.slice(0, nQuarter) as FourDigits;
  const secondQuarter = firstHalf.slice(nQuarter, nHalf) as FourDigits;
  const thirdQuarter = secondHalf.slice(0, nQuarter) as FourDigits;
  const fourthQuarter = secondHalf.slice(nQuarter, nHalf) as FourDigits;
  return [
    [firstQuarter, secondQuarter],
    [thirdQuarter, fourthQuarter],
  ] as SplittedToken;
}

import { Token } from "../types/token";

type SplittedToken = [
  [[number, number], [number, number]],
  [[number, number], [number, number]]
];

export function splitByHalfs(token: Token): SplittedToken {
  const nHalf = token.length / 2;
  const nQuarter = nHalf / 2;
  const firstHalf = token.slice(0, nHalf);
  const secondHalf = token.slice(nHalf, token.length);
  const firstQuarter = firstHalf.slice(0, nQuarter);
  const secondQuarter = firstHalf.slice(nQuarter, nHalf);
  const thirdQuarter = secondHalf.slice(0, nQuarter);
  const fourthQuarter = secondHalf.slice(nQuarter, nHalf);
  return [
    [firstQuarter, secondQuarter],
    [thirdQuarter, fourthQuarter],
  ] as SplittedToken;
}

type SplittedToken = [
  [[number, number], [number, number]],
  [[number, number], [number, number]]
];

export function splitByHalfs(token: string): SplittedToken {
  const nHalf = token.length / 2;
  const nQuarter = nHalf / 2;
  const splittedToken = token.split("").map((t) => parseInt(t, 10));
  const firstHalf = splittedToken.slice(0, nHalf);
  const secondHalf = splittedToken.slice(nHalf, splittedToken.length);
  const firstQuarter = firstHalf.slice(0, nQuarter);
  const secondQuarter = firstHalf.slice(nQuarter, nHalf);
  const thirdQuarter = secondHalf.slice(0, nQuarter);
  const fourthQuarter = secondHalf.slice(nQuarter, nHalf);
  return [
    [firstQuarter, secondQuarter],
    [thirdQuarter, fourthQuarter],
  ] as SplittedToken;
}

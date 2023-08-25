import { Token } from "../types/token";
import { useState } from "react";
import { defaultToken } from "../utils/constants";
import { fetchGeneration } from "../utils/fetchs";

export function useToken(initialToken?: Token) {
  const [token, setToken] = useState<Token>(initialToken || defaultToken);
  const setTokenWithFetch = ({
    digits,
    onError,
  }: {
    digits: number[];
    onError: (message: string) => void;
  }) => {
    fetchGeneration(digits)
      .then((token: string) => {
        const tokenArray = token
          .split("-")
          .map((quarter) => {
            return quarter.split("").map((digit) => Number(digit));
          })
          .flat() as Token;
        setToken(tokenArray);
      })
      .catch((error: Error) => {
        onError(error.message);
      });
  };
  return { token, setToken: setTokenWithFetch };
}

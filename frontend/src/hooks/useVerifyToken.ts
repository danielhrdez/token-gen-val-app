import { useState } from "react";
import { fetchVerification } from "../utils/fetchs";
import { Token } from "../types/token";

/**
 * A hook that manages the verification result.
 * @returns The verification result and a function to set the verification result.
 */
export function useVerifyToken() {
  const [validToken, setValidToken] = useState<boolean>(false);
  const setValidTokenWithFetch = ({
    token,
    onError,
  }: {
    token: Token;
    onError: (message: string) => void;
  }) => {
    fetchVerification(token)
      .then((isValid: string) => {
        setValidToken(isValid === "true");
      })
      .catch((error: Error) => {
        onError(error.message);
      });
  };
  return { validToken, setValidToken: setValidTokenWithFetch };
}

import { useState } from "react";
import { fetchVerification } from "../utils/fetchs";

export function useVerifyToken() {
  const [validToken, setValidToken] = useState<boolean>(false);
  const setValidTokenWithFetch = ({
    token,
    onError,
  }: {
    token: string;
    onError: (message: string) => void;
  }) => {
    fetchVerification(token)
      .then((isValid: string) => {
        let isValidToken = isValid === "true";
        setValidToken(isValidToken);
      })
      .catch((error: Error) => {
        onError(error.message);
      });
  };
  return { validToken, setValidToken: setValidTokenWithFetch };
}

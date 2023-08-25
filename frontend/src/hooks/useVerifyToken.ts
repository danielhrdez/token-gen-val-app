import { useState } from "react";
import { fetchVerification } from "../utils/fetchs";

export function useVerifyToken() {
  const [validToken, setValidToken] = useState<boolean>(false);
  const setValidTokenWithFetch = (token: string) => {
    return fetchVerification(token)
      .then((isValid: string) => {
        let isValidToken = isValid === "true";
        setValidToken(isValidToken);
        return isValidToken;
      })
      .catch((error: Error) => {
        return error;
      });
  };
  return { validToken, setValidToken: setValidTokenWithFetch };
}

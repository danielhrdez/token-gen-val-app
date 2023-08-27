import { Digit } from "../types/digits";
import { Token } from "../types/token";
import { generateUrl, verifyUrl } from "./constants";
import { tokenToString } from "./tokenToString";

/**
 * Fetches a JSON response from the given URL using POST method.
 * @param url The URL to fetch from.
 * @param body The body of the request.
 * @returns A promise that resolves to the JSON response.
 */
async function fetchPostJsonText(url: string, body: object|string) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.text();
}

/**
 * Fetches a the generated token from the server.
 * @param digits The digits to generate the token from.
 */
export function fetchGeneration(digits: Digit[]) {
  return fetchPostJsonText(generateUrl, digits);
}

/**
 * Fetches a the verification result from the server.
 * @param token The token to verify.
 */
export function fetchVerification(token: Token) {
  const tokenString = tokenToString(token);
  return fetchPostJsonText(verifyUrl, tokenString);
}

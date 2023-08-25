import { generateUrl, verifyUrl } from "./constants";

async function fetchPostJsonText(url: string, body: any) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  return await response.text();
}

export function fetchGeneration(digits: number[]) {
  return fetchPostJsonText(generateUrl, JSON.stringify(digits));
}

export function fetchVerification(token: string) {
  return fetchPostJsonText(verifyUrl, JSON.stringify(token));
}

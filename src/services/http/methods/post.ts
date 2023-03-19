import { customFetch } from "@/services/http/client/customFetch";
import type { Endpoint, RequestOptions } from "@/services/http/types";

type PostRequestOptions = Omit<RequestOptions, "body">;

/**
 * ### POST
 *
 * The **HTTP POST method** sends data to the server.
 * The type of the body of the request is indicated by the Content-Type header.
 * This header defaults to "application/json".
 *
 * The following are the default options:
 * - `cache: "default",`
 * - `credentials: "same-origin"`
 * - `mode: "cors"`
 * - `redirect: "follow"`
 * - `referrerPolicy: "no-referrer"`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
 *
 * @returns Data requested in a JSON response parsed into native JavaScript object.
 */
export const post = async <Body, T = Record<string, never>>(
  endpoint: Endpoint,
  body: Body,
  options?: PostRequestOptions
): Promise<T> => {
  const url = `${import.meta.env.VITE_API}${endpoint}`;
  const response = await customFetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options?.headers,
    },
    cache: "default",
    credentials: "same-origin",
    mode: "cors",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    ...options,
  });
  return response.json();
};

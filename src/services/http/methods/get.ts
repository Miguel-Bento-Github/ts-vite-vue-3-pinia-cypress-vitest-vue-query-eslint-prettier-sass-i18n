import { customFetch } from "@/services/http/client/customFetch";
import type { Endpoint, RequestOptions } from "@/services/http/types";

/**
 * ### GET
 *
 * The **HTTP GET method** requests a representation of the specified resource.
 * Requests using GET should only be used to request data.
 *
 * The following are the default options:
 * - `cache: "default",`
 * - `credentials: "same-origin"`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
 *
 * @returns Data requested in a JSON response parsed into native JavaScript object.
 */
export const get = async <T>(
  endpoint: Endpoint,
  options?: RequestOptions
): Promise<T> => {
  const url = `${import.meta.env.VITE_API}${endpoint}`;
  const response = await customFetch(url, {
    method: "GET",
    cache: "default",
    headers: {
      Accept: "application/json",
      ...options?.headers,
    },
    credentials: "same-origin",
    ...options,
  });
  return response.json();
};

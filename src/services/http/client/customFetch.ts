import { ResponseStatusError } from "@/services/http/errors/ResponseStatusError";

/**
 * A wrapper around the browser native `fetch` api.
 * Unlike native `fetch`, this **does** reject when encountering an HTTP error status.
 * This allows us to `catch` specific a specific status.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
export const customFetch = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new ResponseStatusError(
      `[${response.status}] ${response.statusText}`,
      response.status
    );
  }
  return response;
};

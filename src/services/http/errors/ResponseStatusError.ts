/**
 * Thrown when an HTTP request responds with an error status.
 */
export class ResponseStatusError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
    this.name = "ResponseStatusError";
  }
}

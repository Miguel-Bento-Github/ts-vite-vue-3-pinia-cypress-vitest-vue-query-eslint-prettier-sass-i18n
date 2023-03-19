export type RequestOptions = Omit<RequestInit, "method" | "headers"> & {
  headers?: Record<string, string>;
};

# `http` service

Uses the browser native `fetch` api to make HTTP requests.

## Usage

This service should **not** be used by UI components.

Use it to build a collection of functions to communicate with an API.

Below is an example of a simple POST request to authenticate.
It takes a username and password and returns a token if all goes well.

```ts
import { post, ResponseStatusError } from "@/services/http";

type AuthenticationTokenRequestBody = {
  email: string;
  password: string;
};

type AuthenticationTokenResponseBody = {
  token: string;
};

export const authenticationToken = async (
  email: string,
  password: string
): Promise<string | null> => {
  try {
    const response = await post<
      AuthenticationTokenRequestBody,
      AuthenticationTokenResponseBody
    >("/authentication_token", {
      email,
      password
    });

    return response.token;
  } catch (e) {
    if (e instanceof ResponseStatusError && e.status === 404) {
      console.info("caught a 404 error");
    } else {
      throw e;
    }
  }

  return null;
};
```

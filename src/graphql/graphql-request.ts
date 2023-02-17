import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  "https://stage-api.stagefam.com/graphql",
  {
    headers: {
      "X-Referer": "https://sample.stagefam.com",
    },
  }
);

/**
 * client.requestの`requestHeaders`に渡してください
 * @see https://github.com/jasonkuhrt/graphql-request#passing-headers-in-each-request
 * @param token
 * @returns
 */
export const createAuthorizationHeader = (
  token: string | undefined
): HeadersInit | undefined => {
  return token ? { Authorization: `Bearer ${token}` } : undefined;
};

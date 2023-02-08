import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  "https://stage-api.stagefam.com/graphql",
  {
    headers: {
      "X-Referer": "https://sample.stagefam.com",
    },
  }
);

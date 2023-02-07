import { GraphQLClient } from "graphql-request";

export const RickAndMortyAPIClient = new GraphQLClient(
  "https://rickandmortyapi.com/graphql"
);

export const FAMStageAPI = new GraphQLClient(
  "https://stage-api.stagefam.com/graphql",
  {
    headers: {
      "X-Referer": "https://sample.stagefam.com",
    },
  }
);

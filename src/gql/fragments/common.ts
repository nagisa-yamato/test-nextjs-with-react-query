import { graphql } from "@/gql/generated";

export const PageInfoFragment = graphql(`
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`);

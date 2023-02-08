import { graphql } from "@/gql/generated";

export const PageInfoFragment = graphql(`
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`);

export const SharedFileFragment = graphql(`
  fragment SharedFileFragment on SharedFile {
    id
    url
    alternativeContent
  }
`);

import { graphql } from "@/graphql/generated";

export const PageInfoFragment = graphql(`
  fragment PageInfo on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`);

export const SharedFileFragment = graphql(`
  fragment SharedFile on SharedFile {
    id
    url
    alternativeContent
  }
`);

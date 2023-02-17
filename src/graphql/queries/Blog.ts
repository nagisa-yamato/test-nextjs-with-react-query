import { createQueryKeys } from "@lukemorales/query-key-factory";
import { RequestOptions } from "graphql-request";
import { graphql } from "../generated";
import { BlogQueryVariables } from "../generated/graphql";
import { client, createAuthorizationHeader } from "../graphql-request";

const BlogQueryDocument = graphql(`
  query Blog(
    $slug: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    blog(slug: $slug) {
      id
      posts(
        first: $first
        after: $after
        last: $last
        before: $before
        orderBy: { direction: DESC, field: START_AT }
      ) {
        ...BlogPostConnection
      }
    }
  }
`);

type FetchBlogParams = {
  variables: BlogQueryVariables;
  token?: string;
  signal: RequestOptions["signal"];
};

export const fetchBlog = async ({
  variables,
  token,
  signal,
}: FetchBlogParams) => {
  const response = await client.request({
    document: BlogQueryDocument,
    variables,
    requestHeaders: createAuthorizationHeader(token),
    signal,
  });
  return response.blog;
};

export const blogKeys = createQueryKeys("Blog", {
  withVariables: (variables: BlogQueryVariables) => ({
    queryKey: [{ ...variables }],
  }),
});

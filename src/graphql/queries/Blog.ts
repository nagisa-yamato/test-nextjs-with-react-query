import { createQueryKeys } from "@lukemorales/query-key-factory";
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

export const fetchBlog = async (
  variables: BlogQueryVariables,
  token?: string
) => {
  const response = await client.request(
    BlogQueryDocument,
    variables,
    createAuthorizationHeader(token)
  );
  return response.blog;
};

export const blogKeys = createQueryKeys("Blog", {
  withVariables: (variables: BlogQueryVariables) => ({
    queryKey: [{ ...variables }],
  }),
});

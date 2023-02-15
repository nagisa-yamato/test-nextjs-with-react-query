import { createQueryKeys } from "@lukemorales/query-key-factory";
import { graphql } from "../generated";
import { BlogQueryVariables } from "../generated/graphql";
import { client, setAuthorizationHeader } from "../graphql-request";

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
  if (token) {
    setAuthorizationHeader(token);
  }
  const response = await client.request(BlogQueryDocument, variables);
  return response.blog;
};

export const blogKeys = createQueryKeys("getBlog", {
  withVariables: (variables: BlogQueryVariables) => ({
    queryKey: [{ ...variables }],
  }),
});

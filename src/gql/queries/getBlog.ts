import { createQueryKeys } from "@lukemorales/query-key-factory";
import { graphql } from "../generated";
import { GetBlogQueryVariables } from "../generated/graphql";
import { client, setAuthorizationHeader } from "../graphql-request";

const getBlogQueryDocument = graphql(`
  query getBlog(
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
        ...BlogPostConnectionFragment
      }
    }
  }
`);

export const getBlog = async (
  variables: GetBlogQueryVariables,
  token?: string
) => {
  if (token) {
    setAuthorizationHeader(token);
  }
  const response = await client.request(getBlogQueryDocument, variables);
  return response.blog;
};

export const getBlogKeys = createQueryKeys("getBlog", {
  withVariables: (variables: GetBlogQueryVariables) => ({
    queryKey: [{ ...variables }],
  }),
});

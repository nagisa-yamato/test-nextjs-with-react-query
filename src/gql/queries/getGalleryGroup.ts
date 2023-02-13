import { graphql } from "@/gql/generated";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { GalleryGroupQueryVariables } from "@/gql/generated/graphql";
import { client, setAuthorizationHeader } from "../graphql-request";

const GalleryGroupQueryDocument = graphql(`
  query GalleryGroup(
    $slug: String!
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    galleryGroup(slug: $slug) {
      id
      galleries(
        first: $first
        after: $after
        last: $last
        before: $before
        orderBy: { direction: DESC, field: START_AT }
      ) {
        ...GalleryConnection
      }
    }
  }
`);

export const getGalleryGroup = async (
  variables: GalleryGroupQueryVariables,
  token?: string
) => {
  if (token) {
    setAuthorizationHeader(token);
  }
  const response = await client.request(GalleryGroupQueryDocument, variables);
  return response.galleryGroup;
};

/**
 * @see https://github.com/lukemorales/query-key-factory#fine-grained-declaration-colocated-by-features
 */
export const getGalleryGroupKeys = createQueryKeys("getGalleryGroup", {
  withVariables: (variables: GalleryGroupQueryVariables) => ({
    queryKey: [{ ...variables }],
  }),
});

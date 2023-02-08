import { graphql } from "@/gql/generated";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { GetGalleryGroupQueryVariables } from "@/gql/generated/graphql";
import { client, setAuthorizationHeader } from "../graphql-request";

const getGalleryGroupQueryDocument = graphql(`
  query getGalleryGroup(
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
        ...GalleryConnectionFragment
      }
    }
  }
`);

export const getGalleryGroup = async (
  variables: GetGalleryGroupQueryVariables,
  token?: string
) => {
  if (token) {
    setAuthorizationHeader(token);
  }
  const response = await client.request(
    getGalleryGroupQueryDocument,
    variables
  );
  return response.galleryGroup;
};

/**
 * @see https://github.com/lukemorales/query-key-factory#fine-grained-declaration-colocated-by-features
 */
export const getGalleryGroupKeys = createQueryKeys("getGalleryGroup", {
  withVariables: (variables: GetGalleryGroupQueryVariables) => ({
    queryKey: [{ ...variables }],
  }),
});

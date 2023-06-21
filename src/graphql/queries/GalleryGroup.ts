import { graphql } from "@/graphql/generated";
import { GalleryGroupQueryVariables } from "@/graphql/generated/graphql";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { RequestOptions } from "graphql-request";
import { client, createAuthorizationHeader } from "../../lib/graphql-request";

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

type FetchGalleryGroupParams = {
  variables: GalleryGroupQueryVariables;
  token?: string;
  signal: RequestOptions["signal"];
};

export const fetchGalleryGroup = async ({
  variables,
  token,
  signal,
}: FetchGalleryGroupParams) => {
  const response = await client.request({
    document: GalleryGroupQueryDocument,
    variables,
    requestHeaders: createAuthorizationHeader(token),
    signal,
  });
  return response.galleryGroup;
};

/**
 * @see https://github.com/lukemorales/query-key-factory#fine-grained-declaration-colocated-by-features
 */
export const galleryGroupKeys = createQueryKeys("GalleryGroup", {
  withVariables: (variables: GalleryGroupQueryVariables) => ({
    queryKey: [{ ...variables }],
  }),
});

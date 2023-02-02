import { graphql } from "@/gql/generated";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { GetGalleryGroupQueryVariables } from "@/gql/generated/graphql";
import client from "../graphql-request";

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
      name
      slug
      isAvailable
      galleries(
        first: $first
        after: $after
        last: $last
        before: $before
        orderBy: { direction: ASC, field: START_AT }
      ) {
        ...GalleryConnectionFragment
      }
    }
  }
`);

const getGalleryGroup = async (
  variables: GetGalleryGroupQueryVariables,
  token?: string
) => {
  client.setEndpoint("https://stage-api.stagefam.com/graphql");
  if (token) {
    client.setHeader("Authorization", `Bearer ${token}`);
  }
  client.setHeader("X-Referer", "https://sample.stagefam.com");
  const response = await client.request(
    getGalleryGroupQueryDocument,
    variables
  );
  return response.galleryGroup;
};

/**
 * @see https://github.com/lukemorales/query-key-factory#generate-the-query-options-you-need-to-run-usequery
 */
export const getGalleryGroupKeys = (token?: string) =>
  createQueryKeys("getGalleryGroup", {
    withVariables: (variables: GetGalleryGroupQueryVariables) => ({
      queryKey: [{ ...variables }],
      queryFn: async () => await getGalleryGroup(variables, token),
    }),
  });

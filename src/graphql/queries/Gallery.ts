import { createQueryKeys } from "@lukemorales/query-key-factory";
import { RequestOptions } from "graphql-request";
import { client, createAuthorizationHeader } from "../../lib/graphql-request";
import { graphql } from "../generated";
import { GalleryQueryVariables } from "../generated/graphql";

const GalleryQueryDocument = graphql(`
  query Gallery($id: ID!) {
    gallery(id: $id) {
      id
      name
      contents {
        ...GalleryContent
      }
      description
      releaseDay
    }
  }
`);

type FetchGalleryParams = {
  variables: GalleryQueryVariables;
  token?: string;
  signal: RequestOptions["signal"];
};

export const fetchGallery = async ({
  variables,
  token,
  signal,
}: FetchGalleryParams) => {
  const response = await client.request({
    document: GalleryQueryDocument,
    variables,
    requestHeaders: createAuthorizationHeader(token),
    signal,
  });
  return response.gallery;
};

export const galleryKeys = createQueryKeys("Gallery", {
  withVariables: (variables: GalleryQueryVariables) => ({
    queryKey: [{ ...variables }],
  }),
});

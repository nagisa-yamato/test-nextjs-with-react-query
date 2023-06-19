import { COOKIE_NAME_ACCESS_TOKEN } from "@/constants";
import { GalleryQueryVariables } from "@/graphql/generated/graphql";
import { fetchGallery, galleryKeys } from "@/graphql/queries/Gallery";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import getQueryClient from "../../getQueryClient";
import GalleryPage, { DEFAULT_VARIABLES } from "./GalleryPage";

export default async function Gallery() {
  const queryClient = getQueryClient();
  const variables: GalleryQueryVariables = DEFAULT_VARIABLES;
  const cookieStore = cookies();
  await queryClient.prefetchQuery({
    ...galleryKeys.withVariables(variables),
    queryFn: ({ signal }) =>
      fetchGallery({
        variables,
        token: cookieStore.get(COOKIE_NAME_ACCESS_TOKEN)?.value,
        signal,
      }),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <GalleryPage />
    </Hydrate>
  );
}

import {
  GalleryContainer,
  GalleryImg,
  OuterContainer,
} from "@/components/pages/Gallery.styles";
import { COOKIE_NAME_ACCESS_TOKEN } from "@/constants";
import { SharedFileFragment } from "@/graphql/fragments/common";
import {
  GalleryContentFragment,
  GalleryImagePresetUrlFragment,
} from "@/graphql/fragments/gallery";
import { useFragment } from "@/graphql/generated";
import { GalleryQueryVariables } from "@/graphql/generated/graphql";
import { fetchGallery, galleryKeys } from "@/graphql/queries/Gallery";
import { cookiesApi } from "@/lib/js-cookie";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

const DEFAULT_VARIABLES = {
  id: "Z2FsbGVyeSM1MDE=",
} as const;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();
  const variables: GalleryQueryVariables = DEFAULT_VARIABLES;
  await queryClient.prefetchQuery({
    ...galleryKeys.withVariables(variables),
    queryFn: ({ signal }) =>
      fetchGallery({
        variables,
        token: req.cookies[COOKIE_NAME_ACCESS_TOKEN],
        signal,
      }),
  });

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

export default function PagesGalleryPage() {
  const { data } = useQuery({
    ...galleryKeys.withVariables(DEFAULT_VARIABLES),
    queryFn: ({ signal }) =>
      fetchGallery({
        variables: DEFAULT_VARIABLES,
        token: cookiesApi.get(COOKIE_NAME_ACCESS_TOKEN),
        signal,
      }),
  });
  const galleryContents = useFragment(GalleryContentFragment, data?.contents);

  return (
    <>
      <h1>gallery</h1>
      <OuterContainer>
        <GalleryContainer>
          {galleryContents?.map((content) => {
            /* eslint-disable react-hooks/rules-of-hooks */
            const imagePresetUrl = useFragment(
              GalleryImagePresetUrlFragment,
              content.imagePresetUrl,
            );
            const contentFile = useFragment(
              SharedFileFragment,
              content.contentFile,
            );
            /* eslint-enable */
            return (
              <GalleryImg
                key={content.id}
                src={imagePresetUrl?.xLarge}
                alt={contentFile.alternativeContent}
                loading="lazy"
              />
            );
          })}
        </GalleryContainer>
      </OuterContainer>
    </>
  );
}

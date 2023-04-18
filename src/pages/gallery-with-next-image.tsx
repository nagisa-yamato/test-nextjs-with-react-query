import {
  GalleryContainer,
  GalleryImageWrap,
  OuterContainer,
  StyledNextImage,
} from "@/components/pages/Gallery.styles";
import { COOKIE_NAME_ACCESS_TOKEN } from "@/constants";
import { SharedFileFragment } from "@/graphql/fragments/common";
import { GalleryContentFragment } from "@/graphql/fragments/gallery";
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

export default function PagesGalleryPageWithNextImage() {
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
      <h1>gallery-with-next-image</h1>
      <OuterContainer>
        <GalleryContainer>
          {galleryContents?.map((content) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const contentFile = useFragment(
              SharedFileFragment,
              content.contentFile
            );
            return (
              <GalleryImageWrap key={content.id}>
                <StyledNextImage
                  src={contentFile.url}
                  alt={contentFile.alternativeContent}
                  fill
                  // https://web.dev/learn/design/responsive-images/#sizes
                  sizes="(min-width: 720px) 50vw, 100vw"
                />
              </GalleryImageWrap>

              // // eslint-disable-next-line @next/next/no-img-element
              // <GalleryImg
              //   key={content.id}
              //   src={contentFile.url}
              //   alt={contentFile.alternativeContent}
              // />
            );
          })}
        </GalleryContainer>
      </OuterContainer>
    </>
  );
}

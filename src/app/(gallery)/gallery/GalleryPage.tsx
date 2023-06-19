"use client";

import {
  GalleryContainer,
  GalleryImg,
  OuterContainer,
} from "@/app/(gallery)/Gallery.styles";
import { COOKIE_NAME_ACCESS_TOKEN } from "@/constants";
import { SharedFileFragment } from "@/graphql/fragments/common";
import {
  GalleryContentFragment,
  GalleryImagePresetUrlFragment,
} from "@/graphql/fragments/gallery";
import { useFragment } from "@/graphql/generated";
import { fetchGallery, galleryKeys } from "@/graphql/queries/Gallery";
import { cookiesApi } from "@/lib/js-cookie";
import { useQuery } from "@tanstack/react-query";

export const DEFAULT_VARIABLES = {
  id: "Z2FsbGVyeSM1MDE=",
} as const;

export default function GalleryPage() {
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
              content.imagePresetUrl
            );
            const contentFile = useFragment(
              SharedFileFragment,
              content.contentFile
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

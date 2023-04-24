import { SharedFileFragment } from "@/graphql/fragments/common";
import {
  GalleryContentFragment,
  GalleryFragment,
  GalleryImagePresetUrlFragment,
} from "@/graphql/fragments/gallery";
import { FragmentType, useFragment } from "@/graphql/generated";
import { Article, StyledNextImage } from "./GalleryArticle.styles";

const GalleryArticle = ({
  gallery,
}: {
  gallery: FragmentType<typeof GalleryFragment>;
}) => {
  const galleryFragment = useFragment(GalleryFragment, gallery);
  const galleryContentFragment = useFragment(
    GalleryContentFragment,
    galleryFragment.contents
  );
  const sharedFileFragment = useFragment(
    SharedFileFragment,
    galleryContentFragment?.[0].contentFile
  );
  const imagePresetUrlFragment = useFragment(
    GalleryImagePresetUrlFragment,
    galleryContentFragment?.[0].imagePresetUrl
  );
  const searchParams = new URL(imagePresetUrlFragment?.xLarge ?? "")
    ?.searchParams;
  const width = searchParams.get("w");
  const height = searchParams.get("h");

  return (
    <Article>
      <h2>{galleryFragment.name}</h2>
      <StyledNextImage
        src={imagePresetUrlFragment ? imagePresetUrlFragment.xLarge : ""}
        alt={sharedFileFragment ? sharedFileFragment.alternativeContent : ""}
        width={Number(width)}
        height={Number(height)}
      />
    </Article>
  );
};

export default GalleryArticle;

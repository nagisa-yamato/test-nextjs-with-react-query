import { SharedFileFragment } from "@/graphql/fragments/common";
import {
  GalleryFragment,
  GalleryContentFragment,
} from "@/graphql/fragments/gallery";
import { FragmentType, useFragment } from "@/graphql/generated";
import { Article, StyledImage } from "./GalleryArticle.styles";

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

  return (
    <Article>
      <h2>{galleryFragment.name}</h2>
      {!!sharedFileFragment?.url && (
        <StyledImage
          src={sharedFileFragment.url}
          alt={sharedFileFragment.alternativeContent}
          width={250}
          height={250}
        />
      )}
    </Article>
  );
};

export default GalleryArticle;

import { SharedFileFragment } from "@/gql/fragments/common";
import {
  GalleryFragment,
  GalleryContentFragment,
} from "@/gql/fragments/gallery";
import { FragmentType, useFragment } from "@/gql/generated";
import styles from "./GalleryArticle.module.css";
import Image from "next/image";

const GalleryArticle = ({
  gallery,
}: {
  gallery: FragmentType<typeof GalleryFragment>;
}) => {
  /* eslint-disable react-hooks/rules-of-hooks */
  const galleryFragment = useFragment(GalleryFragment, gallery);
  const galleryContentFragment = useFragment(
    GalleryContentFragment,
    galleryFragment.contents
  );
  const sharedFileFragment = useFragment(
    SharedFileFragment,
    galleryContentFragment?.[0].contentFile
  );
  /* eslint-enable */

  return (
    <article className={styles.article}>
      <h2>{galleryFragment.name}</h2>
      {!!sharedFileFragment?.url && (
        <Image
          src={sharedFileFragment.url}
          alt={sharedFileFragment.alternativeContent}
          width={250}
          height={250}
          className={styles.image}
        />
      )}
    </article>
  );
};

export default GalleryArticle;

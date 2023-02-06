import {
  getGalleryGroup,
  getGalleryGroupKeys,
} from "@/gql/queries/getGalleryGroup";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { COOKIE_NAME_ACCESS_TOKEN } from "@/constants";
import { cookiesApi } from "@/lib/js-cookie";
import { useFragment } from "@/gql/generated/fragment-masking";
import {
  GalleryConnectionFragment,
  GalleryFragment,
  GalleryContentFragment,
} from "@/gql/fragments/gallery";
import Image from "next/image";
import styles from "@/styles/pages/Pagination.module.css";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();
  const variables = {
    slug: "blurry pictures of cats",
    first: 10,
  };
  await queryClient.prefetchQuery({
    ...getGalleryGroupKeys.withVariables(variables),
    queryFn: () =>
      getGalleryGroup(variables, req.cookies[COOKIE_NAME_ACCESS_TOKEN]),
  });

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

const Pagination = () => {
  const variables = {
    slug: "blurry pictures of cats",
    first: 10,
  };
  const { data, isLoading, error } = useQuery({
    ...getGalleryGroupKeys.withVariables(variables),
    queryFn: () =>
      getGalleryGroup(variables, cookiesApi.get(COOKIE_NAME_ACCESS_TOKEN)),
    retry: 0,
  });
  const galleryConnectionFragment = useFragment(
    GalleryConnectionFragment,
    data?.galleries
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      <h1>Pagination</h1>
      <div className={styles.galleries}>
        {galleryConnectionFragment?.edges.map(({ node }) => {
          /* eslint-disable react-hooks/rules-of-hooks */
          const galleryFragment = useFragment(GalleryFragment, node);
          const galleryContentFragment = useFragment(
            GalleryContentFragment,
            galleryFragment.contents
          );
          /* eslint-enable */
          const thumbnail = galleryContentFragment?.[0].contentFile;

          return (
            <article key={galleryFragment.id} className={styles.article}>
              <h2>{galleryFragment.name}</h2>
              {!!thumbnail?.url && (
                <Image
                  src={thumbnail.url}
                  alt={thumbnail.alternativeContent}
                  width={250}
                  height={250}
                  className={styles.image}
                />
              )}
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;

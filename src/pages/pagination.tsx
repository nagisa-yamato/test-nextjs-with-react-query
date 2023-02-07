import {
  getGalleryGroup,
  getGalleryGroupKeys,
} from "@/gql/queries/getGalleryGroup";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { COOKIE_NAME_ACCESS_TOKEN, ITEMS_PER_PAGE } from "@/constants";
import { cookiesApi } from "@/lib/js-cookie";
import { useFragment } from "@/gql/generated/fragment-masking";
import {
  GalleryConnectionFragment,
  GalleryFragment,
  GalleryContentFragment,
} from "@/gql/fragments/gallery";
import Image from "next/image";
import styles from "@/styles/pages/Pagination.module.css";
import { PageInfoFragment } from "@/gql/fragments/common";
import { useState } from "react";
import { GetGalleryGroupQueryVariables } from "@/gql/generated/graphql";
import { ClientError } from "graphql-request";
const GALLERY_GROUP_SLUG = "blurry pictures of cats";
import useAuth from "@/hooks/useAuth";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();
  const variables = {
    slug: GALLERY_GROUP_SLUG,
    first: ITEMS_PER_PAGE,
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
  const [variables, setVariables] = useState<GetGalleryGroupQueryVariables>({
    slug: GALLERY_GROUP_SLUG,
    first: ITEMS_PER_PAGE,
  });
  const { data, isLoading, isError, error } = useQuery({
    ...getGalleryGroupKeys.withVariables(variables),
    queryFn: () =>
      getGalleryGroup(variables, cookiesApi.get(COOKIE_NAME_ACCESS_TOKEN)),
  });
  const galleryConnectionFragment = useFragment(
    GalleryConnectionFragment,
    data?.galleries
  );
  const pageInfoFragment = useFragment(
    PageInfoFragment,
    galleryConnectionFragment?.pageInfo
  );
  const [page, setPage] = useState(1);
  const { refreshIdToken } = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (
    isError &&
    error instanceof ClientError &&
    error.response.status === 401
  ) {
    console.warn("refreshIdToken @pagination.tsx");
    void (async () => refreshIdToken())();
    return null;
  }

  if (isError) {
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
      <div className={styles.buttons}>
        <button
          disabled={!pageInfoFragment?.hasPreviousPage}
          onClick={() => {
            setVariables({
              slug: GALLERY_GROUP_SLUG,
              last: ITEMS_PER_PAGE,
              before: pageInfoFragment?.startCursor,
            });
            setPage((prev) => prev - 1);
          }}
        >
          戻る
        </button>
        {galleryConnectionFragment?.totalCount} 中{" "}
        {(page - 1) * ITEMS_PER_PAGE + 1} 〜{" "}
        {(page - 1) * 10 + (galleryConnectionFragment?.edges.length ?? 0)} 件目
        <button
          disabled={!pageInfoFragment?.hasNextPage}
          onClick={() => {
            setVariables({
              slug: GALLERY_GROUP_SLUG,
              first: ITEMS_PER_PAGE,
              after: pageInfoFragment?.endCursor,
            });
            setPage((prev) => prev + 1);
          }}
        >
          進む
        </button>
      </div>
    </>
  );
};

export default Pagination;

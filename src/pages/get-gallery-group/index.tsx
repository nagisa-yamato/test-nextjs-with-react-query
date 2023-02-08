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
} from "@/gql/fragments/gallery";
import styles from "./PagesGetGalleryGroup.module.css";
import { useState } from "react";
import { GetGalleryGroupQueryVariables } from "@/gql/generated/graphql";
import { ClientError } from "graphql-request";
const GALLERY_GROUP_SLUG = "blurry pictures of cats";
import useAuth from "@/hooks/useAuth";
import GalleryArticle from "@/components/GalleryArticle/GalleryArticle";
import Pagination from "@/components/Pagination/Pagination";

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

const PagesGetGalleryGroup = () => {
  const [variables, setVariables] = useState<GetGalleryGroupQueryVariables>({
    slug: GALLERY_GROUP_SLUG,
    first: ITEMS_PER_PAGE,
  });
  const { data, isLoading, isError, error, isPreviousData } = useQuery({
    ...getGalleryGroupKeys.withVariables(variables),
    queryFn: () =>
      getGalleryGroup(variables, cookiesApi.get(COOKIE_NAME_ACCESS_TOKEN)),
    // NOTE:
    // クライアントサイドでfetchしたときのちらつき防止
    // https://tanstack.com/query/v4/docs/react/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
    keepPreviousData: true,
  });
  const galleryConnectionFragment = useFragment(
    GalleryConnectionFragment,
    data?.galleries
  );
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
    void (async () => await refreshIdToken())();
    return null;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      <h1>get-gallery-group</h1>
      <div className={styles.galleries}>
        {galleryConnectionFragment?.edges.map(({ node }) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const id = useFragment(GalleryFragment, node).id;
          return <GalleryArticle gallery={node} key={id} />;
        })}
      </div>
      {galleryConnectionFragment?.pageInfo && (
        <Pagination
          {...{
            pageInfoFragment: galleryConnectionFragment.pageInfo,
            variables,
            setVariables,
            totalCount: galleryConnectionFragment?.totalCount ?? 0,
            currentCount: galleryConnectionFragment?.edges.length ?? 0,
            isPreviousData,
          }}
        />
      )}
    </>
  );
};

export default PagesGetGalleryGroup;

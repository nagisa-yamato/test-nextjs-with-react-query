import {
  fetchGalleryGroup,
  galleryGroupKeys,
} from "@/graphql/queries/GalleryGroup";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { COOKIE_NAME_ACCESS_TOKEN, ITEMS_PER_PAGE } from "@/constants";
import { cookiesApi } from "@/lib/js-cookie";
import { useFragment } from "@/graphql/generated/fragment-masking";
import {
  GalleryConnectionFragment,
  GalleryFragment,
} from "@/graphql/fragments/gallery";
import { useEffect, useMemo, useState } from "react";
import { GalleryGroupQueryVariables } from "@/graphql/generated/graphql";
import GalleryArticle from "@/components/GalleryArticle/GalleryArticle";
import Pagination, {
  organizeQueryParamsToVariables,
} from "@/components/Pagination/Pagination";
import { GalleryWrap } from "../components/pages/GalleryGroup.styles";
import { isEmptyObject } from "@/utils/isEmptyObject";
import { useRouter } from "next/router";
const GALLERY_GROUP_SLUG = "blurry pictures of cats";
const DEFAULT_VARIABLES = {
  slug: GALLERY_GROUP_SLUG,
  first: ITEMS_PER_PAGE,
} as const;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const queryClient = new QueryClient();
  const variables: GalleryGroupQueryVariables = isEmptyObject(query)
    ? DEFAULT_VARIABLES
    : organizeQueryParamsToVariables<GalleryGroupQueryVariables>({
        ...query,
        slug: GALLERY_GROUP_SLUG,
      });
  await queryClient.prefetchQuery({
    ...galleryGroupKeys.withVariables(variables),
    queryFn: ({ signal }) =>
      fetchGalleryGroup({
        variables,
        token: req.cookies[COOKIE_NAME_ACCESS_TOKEN],
        signal,
      }),
  });

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

/**
 * ページ > ギャラリー一覧demo
 * @returns
 */
const PagesGalleryGroup = () => {
  const router = useRouter();
  const baseVariables: GalleryGroupQueryVariables = useMemo(
    () =>
      isEmptyObject(router.query)
        ? DEFAULT_VARIABLES
        : organizeQueryParamsToVariables<GalleryGroupQueryVariables>({
            ...router.query,
            slug: GALLERY_GROUP_SLUG,
          }),
    [router.query]
  );
  const [variables, setVariables] =
    useState<GalleryGroupQueryVariables>(baseVariables);
  useEffect(() => setVariables(baseVariables), [baseVariables]);

  const { data, isLoading, isError, error, isPreviousData } = useQuery({
    ...galleryGroupKeys.withVariables(variables),
    queryFn: ({ signal }) =>
      fetchGalleryGroup({
        variables,
        token: cookiesApi.get(COOKIE_NAME_ACCESS_TOKEN),
        signal,
      }),
    // NOTE:
    // クライアントサイドでfetchしたときのちらつき防止
    // https://tanstack.com/query/v4/docs/react/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata
    keepPreviousData: true,
  });
  const galleryConnectionFragment = useFragment(
    GalleryConnectionFragment,
    data?.galleries
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      <h1>gallery-group</h1>
      <GalleryWrap>
        {galleryConnectionFragment?.edges.map(({ node }) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const id = useFragment(GalleryFragment, node).id;
          return <GalleryArticle gallery={node} key={id} />;
        })}
      </GalleryWrap>
      {galleryConnectionFragment?.pageInfo && (
        <Pagination<GalleryGroupQueryVariables>
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

export default PagesGalleryGroup;

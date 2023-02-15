import Pagination, {
  deletePagePropertyFromObject,
} from "@/components/Pagination/Pagination";
import { COOKIE_NAME_ACCESS_TOKEN, ITEMS_PER_PAGE } from "@/constants";
import {
  BlogPostConnectionFragment,
  BlogPostFragment,
} from "@/gql/fragments/blog";
import { useFragment } from "@/gql/generated";
import { BlogQueryVariables } from "@/gql/generated/graphql";
import { fetchBlog, blogKeys } from "@/gql/queries/Blog";
import useAuth from "@/hooks/useAuth";
import { cookiesApi } from "@/lib/js-cookie";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { GetServerSideProps } from "next";
import { useEffect, useMemo, useState } from "react";
import BlogArticle from "@/components/BlogArticle/BlogArticle";
import { BlogsWrap } from "./Blog.styles";
import { isEmptyObject } from "@/utils/isEmptyObject";
import { useRouter } from "next/router";
const BLOG_SLUG = "むっくり";
const DEFAULT_VARIABLES = {
  slug: BLOG_SLUG,
  first: ITEMS_PER_PAGE,
} as const;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const queryClient = new QueryClient();
  const baseVariables: BlogQueryVariables = isEmptyObject(query)
    ? DEFAULT_VARIABLES
    : deletePagePropertyFromObject<BlogQueryVariables>({
        ...query,
        slug: BLOG_SLUG,
      });
  await queryClient.prefetchQuery({
    ...blogKeys.withVariables(baseVariables),
    queryFn: () =>
      fetchBlog(baseVariables, req.cookies[COOKIE_NAME_ACCESS_TOKEN]),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const PagesBlog = () => {
  const router = useRouter();
  /**
   * NOTE:
   * memoizeしないと下記useEffectで無限ループ
   */
  const baseVariables: BlogQueryVariables & { page?: number } = useMemo(
    () =>
      isEmptyObject(router.query)
        ? DEFAULT_VARIABLES
        : deletePagePropertyFromObject({ ...router.query, slug: BLOG_SLUG }),
    [router.query]
  );
  const [variables, setVariables] = useState<BlogQueryVariables>(baseVariables);
  /**
   * NOTE:
   * AppHeaderのNextLinkで同じページに遷移する場合、
   * useEffectで明示的にvariablesを更新しないといけない
   */
  useEffect(() => {
    setVariables(baseVariables);
  }, [baseVariables]);

  const { data, isLoading, isError, error, isPreviousData } = useQuery({
    ...blogKeys.withVariables(variables),
    queryFn: () =>
      fetchBlog(variables, cookiesApi.get(COOKIE_NAME_ACCESS_TOKEN)),
    keepPreviousData: true,
  });
  const blogPostConnectionFragment = useFragment(
    BlogPostConnectionFragment,
    data?.posts
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
    console.warn("refreshIdToken blog/index.tsx");
    void (async () => await refreshIdToken())();
    return null;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      <h1>blog</h1>
      <BlogsWrap>
        {blogPostConnectionFragment?.edges.map(({ node }) => {
          /* eslint-disable react-hooks/rules-of-hooks */
          const blogPostFragment = useFragment(BlogPostFragment, node);
          /* eslint-enable */
          return <BlogArticle key={blogPostFragment.id} blogPost={node} />;
        })}
      </BlogsWrap>
      {blogPostConnectionFragment?.pageInfo && (
        <Pagination<BlogQueryVariables>
          {...{
            pageInfoFragment: blogPostConnectionFragment.pageInfo,
            variables,
            setVariables,
            totalCount: blogPostConnectionFragment?.totalCount ?? 0,
            currentCount: blogPostConnectionFragment?.edges.length ?? 0,
            isPreviousData,
          }}
        />
      )}
    </>
  );
};

export default PagesBlog;

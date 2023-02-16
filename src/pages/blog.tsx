import Pagination, {
  organizeQueryParamsToVariables,
} from "@/components/Pagination/Pagination";
import { COOKIE_NAME_ACCESS_TOKEN, ITEMS_PER_PAGE } from "@/constants";
import {
  BlogPostConnectionFragment,
  BlogPostFragment,
} from "@/graphql/fragments/blog";
import { useFragment } from "@/graphql/generated";
import { BlogQueryVariables } from "@/graphql/generated/graphql";
import { fetchBlog, blogKeys } from "@/graphql/queries/Blog";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useEffect, useMemo, useState } from "react";
import BlogArticle from "@/components/BlogArticle/BlogArticle";
import { BlogsWrap } from "../components/pages/Blog.styles";
import { isEmptyObject } from "@/utils/isEmptyObject";
import { useRouter } from "next/router";
import { cookiesApi } from "@/lib/js-cookie";
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
  const variables: BlogQueryVariables = isEmptyObject(query)
    ? DEFAULT_VARIABLES
    : organizeQueryParamsToVariables<BlogQueryVariables>({
        ...query,
        slug: BLOG_SLUG,
      });
  await queryClient.prefetchQuery({
    ...blogKeys.withVariables(variables),
    queryFn: () => fetchBlog(variables, req.cookies[COOKIE_NAME_ACCESS_TOKEN]),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

/**
 * ページ > ブログ一覧demo
 * @returns
 */
const PagesBlog = () => {
  const router = useRouter();
  /**
   * NOTE:
   * memoizeしないと下記useEffectで無限ループ
   */
  const baseVariables: BlogQueryVariables = useMemo(
    () =>
      isEmptyObject(router.query)
        ? DEFAULT_VARIABLES
        : organizeQueryParamsToVariables<BlogQueryVariables>({
            ...router.query,
            slug: BLOG_SLUG,
          }),
    [router.query]
  );
  const [variables, setVariables] = useState<BlogQueryVariables>(baseVariables);
  /**
   * NOTE:
   * AppHeaderのNextLinkで同じページに遷移する場合、
   * useEffectで明示的にvariablesを更新しないといけない
   */
  useEffect(() => setVariables(baseVariables), [baseVariables]);

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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      <h1>blog</h1>
      <BlogsWrap>
        {blogPostConnectionFragment?.edges.map(({ node }) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const blogPostFragment = useFragment(BlogPostFragment, node);
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

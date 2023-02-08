import Pagination from "@/components/Pagination/Pagination";
import { COOKIE_NAME_ACCESS_TOKEN, ITEMS_PER_PAGE } from "@/constants";
import {
  BlogPostConnectionFragment,
  BlogPostFragment,
} from "@/gql/fragments/blog";
import { useFragment } from "@/gql/generated";
import { GetBlogQueryVariables } from "@/gql/generated/graphql";
import { getBlog, getBlogKeys } from "@/gql/queries/getBlog";
import useAuth from "@/hooks/useAuth";
import { cookiesApi } from "@/lib/js-cookie";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { GetServerSideProps } from "next";
import { useState } from "react";
import styles from "./PagesGetBlog.module.css";
import BlogArticle from "@/components/BlogArticle/BlogArticle";
const BLOG_SLUG = "むっくり";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();
  const variables = { slug: BLOG_SLUG, first: ITEMS_PER_PAGE };
  await queryClient.prefetchQuery({
    ...getBlogKeys.withVariables(variables),
    queryFn: () => getBlog(variables, req.cookies[COOKIE_NAME_ACCESS_TOKEN]),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const PagesGetBlog = () => {
  const [variables, setVariables] = useState<GetBlogQueryVariables>({
    slug: BLOG_SLUG,
    first: ITEMS_PER_PAGE,
  });
  const { data, isLoading, isError, error, isPreviousData } = useQuery({
    ...getBlogKeys.withVariables(variables),
    queryFn: () => getBlog(variables, cookiesApi.get(COOKIE_NAME_ACCESS_TOKEN)),
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
    console.warn("refreshIdToken get-blog/index.tsx");
    void (async () => await refreshIdToken())();
    return null;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      <h1>get-blog</h1>
      <div className={styles.blogs}>
        {blogPostConnectionFragment?.edges.map(({ node }) => {
          /* eslint-disable react-hooks/rules-of-hooks */
          const blogPostFragment = useFragment(BlogPostFragment, node);
          /* eslint-enable */
          return <BlogArticle key={blogPostFragment.id} blogPost={node} />;
        })}
      </div>
      {blogPostConnectionFragment?.pageInfo && (
        <Pagination
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

export default PagesGetBlog;

import { COOKIE_NAME_ACCESS_TOKEN, ITEMS_PER_PAGE } from "@/constants";
import { GetBlogQueryVariables } from "@/gql/generated/graphql";
import { getBlog, getBlogKeys } from "@/gql/queries/getBlog";
import useAuth from "@/hooks/useAuth";
import { cookiesApi } from "@/lib/js-cookie";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { GetServerSideProps } from "next";
import { useState } from "react";
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
  const { data, isLoading, isError, error } = useQuery({
    ...getBlogKeys.withVariables(variables),
    queryFn: () => getBlog(variables, cookiesApi.get(COOKIE_NAME_ACCESS_TOKEN)),
  });
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
      <h1>get-blog</h1>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default PagesGetBlog;

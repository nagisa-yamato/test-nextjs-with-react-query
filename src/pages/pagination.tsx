import {
  getGalleryGroup,
  getGalleryGroupKeys,
} from "@/gql/queries/getGalleryGroup";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { COOKIE_NAME_ACCESS_TOKEN } from "@/constants";
import { cookiesApi } from "@/lib/js-cookie";

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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      <h1>Pagination</h1>
      {JSON.stringify(data)}
    </>
  );
};

export default Pagination;

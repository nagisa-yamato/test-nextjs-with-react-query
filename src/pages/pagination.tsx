import { getGalleryGroupKeys } from "@/gql/queries/getGalleryGroup";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import Cookies from "js-cookie";
import { COOKIE_NAME } from "@/constants";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    getGalleryGroupKeys(req.cookies[COOKIE_NAME]).withVariables({
      slug: "blurry pictures of cats",
      first: 10,
    })
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};

const Pagination = () => {
  const { data, isLoading, error } = useQuery({
    ...getGalleryGroupKeys(Cookies.get(COOKIE_NAME)).withVariables({
      slug: "blurry pictures of cats",
      first: 10,
    }),
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

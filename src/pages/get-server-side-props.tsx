import { getCharactersKeys } from "@/gql/queries/getCharacters";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import styles from "@/styles/GetServerSideProps.module.css";

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getCharactersKeys.withVariables({ page: 1 }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const GetServerSideProps = () => {
  const { data } = useQuery(getCharactersKeys.withVariables({ page: 1 }));

  return (
    <>
      <h1>getServerSideProps</h1>
      <div className={styles.grid}>
        {data?.results?.map((character) => (
          <article key={character?.id} className={styles.article}>
            <h2>{character?.name}</h2>
            {character?.image && (
              <Image
                src={character.image}
                alt={`Picture of ${
                  character?.name ?? "a Rick and Morty character"
                }`}
                width={250}
                height={250}
                className={styles.image}
              />
            )}
          </article>
        ))}
      </div>
    </>
  );
};

export default GetServerSideProps;

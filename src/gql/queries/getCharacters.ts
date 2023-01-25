import { graphql } from "@/gql/generated";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { GetCharactersQueryVariables } from "../generated/graphql";
import client from "../graphql-request";

const getCharactersQueryDocument = graphql(`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        next
        pages
        prev
      }
      results {
        id
        image
        name
      }
    }
  }
`);

const getCharacters = async (variables: GetCharactersQueryVariables) => {
  const response = await client.request(getCharactersQueryDocument, variables);
  return response.characters;
};

/**
 * @see https://github.com/lukemorales/query-key-factory#generate-the-query-options-you-need-to-run-usequery
 */
export const getCharactersKeys = createQueryKeys("getCharacters", {
  withVariables: (variables: GetCharactersQueryVariables) => ({
    queryKey: [{ ...variables }],
    queryFn: async () => await getCharacters(variables),
  }),
});

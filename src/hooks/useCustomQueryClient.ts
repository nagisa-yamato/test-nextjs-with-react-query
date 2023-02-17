import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

/**
 * SSRの場合はQueryClientをstate化する
 * @see https://tanstack.com/query/latest/docs/react/guides/ssr#using-hydration
 *
 * QueryClientをインスタンス化する際、共通エラーハンドリングを入れる
 * @see https://tkdodo.eu/blog/react-query-error-handling#the-global-callbacks
 *
 * @returns
 */
const useCustomQueryClient = () => {
  const [customQueryClient] = useState(
    () =>
      new QueryClient({
        // https://tanstack.com/query/v4/docs/react/reference/QueryCache#global-callbacks
        queryCache: new QueryCache(),
        // https://tanstack.com/query/v4/docs/react/reference/MutationCache#global-callbacks
        mutationCache: new MutationCache(),
      })
  );

  return { customQueryClient };
};

export default useCustomQueryClient;

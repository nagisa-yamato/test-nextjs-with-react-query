import type { AppProps } from "next/app";
import {
  DehydratedState,
  Hydrate,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import AppHeader from "@/components/AppHeader/AppHeader";
import { AuthProvider } from "@/context/AuthProvider";
import GlobalStyle from "@/components/GlobalStyle.styles";
import { AppMain } from "@/components/AppMain/AppMain.styles";
import useCustomQueryClient from "@/hooks/useQueryClient";

const App = ({
  Component,
  pageProps,
}: // https://github.com/vercel/next.js/issues/40372#issuecomment-1279963091
AppProps<{ dehydratedState: DehydratedState }>) => {
  const { customQueryClient: queryClient } = useCustomQueryClient();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <AuthProvider>
            <AppHeader />
            <AppMain>
              <Component {...pageProps} />
            </AppMain>
          </AuthProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;

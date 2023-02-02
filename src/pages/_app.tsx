import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import Link from "next/link";
import mainStyles from "@/styles/Main.module.css";
import headerStyles from "@/styles/Header.module.css";

export default function App({
  Component,
  pageProps,
}: // https://github.com/vercel/next.js/issues/40372#issuecomment-1279963091
AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient());

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
          <header className={headerStyles.header}>
            <nav>
              <ul className={headerStyles.ul}>
                <li>
                  <Link href="/">home</Link>
                </li>
                <li>
                  <Link href="/get-server-side-props">
                    get-server-side-props
                  </Link>
                </li>
                <li>
                  <Link href="/pagination">pagination</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className={mainStyles.main}>
            <Component {...pageProps} />
          </main>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
import React from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "../styles/globals.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {

  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
  );
}

export default MyApp;

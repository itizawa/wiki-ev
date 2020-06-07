import "../style/global.scss";

import { Provider } from "next-auth/client";
import React from "react";
import Head from "next/head";
import Layout from "@components/layout";
import appContainer from "@containers/appContainer";

export default function MyApp({ Component, pageProps }) {
  const { session } = pageProps;

  return (
    <appContainer.Provider>
      <Provider session={session}>
        <Layout>
          <Head>
            <title>Next.js + MongoDB App</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </appContainer.Provider>
  );
}

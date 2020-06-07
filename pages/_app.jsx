import "../style/global.scss";

import React from "react";
import Head from "next/head";
import Layout from "@components/layout";
import appContainer from "@containers/appContainer";

export default function MyApp({ Component, pageProps }) {
  return (
    <appContainer.Provider>
      <Layout>
        <Head>
          <title>Next.js + MongoDB App</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </appContainer.Provider>
  );
}

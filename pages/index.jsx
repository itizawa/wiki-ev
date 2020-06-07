import Head from "next/head";

export default () => {
  return (
    <div>
      <Head>
        <title>カンバン</title>
      </Head>

      <main>
        <p>index</p>
        <a href="/api/auth/signin">Sign in</a>
      </main>
    </div>
  );
};

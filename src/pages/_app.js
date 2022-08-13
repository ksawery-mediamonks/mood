import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/main.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Web Sketeleton</title>
        <meta name="description" content="Web Sketeleton"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;

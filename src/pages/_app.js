import '@/styles/globals.css';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

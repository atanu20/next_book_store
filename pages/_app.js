import Head from 'next/head';
import '../styles/globals.css';
// import '../styles/st.js';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online Book Store website design</title>
        <link rel="icon" type="image/png" href="images/book-1.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { LiveblocksProvider } from "@liveblocks/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      <Head>
        <title>Liveblocks</title>
        <meta content="noindex" name="robots" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href="https://liveblocks.io/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="https://liveblocks.io/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
      </Head>
      <Component {...pageProps} />
    </LiveblocksProvider>
  );
}
export default App;

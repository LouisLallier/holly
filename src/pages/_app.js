import "@/styles/globals.css";

import Router from "next/router";
import NProgress from "nprogress"; // Import du module nprogress
import "nprogress/nprogress.css";
import Layout from "@/components/Layout"; // Import du style de nprogress qu'il est possible de personnaliser

// Utilisation
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

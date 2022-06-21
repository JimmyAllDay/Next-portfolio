import Head from "next/head";
import { siteTitle } from "../components/Layout";
import Portfolio from "../components/Portfolio/Portfolio";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Portfolio />
    </>
  );
}

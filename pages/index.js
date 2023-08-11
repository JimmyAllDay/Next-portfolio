import Head from 'next/head';
import { siteTitle } from '../components/Layout';
import Portfolio from '../components/Portfolio/Portfolio';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Portfolio />
    </div>
  );
}

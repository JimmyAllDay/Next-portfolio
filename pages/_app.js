import { useState, useContext } from 'react';
import { useRouter } from 'next/router';

import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';

import '../styles/globals.css';
import '../styles/CssTransitions.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

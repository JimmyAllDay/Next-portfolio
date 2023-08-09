import { useRouter } from 'next/router';
import { useState } from 'react';
import NavMenu from '../components/NavMenu';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '../context/ThemeContext';

import renderLinks, {
  homeLinks,
  resLinks,
  postsLinks,
} from '../components/utils/portfolioUtils';

import { CSSTransition } from 'react-transition-group';

import '../styles/CssTransitions.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const path = useRouter().route;

  const [showNav, setShowNav] = useState(false);

  const showNavMenu = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <div className="flex flex-col">
      <ThemeProvider>
        <Navbar
          showNav={showNav}
          setShowNav={setShowNav}
          showNavMenu={showNavMenu}
        />
        {
          <CSSTransition
            in={showNav}
            timeout={300}
            classNames="nav"
            unmountOnExit
          >
            <NavMenu
              showNav={showNav}
              closeNav={closeNav}
              navLinks={renderLinks(path)}
              showNavMenu={showNavMenu}
            />
          </CSSTransition>
        }
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

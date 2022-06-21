import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import NavMenu from "../components/NavMenu";
import Layout from "../components/Layout";

import renderLinks, {
  homeLinks,
  resLinks,
  postsLinks,
} from "../components/utils/portfolioUtils";

import { CSSTransition } from "react-transition-group";
import "../styles/CssTransitions.css";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [showNav, setShowNav] = useState(false);
  const path = useRouter().route;

  const showNavMenu = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    console.log(path),
    (
      <>
        <Navbar showNavMenu={showNavMenu} showNav={showNav} />
        {
          <CSSTransition
            in={showNav}
            timeout={300}
            classNames="nav"
            unmountOnExit
          >
            <NavMenu closeNav={closeNav} navLinks={renderLinks(path)} />
          </CSSTransition>
        }
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  );
}

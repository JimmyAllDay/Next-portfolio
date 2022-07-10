import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import NavMenu from "../components/NavMenu";
import Layout from "../components/Layout";

import { Spin as Hamburger } from "hamburger-react";

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
    <div className="flex flex-col">
      <div className="flex flex-row-reverse mb-2">
        <div
          className={`ml-auto mt-1 mr-3 border rounded fixed z-[1000] ${
            showNav
              ? "text-hamburger border-none"
              : "text-dark border-none bg-light bg-opacity-70"
          }`}
        >
          <Hamburger
            toggled={showNav}
            toggle={setShowNav}
            onToggle={(toggled) => showNavMenu()}
          />
        </div>
        <div className="mr-auto">
          <Navbar showNavMenu={showNavMenu} showNav={showNav} />
        </div>
      </div>
      {
        <CSSTransition
          in={showNav}
          timeout={300}
          classNames="nav"
          unmountOnExit
        >
          <NavMenu
            closeNav={closeNav}
            navLinks={renderLinks(path)}
            showNavMenu={showNavMenu}
          />
        </CSSTransition>
      }
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { closeElement, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavMenu from '../components/NavMenu';

import DarkModeToggle from './darkmodeToggle/DarkmodeToggle';
import MainHero from './MainHero';
import AltHero from './AltHero';
import PostHeader from './PostHeader';

import { CSSTransition } from 'react-transition-group';

import renderLinks, {
  homeLinks,
  resLinks,
  postsLinks,
} from '../components/utils/portfolioUtils';

import { hotjar } from 'react-hotjar';

const name = 'James Marshall';
export const siteTitle = 'James Marshall Dev';

export default function Layout({ children }) {
  const router = useRouter();
  const path = router.pathname;

  const [showNav, setShowNav] = useState(false);

  const showNavMenu = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  useEffect(() => {
    hotjar.initialize(3577761, 6);
  }, []);

  function renderHeader() {
    switch (path) {
      case '/posts/posts-main':
        return <AltHero name={name} />;
      case '/':
        return <MainHero name={name} />;
      case '/resume':
        return <MainHero name={name} />;
      default:
        return <PostHeader name={name} />;
    }
  }

  return (
    <div className="bg-light dark:bg-dark dark:text-light transition ease-in-out duration-700">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dev portfolio and resume for James Marshall"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar
        showNav={showNav}
        setShowNav={setShowNav}
        showNavMenu={showNavMenu}
      />
      <DarkModeToggle />
      <header>{renderHeader()}</header>
      {
        <CSSTransition
          in={showNav}
          timeout={300}
          classNames="nav"
          unmountOnExit
        >
          <div className="dark:bg-dark">
            <NavMenu
              showNav={showNav}
              closeNav={closeNav}
              navLinks={renderLinks(path)}
              showNavMenu={showNavMenu}
            />
          </div>
        </CSSTransition>
      }

      <main>{children}</main>

      {path !== '/' && path !== '/posts/posts-main' && (
        <div className="p-5 max-w-4xl mx-auto">
          <Link href="/posts/posts-main">
            <a className="text-accent hover:underline">← Back to Main</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}

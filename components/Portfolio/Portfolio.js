import { useState } from "react";
import NavMenu from "../NavMenu";
//! import Services from "./Services"; - not currently in use - consider re-instating when appropriate
import About from "./About";
import MyWork from "./MyWork";

import { CSSTransition } from "react-transition-group";

import { Icon } from "@iconify/react";

export default function Portfolio({ toggleComps, seeComps }) {
  const [showNav, setShowNav] = useState(false);

  const showNavigation = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  const navLinks = [
    { href: "#home", section: "Home" },
    { href: "#work", section: "Portfolio Projects" },
    //! { href: "#services", section: "What I do" }, - 'services' omitted at current - can reinstate
    { href: "#about", section: "About Me" },
  ];

  const navPagLink = {
    link: "/resume",
    icon: <Icon icon="ion:arrow-forward-outline" />,
    label: "Resume",
    class: "nav-link-bottom-right",
  };

  return (
    <div className="p-0 h-100">
      <CSSTransition in={showNav} timeout={300} classNames="nav" unmountOnExit>
        <NavMenu
          closeNav={closeNav}
          navLinks={navLinks}
          seeComps={seeComps}
          navPagLink={navPagLink}
        />
      </CSSTransition>

      <div>
        <MyWork />
        {/* <Services /> */}
        <About />
      </div>
    </div>
  );
}

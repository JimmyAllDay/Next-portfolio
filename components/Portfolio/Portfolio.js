import { useState } from "react";
import NavMenu from "../NavMenu";
//! import Services from "./Services"; - not currently in use - consider re-instating when appropriate
import About from "./About";
import MyWork from "./MyWork";

import { CSSTransition } from "react-transition-group";

import { Icon } from "@iconify/react";

export default function Portfolio({ toggleComps, seeComps }) {
  return (
    <div>
      <MyWork />
      {/* <Services /> */}
      <About />
    </div>
  );
}

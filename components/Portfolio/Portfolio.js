import { useState } from "react";
import NavMenu from "@/components/NavMenu";
//! import Services from "./Services"; - not currently in use - consider re-instating when appropriate
import About from "@/components/Portfolio/About";
import MyWork from "@/components/Portfolio/MyWork";

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

import React, { useState } from "react";

import Nav from "../NavMenu";
import Overview from "./Overview";
import TechSkills from "./TechSkills";
import TechTrain from "./TechTrain";
import SoftSkills from "./SoftSkills";
import NonTechEd from "./NonTechEd";
import WorkExp from "./WorkExp";
import Referees from "./Referees";

import { CSSTransition } from "react-transition-group";

function Resume() {
  return (
    <div>
      <Overview />
      <TechSkills />
      <TechTrain />
      <SoftSkills />
      <NonTechEd />
      <WorkExp />
      <Referees />
    </div>
  );
}

export default Resume;

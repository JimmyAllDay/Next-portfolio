import React, { useState } from "react";

import Nav from "@/components/NavMenu";
import Overview from "@/components/Resume/Overview";
import TechSkills from "@/components/Resume/TechSkills";
import TechTrain from "@/components/Resume/TechTrain";
import SoftSkills from "@/components/Resume/SoftSkills";
import NonTechEd from "@/components/Resume/NonTechEd";
import WorkExp from "@/components/Resume/WorkExp";
import Referees from "@/components/Resume/Referees";

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

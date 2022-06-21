import { useState } from "react";
import Head from "next/head";

import NavMenu from "../components/NavMenu";
import Overview from "../components/Resume/Overview";
import TechSkills from "../components/Resume/TechSkills";
import TechTrain from "../components/Resume/TechTrain";
import SoftSkills from "../components/Resume/SoftSkills";
import NonTechEd from "../components/Resume/NonTechEd";
import WorkExp from "../components/Resume/WorkExp";
import Referees from "../components/Resume/Referees";

import { siteTitle } from "../components/Layout";

import { CSSTransition } from "react-transition-group";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>

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

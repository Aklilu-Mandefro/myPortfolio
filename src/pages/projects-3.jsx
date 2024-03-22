import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsMasonry from "@components/ProjectsMasonry";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

import Link from "next/link";

const Projects3 = (props) => {
  return (
    <Layouts fullWidth>
      <PageBanner pageTitle={"Designing a <br>Better World Today"} breadTitle={"Projects"} align={"center"} />

      <ProjectsMasonry projects={props.projects} masonry />
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Projects3;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}
import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

import Link from "next/link";

const Projects4 = (props) => {
  return (
    <Layouts fullWidth>
      <PageBanner pageTitle={"Designing a <br>Better World Today"} breadTitle={"Projects"} align={"center"} />

      <ProjectsGrid projects={props.projects} columns={2} />
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Projects4;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}
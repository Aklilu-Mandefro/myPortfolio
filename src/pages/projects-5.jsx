import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

const ProjectsSlider = dynamic( () => import("@components/sliders/Projects"), { ssr: false } );

const Projects5 = (props) => {
  return (
    <Layouts fullWidth fullWidth100 noFooter>

      <ProjectsSlider projects={props.projects} />
      
    </Layouts>
  );
};
export default Projects5;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}
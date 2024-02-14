import React from "react";
import "../projects/projects.css";
import CardProj from "../projects/cardsProjects/CardProj"

const Projects = () => {
  return (
    <>
      <div id="Projects" className="projects">
        <h2>PROJECTS</h2>
        <div className="projects-cards">
          <CardProj />
        </div>
      </div>
    </>
  );
};

export default Projects;

import React from "react";
import "../skills/skills.css";
import ae from "../skills/ae.png";
import googleads from "../skills/googleads.png";
import meta from "../skills/meta.png";
import pr from "../skills/pr.jpeg";
import ps from "../skills/ps.png";

const Skills = () => {
  return (
    <>
      <div id="Skills" className="skills">
        <h2 className="skills-title">SKILLS</h2>
        <div className="skills-icon">
          <img className="skills-icon-img" src={ae} alt="ae" />
          <img className="skills-icon-img" src={googleads} alt="googleads" />
          <img className="skills-icon-img" src={meta} alt="meta" />
          <img className="skills-icon-img" src={pr} alt="pr" />
          <img className="skills-icon-img" src={ps} alt="ps" />
        </div>
      </div>
    </>
  );
};

export default Skills;

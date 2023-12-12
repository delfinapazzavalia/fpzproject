import React from "react";
import "../courses/courses.css";
import CardRolling from "../resume/cardsResume/CardRolling";
import CardScrum from "../resume/cardsResume/CardScrum";

const Resume = () => {
  return (
    <>
      <div id="Resume" className="resume">
        <h2>RESUME</h2>
        <div className="resume-cards">
          <CardRolling />
          <CardScrum />
        </div>
      </div>
    </>
  );
};

export default Resume;
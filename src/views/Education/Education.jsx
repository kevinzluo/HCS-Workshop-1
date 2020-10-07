import React, { useState } from "react";
import "./Education.css";

function EducationItem(props) {
  return (
    <span
      className="education-item"
      onClick={() => {
        props.setActiveSchool(props);
      }}
    >
      <div className="education-title">
        <h3>{props.title}</h3>
      </div>
      <div className="education-year">({props.year})</div>
    </span>
  );
}

export default function EducationScreen() {
  const [activeSchool, setActiveSchool] = React.useState("BLANK");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <EducationItem
            title="Harvard University"
            year="2020-present"
            courseList="This is a very cool list of courses that I took which only shows up in the highlight"
            setActiveSchool={setActiveSchool}
          ></EducationItem>
          <EducationItem
            title="White Station High School"
            year="2016-2020"
            courseList="This is a less cool list of courses that I took which only shows up in the highlight"
            setActiveSchool={setActiveSchool}
          ></EducationItem>
        </div>
        <div className="highlight-background">
          <h1>{activeSchool.title}</h1>
          <div>{activeSchool.year}</div>
          <div>{activeSchool.courseList}</div>
        </div>
      </div>
    </div>
  );
}

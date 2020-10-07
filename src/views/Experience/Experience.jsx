import React, { useState } from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
      }}
    >
      <h1>{props.title}</h1>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("BLANK");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="test1"
            setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem
            title="test2"
            setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem
            title="test3"
            setActiveTitle={setActiveTitle}
          ></TimeLineItem>
          <TimeLineItem
            title="test4"
            setActiveTitle={setActiveTitle}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
        </div>
      </div>
    </div>
  );
}

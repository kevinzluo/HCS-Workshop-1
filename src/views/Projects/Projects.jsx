import React from "react";
import Project from "../../components/Project/Project";
import Webscraper from "../../assets/webscraper.png";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="HCS-Workshop-1"
        link="https://www.github.com"
        source={Webscraper}
      ></Project>
      All your amazing projects will go here!
    </div>
  );
}

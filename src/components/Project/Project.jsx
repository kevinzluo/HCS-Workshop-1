import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <Link
      to={{ pathname: props.link }}
      target="_blank"
      className="project-background"
    >
      <div className="project-image">
        <img src={props.source} />
      </div>
      <div className="project-info">
        <h1>{props.title}</h1>
      </div>
    </Link>
  );
}

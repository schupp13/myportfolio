import React from "react";
import "./Projects.scss";

export default function Projects(props) {
  console.log(props);
  return (
    <div className="projectCard">
      <h2 className="projectTitle">{props.title}</h2>
      <img className="projectImage" src={props.image}></img>
      <p className="projectDescription">{props.description}</p>
      <div className="lowerCard">{props.technology}</div>
    </div>
  );
}

import React from "react";
import "./DisplayProject.scss";
import { Link } from "react-router-dom";

export default function Projects(props) {
  let { tag, title, image, description, technology } = props;

  return (
    <div className="projectCard">
      <Link to={`/project/${tag}`}>
        <h2 className="projectTitle">{title}</h2>
        <img className="projectImage" src={image}></img>
        <p className="projectDescription">{description}</p>
        <div className="lowerCard">{technology}</div>
      </Link>
    </div>
  );
}

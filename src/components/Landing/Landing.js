import React, { Component } from "react";
import Show from "../Show/Show";
import "./Landing.scss";
import Header from "../Header/Header";
import DisplayProject from "../DisplayProject/DisplayProject";
import { projects } from "../Projects/Projects";

export default class Landing extends Component {
  render() {
    const displayProject = projects.map(project => {
      return (
        <DisplayProject
          tag={project.tag}
          title={project.title}
          image={project.mainImage}
          description={project.description}
          technology={project.technology}
        />
      );
    });
    return (
      <div className="LandingPage">
        <div className="leftDiv">
          <div className="imageOverlay"></div>
        </div>
        <div className="rightDiv">
          <div className="content">
            <div className="showCards">
              <div className="top">
                <Header />
              </div>
              <div className="bottom">
                <Show />
              </div>
            </div>

            <div className="projects">
              {" "}
              <h2>Projects</h2>
              {displayProject}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

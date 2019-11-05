import React, { Component } from "react";
import { projects } from "../Projects/Projects";
import "./ProjectPage.scss";

export default class ProjectPage extends Component {
  constructor() {
    super();
    this.state = {
      project: []
    };
  }
  componentDidMount() {
    console.log("check");
    let projectResult = projects.filter(project => {
      return project.tag === this.props.match.params.id;
    });
    this.setState({ project: projectResult });
  }
  render() {
    console.log(this);
    let display = this.state.project.map(pro => {
      return (
        <div className="projectPageContent">
          <h1 className="projectPageTitle">{pro.title}</h1>
          <p className="projectPageDescription">{pro.description}</p>
          <div className="projectPageTechnology">{pro.technology}</div>
          <div className="options">
            <a href={pro.vid}>
              <i class="fas fa-video"></i>
            </a>

            <img className="projectPageMoji" src={pro.me} />

            <a href={pro.github} target="_blank">
              <i className="fab fa-github tooltip"></i>
            </a>
          </div>

          <a href={pro.site} target="__blank">
            <img className="projectPageImage" src={pro.mainImage} />
          </a>
        </div>
      );
    });
    return (
      <div className="projectPage">
        <button onClick={this.props.history.goBack}>Back to Projects</button>
        {display}
      </div>
    );
  }
}

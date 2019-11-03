import React, { Component } from "react";
import { projects } from "../Projects/Projects";

export default class ProjectPage extends Component {
  constructor() {
    super();
    this.state = {
      project: []
    };
  }
  componentDidMount() {
    let project = projects.filter(project => {
      return project.title === this.props.match.params.id;
    });
    this.setState({ project });
  }
  render() {
    return <div>{this.state.title}</div>;
  }
}

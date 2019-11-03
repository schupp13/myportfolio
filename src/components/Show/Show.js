import React, { Component } from "react";
import Email from "../Email/Email";
import Phone from "../Phone/Phone";
import Fscj from "../Fscj/Fscj";
import Boot from "../Boot/Boot";
import Bio from "../Bio/Bio";
import Resume from "../Resume/Resume";
import { buttons } from "../Projects/Projects";
import "./Show.scss";

export default class Show extends Component {
  constructor() {
    super();
    this.state = {
      content: "bio"
    };
  }
  changeClass = string => {
    this.setState({
      content: string
    });
  };
  render() {
    let { content } = this.state;
    const displayButtons = buttons.map(button => {
      return (
        <div className="tooltip">
          <span onClick={() => this.changeClass(button.tag)}>
            {button.icon}
          </span>
          <span className="tooltiptext">{button.description}</span>
        </div>
      );
    });
    return (
      <div className="show">
        {content === "bio" && <Bio />}
        {content === "email" && <Email />}
        {content === "phone" && <Phone />}
        {content === "resume" && <Resume />}
        {content === "fscj" && <Fscj />}
        {content === "boot" && <Boot />}
        <div className="buttons">{displayButtons}</div>
      </div>
    );
  }
}

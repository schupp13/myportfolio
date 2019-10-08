import React, { Component } from "react";
import "./Landing.scss";
import Me3 from "../../pics/me3.png";
import { tsConstructorType } from "@babel/types";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      classContact: "hello"
    };
  }

  phoneClass = string => {
    this.setState({
      classContact: string
    });
  };
  render() {
    return (
      <div className="LandingPage">
        <div className="leftDiv">
          <div className="imageOverlay"></div>
        </div>
        <div className="rightDiv">
          <div className="content">
            <div className="title">
              <h1>Philip Schultz Portfolio</h1>

              <h3>Full Stack Web Developer</h3>
            </div>
            <div className={this.state.classContact}></div>
            <div className="contact">
              <i class="fab fa-github"></i>
              <i
                class="fas fa-envelope"
                onClick={() => this.phoneClass("email")}
              ></i>
              <i
                name="phone"
                class="fas fa-phone-volume"
                onClick={() => this.phoneClass("phone")}
              ></i>
              <i class="fab fa-linkedin"></i>
            </div>
            <div className="bio">
              <p>
                Highly Driven and motivated to learn something new every day.
                Currently building projects with React, Node.js, PostgreSQL, and
                Express. Recently finished a bachelors in IT Management from
                Florida State College at Jacksonville and a 13-week coding
                Bootcamp (Devmountain) in Dallas, TX learning the SERN stack.
                Transitioning from a career in customer service/ sales.{" "}
              </p>
            </div>
            <div className="skills">
              <i class="fab fa-js-square"></i>
              <i class="fab fa-html5"></i>
              <i class="fab fa-css3-alt"></i>
              <i class="fab fa-sass"></i>
              <i class="fab fa-react"></i>
              <i class="fab fa-node"></i>
              <i class="fas fa-database"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

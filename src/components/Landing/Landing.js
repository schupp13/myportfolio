import React, { Component } from "react";
import "./Landing.scss";
import Projects from "../Projects/Projects";
import Me3 from "../../pics/me3.png";
import phone from "../../pics/phone.png";
import email from "../../pics/email.png";

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
              {this.state.classContact === "hello" && (
                <div className="bitmoji">
                  <img src={Me3} />
                </div>
              )}
              {this.state.classContact === "phone" && (
                <div className="bitmoji">
                  <img src={phone} />
                  <a href="tel:19047043965">
                    <h2>904-704-3965</h2>
                  </a>
                </div>
              )}
              {this.state.classContact === "email" && (
                <div className="bitmoji">
                  <img src={email} />
                  <a href="mailto:webmaster@example.com">
                    <h2>schupp@protonmail.com</h2>
                  </a>
                </div>
              )}
            </div>
            <div className="contact">
              <a href="https://github.com/schupp13" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <i
                class="fas fa-envelope"
                onClick={() => this.phoneClass("email")}
              ></i>
              <i
                name="phone"
                class="fas fa-phone-volume"
                onClick={() => this.phoneClass("phone")}
              ></i>
              <a
                href="https://www.linkedin.com/in/philip-schultz-bb3742125/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
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
          </div>

          <Projects />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Landing.scss";
import Projects from "../Projects/Projects";
import Accomplish from "../Accomplish/Accomplish";
import Me3 from "../../pics/me3.png";
import phone from "../../pics/phone.png";
import email from "../../pics/email.png";
import grad from "../../pics/grad.png";
import fscj from "../../pics/fscj.png";
import dv from "../../pics/dv.png";
import jaxcode from "../../pics/jaxcode.png";
import resume from "../../pics/resume.pdf";

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
                  <img className="me" src={Me3} />
                </div>
              )}
              {this.state.classContact === "phone" && (
                <div className="bitmoji">
                  <img className="me" src={phone} />
                  <a href="tel:19047043965">
                    <h2>904-704-3965</h2>
                  </a>
                </div>
              )}
              {this.state.classContact === "email" && (
                <div className="bitmoji">
                  <img className="me" src={email} />
                  <a href="mailto:schupp@protonmail.com">
                    <h2>schupp@protonmail.com</h2>
                  </a>
                </div>
              )}
              {this.state.classContact === "fscj" && (
                <div className="bitmoji">
                  <img className="me" src={grad} />
                  <img src={fscj} />
                  <h2> Information Technology Management (B.A.S.) - 3.5 GPA</h2>
                </div>
              )}
              {this.state.classContact === "boot" && (
                <div className="bitmoji">
                  <div>
                    {" "}
                    <img src={dv} />
                    <p>13-week Full Stack (SERN Stack) </p>
                    <div>
                      <i class="fab fa-sass"></i>
                      <i class="fab fa-react"></i>
                      <i class="fab fa-node"></i>
                      <i class="fas fa-database"></i>
                    </div>
                  </div>
                  <div>
                    <img src={jaxcode} />
                    <p>8-week PHP/Bootstrap</p>
                    <div>
                      <i class="fab fa-js-square"></i>
                      <i class="fab fa-html5"></i>
                      <i class="fab fa-php"></i>
                      <i class="fab fa-bootstrap"></i>
                      <i class="fas fa-database"></i>
                    </div>
                  </div>
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
              <i
                className="fas fa-user-graduate"
                onClick={() => this.phoneClass("fscj")}
              ></i>
              <i
                class="fas fa-laptop-code"
                onClick={() => this.phoneClass("boot")}
              ></i>
              <a href={resume} download>
                <i class="fas fa-file"></i>
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
            <h4>Accomplishments</h4>
          </div>

          <Projects />
        </div>
      </div>
    );
  }
}

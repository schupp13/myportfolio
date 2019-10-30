import React, { Component } from "react";
import "./Landing.scss";
import Bio from "../Bio/Bio";
import Projects from "../Projects/Projects";
import Me3 from "../../pics/me3.png";
import Me4 from "../../pics/me4.png";
import phone from "../../pics/phone2.png";
import email from "../../pics/email.png";
import grad from "../../pics/grad.png";
import fscj from "../../pics/fscj.png";
import dv from "../../pics/dv.png";
import jaxcode from "../../pics/jaxcode.png";
import resume from "../../pics/resume.pdf";
import NextRound from "../../pics/nextround.PNG";
import KeepitReel from "../../pics/keepitreel.PNG";
import SupportSqad from "../../pics/ticketManger.PNG";
import Planets from "../../pics/planets.PNG";
import College from "../../pics/college.PNG";
import Cool from "../../pics/cool.png";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      classContact: "hello",
      projects: [
        {
          title: "NextRound - ​Personal Project",
          img: NextRound,
          description:
            "Nextround - allows users to find drink specials according to their geographical position. It provides a business with the ability to quickly create attractive ads for users to see.",
          technology: (
            <div className="tech">
              <i class="fab fa-sass"></i>
              <i class="fab fa-react"></i>
              <i class="fab fa-node"></i>
              <i class="fas fa-database"></i>
            </div>
          ),
          github: "https://github.com/schupp13/nextround",
          site: "http://nextround.club/"
        },
        {
          title: "Keep it Reel - Group Project",
          img: KeepitReel,
          description:
            "Group Project - Worked in a team of four to develop a social media site centered around movies. Users can write their own blogs for any movie that is in the International Movie Database, like blogs , follow users, etc. Had a blast working on this project....great team.",
          technology: (
            <div className="tech">
              <i class="fab fa-sass"></i>
              <i class="fab fa-react"></i>
              <i class="fab fa-node"></i>
              <i class="fas fa-database"></i>
            </div>
          ),
          github: "https://github.com/keepitreel/keepitreel",
          site: "http://keepitreel.blog/#/"
        },
        {
          title: "Support Squad - Personal Project",
          img: SupportSqad,
          description:
            "Simple ticket support system. Allows a team of CSR to create an issue ticket based on their list of customers.",
          technology: (
            <div className="tech">
              <i class="fab fa-sass"></i>
              <i class="fab fa-react"></i>
              <i class="fab fa-node"></i>
              <i class="fas fa-database"></i>
            </div>
          ),
          github: "https://github.com/schupp13/ticket-manager",
          site: ""
        },
        {
          title: "Planets",
          img: Planets,
          description:
            "Information site about the planets in our solar system.",
          technology: (
            <div className="tech">
              <i class="fab fa-js-square"></i>
              <i class="fab fa-html5"></i>
              <i class="fab fa-css3-alt"></i>
              <i class="fab fa-php"></i>

              <i class="fas fa-database"></i>
            </div>
          ),
          github: "https://github.com/schupp13/planets2/tree/master/planets",
          site: "http://hello.schupp.webfactional.com/planets/#"
        },

        {
          title: "Pseudo College",
          img: College,
          description:
            "Allows students to login and sign up  or withdraw from courses. This project was an experiment to learn how session variables work in PHP . ",
          technology: (
            <div className="tech">
              <i class="fab fa-js-square"></i>
              <i class="fab fa-html5"></i>
              <i class="fab fa-php"></i>
              <i class="fab fa-bootstrap"></i>
              <i class="fas fa-database"></i>
            </div>
          ),
          github: "",
          site: "http://hello.schupp.webfactional.com/college/#"
        }
      ]
    };
  }

  phoneClass = string => {
    this.setState({
      classContact: string
    });
  };
  render() {
    const displayProject = this.state.projects.map(project => {
      return (
        <Projects
          title={project.title}
          image={project.img}
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
            <div className="title">
              <h1>Philip Schultz Portfolio</h1>
              <h3>Full Stack Web Developer</h3>

              {this.state.classContact === "hello" && (
                <div className="bitmoji">
                  <img className="me" src={Me3} />
                  <Bio />
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
                  <div className="bootcamp">
                    {" "}
                    <div className="dm">
                      {" "}
                      <a href="https://www.youracclaim.com/badges/ed6aa054-58be-4a9d-b1fa-fc291d460a74/public_url">
                        <img src={dv} />
                      </a>
                      <p>13-week Full Stack (SERN Stack) </p>
                      <div>
                        <i className="fab fa-sass"></i>
                        <i className="fab fa-react"></i>
                        <i className="fab fa-node"></i>
                        <i className="fas fa-database"></i>
                      </div>
                    </div>
                    <div className="jax">
                      <img src={jaxcode} />
                      <p>8-week PHP/Bootstrap</p>
                      <div>
                        <i className="fab fa-js-square"></i>
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-php"></i>
                        <i className="fab fa-bootstrap"></i>
                        <i className="fas fa-database"></i>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="contact">
              <div className="tooltip">
                <img
                  src={Me4}
                  name="hello"
                  className="fas fa-phone-volume"
                  onClick={() => this.phoneClass("hello")}
                />
                <span className="tooltiptext">About Me</span>
              </div>
              <div className="tooltip">
                <a href="https://github.com/schupp13" target="_blank">
                  <i className="fab fa-github tooltip"></i>
                </a>
                <span className="tooltiptext">GitHub</span>
              </div>
              <div className="tooltip">
                <i
                  className="fas fa-envelope"
                  onClick={() => this.phoneClass("email")}
                ></i>
                <span className="tooltiptext">email</span>
              </div>
              <div className="tooltip">
                <i
                  name="phone"
                  className="fas fa-phone-volume"
                  onClick={() => this.phoneClass("phone")}
                ></i>
                <span className="tooltiptext">Phone</span>
              </div>
              <div className="tooltip">
                <a
                  href="https://www.linkedin.com/in/philip-schultz-bb3742125/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <span className="tooltiptext">LinkedIn</span>
              </div>
              <div className="tooltip">
                <i
                  className="fas fa-user-graduate"
                  onClick={() => this.phoneClass("fscj")}
                ></i>
                <span className="tooltiptext">3.5 GPA</span>
              </div>
              <div className="tooltip">
                <i
                  className="fas fa-laptop-code"
                  onClick={() => this.phoneClass("boot")}
                ></i>
                <span className="tooltiptext">Bootcamps</span>
              </div>
              <div className="tooltip">
                <a href={resume} download>
                  <i className="fas fa-file"></i>
                </a>
                <span className="tooltiptext">Resume</span>
              </div>
            </div>
          </div>
          <div className="projects">{displayProject}</div>
          <img src={Cool}></img>
        </div>
      </div>
    );
  }
}

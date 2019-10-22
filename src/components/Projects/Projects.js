import React, { Component } from "react";
import "./Projects.scss";
import NextRound from "../../pics/nextround.PNG";
import KeepitReel from "../../pics/keepitreel.PNG";
import SupportSqad from "../../pics/ticketManger.PNG";
import Planets from "../../pics/planets.PNG";
import College from "../../pics/college.PNG";

export default class extends Component {
  constructor() {
    super();
    this.state = {
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
  render() {
    const displayProject = this.state.projects.map(project => {
      return (
        <div className="projectCard">
          <h2 className="projectTitle">{project.title}</h2>
          <img className="projectImage" src={project.img}></img>
          <p className="projectDescription">{project.description}</p>
          <div className="lowerCard">{project.technology}</div>
        </div>
      );
    });
    return <div className="projects">{displayProject}</div>;
  }
}

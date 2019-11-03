import React from "react";
import Pern from "../Pern/Pern";
import Lamp from "../Lamp/Lamp";
import NextRound from "../../pics/nextround.PNG";
import KeepitReel from "../../pics/keepitreel.PNG";
import SupportSqad from "../../pics/ticketManger.PNG";
import Planets from "../../pics/planets.PNG";
import College from "../../pics/college.PNG";
import qutoes from "../../pics/quotes.PNG";
import pagination from "../../pics/pagination.PNG";
import Me4 from "../../pics/me4.png";

export const projects = [
  {
    title: "NextRound",
    img: NextRound,
    description:
      "Nextround - allows users to find drink specials according to their geographical position. It provides a business with the ability to quickly create attractive ads for users to see.",
    technology: <Pern />,
    github: "https://github.com/schupp13/nextround",
    site: "http://nextround.club/",
    tag: "nextround"
  },
  {
    title: "Keep it Reel",
    img: KeepitReel,
    description:
      "Group Project - Worked in a team of four to develop a social media site centered around movies. Users can write their own blogs for any movie that is in the International Movie Database, like blogs , follow users, etc. Had a blast working on this project....great team.",
    technology: <Pern></Pern>,
    github: "https://github.com/keepitreel/keepitreel",
    site: "http://keepitreel.blog/#/",
    tag: "keepitreel"
  },
  {
    title: "Support Squad",
    img: SupportSqad,
    description:
      "Simple ticket support system. Allows a team of CSR to create an issue ticket based on their list of customers.",
    technology: <Pern />,
    github: "https://github.com/schupp13/ticket-manager",
    site: "",
    tag: "supportsquad"
  },
  {
    title: "Planets",
    img: Planets,
    description: "Information site about the planets in our solar system.",
    technology: <Lamp />,
    github: "https://github.com/schupp13/planets2/tree/master/planets",
    site: "http://hello.schupp.webfactional.com/planets/#",
    tag: "planets"
  },

  {
    title: "Pseudo College",
    img: College,
    description:
      "Allows students to login and sign up  or withdraw from courses. This project was an experiment to learn how session variables work in PHP . ",
    technology: <Lamp />,
    github: "",
    site: "http://hello.schupp.webfactional.com/college/#",
    tag: "college"
  },
  {
    title: "Random Quote",
    img: qutoes,
    description:
      "A simple vanilla js project. Display a random quote and a random background color when you press the 'Show another quote' button. Also, if you wait 10 secondes the event will trigger itself",
    technology: <Lamp />,
    github:
      "https://github.com/schupp13/random_quote_generator/blob/master/js/script.js",
    site: "http://hello.schupp.webfactional.com/random-quote/",
    tag: "randomquote"
  },
  {
    title: "Pagination Project",
    img: pagination,
    description:
      " Taking a list of users and neatly breaking them up in a presentational manner (10 users per page).This is a vanilla JS project",
    technology: <div className="tech"></div>,
    github:
      "https://github.com/schupp13/random_quote_generator/blob/master/js/script.js",
    site: "http://hello.schupp.webfactional.com/random-quote/",
    tag: "pagination"
  }
];

export const buttons = [
  { icon: <img src={Me4} />, description: "About Me", tag: "bio" },
  {
    icon: <i className="fas fa-file"></i>,
    description: "Resume",
    tag: "resume"
  },
  {
    icon: <i className="fas fa-envelope"></i>,
    description: "Email",
    tag: "email"
  },
  {
    icon: <i name="phone" className="fas fa-phone-volume"></i>,
    description: "Call Me",
    tag: "phone"
  },
  {
    icon: <i className="fas fa-user-graduate"></i>,
    description: "3.5 GPA",
    tag: "fscj"
  },
  {
    icon: <i className="fas fa-laptop-code"></i>,
    description: "BootCamps",
    tag: "boot"
  }
];

import React from "react";
// stacks
import Pern from "../Pern/Pern";
import Lamp from "../Lamp/Lamp";
// project 1 - Nextround
// import NextRound from "../../pics/nextround.PNG";
import NextRound from "../../pics/nextround4.PNG";

import nextroundMoji from "../../pics/beer.png";

//project 2 - Keepit Reel
import KeepitReel from "../../pics/keepitreel.PNG";
import keepitreelMoji from "../../pics/movie.png";

// support squad
import SupportSqad from "../../pics/ticketManger.PNG";
import suportSquadMoji from "../../pics/supportSquadMe.png";

// Planets
import Planets from "../../pics/planets.PNG";
import PlanetsMoji from "../../pics/space.png";
// College
import College from "../../pics/college.PNG";
import collegeMoji from "../../pics/books.png";

// Random Quote
import qutoes from "../../pics/quotes.PNG";
import quotesMoji from "../../pics/quoteMe.png";

// Pagination
import pagination from "../../pics/pagination.PNG";
import paginationMoji from "../../pics/paginationMe.png";

//Event Regestration
import Event from "../../pics/event.png";
import eventMoji from "../../pics/eventMe.png";

import Me4 from "../../pics/me4.png";

export const projects = [
  {
    title: "NextRound",
    mainImage: NextRound,
    me: nextroundMoji,

    description:
      "Nextround - allows users to find drink specials according to their geographical position. It provides a business with the ability to quickly create attractive ads for users to see.",
    technology: <Pern />,
    github: "https://github.com/schupp13/nextround",
    site: "http://nextround.club/",
    tag: "nextround"
  },
  {
    title: "Keep it Reel",
    mainImage: KeepitReel,
    me: keepitreelMoji,
    description:
      "Group Project - Worked in a team of four to develop a social media site centered around movies. Users can write their own blogs for any movie that is in the International Movie Database, like blogs , follow users, etc. Had a blast working on this project....great team.",
    technology: <Pern></Pern>,
    github: "https://github.com/keepitreel/keepitreel",
    site: "http://keepitreel.blog/#/",
    tag: "keepitreel"
  },
  {
    title: "Support Squad",
    mainImage: SupportSqad,
    me: suportSquadMoji,
    description:
      "Simple ticket support system. Allows a team of CSR to create an issue ticket based on their list of customers.",
    technology: <Pern />,
    github: "https://github.com/schupp13/ticket-manager",
    site: "",
    tag: "supportsquad"
  },
  {
    title: "Planets",
    me: PlanetsMoji,
    mainImage: Planets,
    description: "Information site about the planets in our solar system.",
    technology: <Lamp />,
    github: "https://github.com/schupp13/planets2/tree/master/planets",
    site: "http://hello.schupp.webfactional.com/planets/#",
    tag: "planets"
  },

  {
    title: "Pseudo College",
    mainImage: College,
    me: collegeMoji,
    description:
      "Allows students to login and sign up  or withdraw from courses. This project was an experiment to learn how session variables work in PHP . ",
    technology: <Lamp />,
    github: "",
    site: "http://hello.schupp.webfactional.com/college/#",
    tag: "college"
  },
  {
    title: "Event Register",
    mainImage: Event,
    me: eventMoji,
    description: "Easy web based tool to register guest for an event.",
    technology: <Lamp />,
    github: "https://github.com/schupp13",
    site: "http://hello.schupp.webfactional.com/MyGuest",
    tag: "event"
  },
  {
    title: "Random Quote",
    me: quotesMoji,
    mainImage: qutoes,
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
    mainImage: pagination,
    me: paginationMoji,
    description:
      " Taking a list of users and neatly breaking them up in a presentational manner (10 users per page).This is a vanilla JS project",
    technology: <div className="tech"></div>,
    github:
      "https://github.com/schupp13/random_quote_generator/blob/master/js/script.js",
    site: "http://hello.schupp.webfactional.com/pagination/",
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

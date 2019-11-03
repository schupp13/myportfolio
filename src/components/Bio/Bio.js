import React from "react";
import Me3 from "../../pics/me3.png";
import "./Bio.scss";

export default function Bio() {
  return (
    <div className="showCard">
      <img className="bitMe" src={Me3} />
      <p className="showCardText">
        Highly Driven and motivated to learn something new every day. Currently
        building projects with React, Node.js, PostgreSQL, and Express. Recently
        finished a bachelors in IT Management from Florida State College at
        Jacksonville and a 13-week coding Bootcamp (Devmountain) in Dallas, TX
        learning the SERN stack. Transitioning from a career in customer
        service/ sales.
      </p>
    </div>
  );
}

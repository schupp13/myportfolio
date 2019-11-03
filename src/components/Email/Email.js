import React from "react";
import email from "../../pics/email.png";

export default function Phone() {
  return (
    <div className="showCard">
      <img className="bitMe" src={email} />
      <h2 className="showCardText">
        <a href="mailto:schupp@protonmail.com">schupp@protonmail.com</a>
      </h2>
    </div>
  );
}

import React from "react";
import dv from "../../pics/dv.png";
import jaxcode from "../../pics/jaxcode.png";

import "./Boot.scss";

export default function Boot() {
  return (
    <div className="showCard">
      <div className="card">
        <a
          target="__blank"
          href="https://www.youracclaim.com/badges/ed6aa054-58be-4a9d-b1fa-fc291d460a74/public_url"
        >
          <img className="dv" src={dv} />
          <p>13-week Full Stack (SERN Stack) </p>
        </a>
      </div>
      <div className="card">
        <a target="__blank" href="https://jaxcode.com/">
          <img src={jaxcode} />

          <p>8-week PHP/Bootstrap</p>
        </a>
      </div>
    </div>
  );
}

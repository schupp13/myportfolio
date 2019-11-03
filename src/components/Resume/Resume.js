import React from "react";
import resume from "../../pics/resume.png";
import resumepdf from "../../pics/PhilipSchultzResume.pdf";
import "./Resume.scss";

export default function Resume() {
  return (
    <div className="showCard">
      <div className="meResume">
        <img src={resume} />
      </div>

      <object className="bit" data={resumepdf}></object>
    </div>
  );
}

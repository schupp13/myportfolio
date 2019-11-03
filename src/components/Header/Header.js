import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <h1>Philip Schultz Portfolio</h1>
      <h3>Full Stack Web Developer</h3>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/philip-schultz-bb3742125/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="https://github.com/schupp13" target="_blank">
          <i className="fab fa-github tooltip"></i>
        </a>
      </div>
    </div>
  );
}

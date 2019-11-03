import React from "react";
import grad from "../../pics/grad.png";
import fscj from "../../pics/fscj.png";
import "./Fscj.scss";

export default function Fscj() {
  return (
    <div className="showCard">
      <img className="bitMe" src={grad} />
      <img className="fscj" src={fscj} />
      <p className="showCardText">
        Information Technology Management (B.A.S.) - 3.5 GPA
      </p>
    </div>
  );
}

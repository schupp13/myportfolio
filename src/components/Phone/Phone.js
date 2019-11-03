import React from "react";
import phone from "../../pics/phone2.png";

export default function Phone() {
  return (
    <div className="showCard">
      <img className="bitMe" src={phone} />

      <h2 className="showCardText">
        <a href="tel:19047043965">904-704-3965</a>
      </h2>
    </div>
  );
}

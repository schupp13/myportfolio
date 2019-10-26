import React from "react";
import dv from "../../pics/dv.png";
import fscj from "../../pics/fscj.png";

import "./Accomplish.scss";

const Accomplish = () => {
  return (
    <div className="accomplishments">
      <div className="accomplishment">
        <a
          href="https://www.youracclaim.com/badges/ed6aa054-58be-4a9d-b1fa-fc291d460a74/public_url"
          target="__blank"
        >
          <img src={dv} className="devmountain"></img>
        </a>
      </div>
      <div className="accomplishment">
        <a href="" target="__blank">
          <img src={fscj} className="devmountain"></img>
        </a>
      </div>
    </div>
  );
};

export default Accomplish;

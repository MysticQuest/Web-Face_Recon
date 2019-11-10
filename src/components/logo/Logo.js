import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import ai from "./ai.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
          <img
            style={{ paddingTop: "25px" }}
            alt="logo"
            src={ai}
            width="180px"
            height="180px"
          ></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

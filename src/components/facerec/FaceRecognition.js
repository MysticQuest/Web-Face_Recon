import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className=" absolute mt2">
        <img
          alt="otinanai"
          id="inputimage"
          width="500px"
          height="auto"
          src={imageUrl}
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
        <img alt="sheep" src="./sheep.png"></img>
      </div>
    </div>
  );
};

export default FaceRecognition;

import React from "react";
import "./FaceRecognition.css";
import sheep from "./sheep.png";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="image-div absolute mt2">
        <img
          alt="otinanai"
          id="inputimage"
          width="500px"
          height="auto"
          src={imageUrl}
        />
        {/* <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div> */}

        <div
          className="sheep-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        >
          <img className="sheep-head" alt="sheep" src={sheep}></img>
        </div>

        {/* <img
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
          className="sheep-head"
          alt="sheep"
          src={sheep}
        ></img> */}
      </div>
    </div>
  );
};

export default FaceRecognition;

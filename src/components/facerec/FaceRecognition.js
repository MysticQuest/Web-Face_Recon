import React from "react";
import "./FaceRecognition.css";
import sheep from "./sheep.png";
import sheep1 from "./sheep1.png";
import sheep2 from "./sheep2.png";

const sheepAray = [sheep, sheep1, sheep2];

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="center ma">
      <div className="image-div absolute mt2">
        <img
          alt=""
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
        {boxes.map(box => {
          return (
            <div
              className="sheep-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol
              }}
            >
              <img
                className="sheep-head"
                alt=""
                src={sheepAray[Math.floor(Math.random() * sheepAray.length)]}
              ></img>
            </div>
          );
        })}

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

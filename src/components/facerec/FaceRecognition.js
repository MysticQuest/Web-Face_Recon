import React from "react";

const FaceRecognition = ({ imageUrl }) => {
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
      </div>
    </div>
  );
};

export default FaceRecognition;

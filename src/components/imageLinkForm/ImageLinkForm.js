import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f3">{"Add an image URL bellow to reveal sheeple"}</p>
      <div className="center">
        <div className="form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 ct"
            type="text"
            onChange={onInputChange}
          />
          <button
            onClick={onSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

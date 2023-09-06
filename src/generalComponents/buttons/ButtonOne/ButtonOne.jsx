import React from "react";
import "./ButtonOne.css";

const ButtonOne = ({ handelClick }) => {
  return (
    <button className="btn" onClick={handelClick}>
      <span className="btn-text-one">import</span>
      <span className="btn-text-two">Patient</span>
    </button>
  );
};

export default ButtonOne;

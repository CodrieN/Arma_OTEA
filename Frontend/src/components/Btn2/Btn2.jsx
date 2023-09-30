import React from "react";
import "./Btn2.scss";

const Btn2 = ({ buttonText, onClick, isActive, index }) => {
  return (
    <button className={`btn2 ${isActive ? "active" : ""}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Btn2;

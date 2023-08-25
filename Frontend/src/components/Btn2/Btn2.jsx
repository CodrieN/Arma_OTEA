import React from "react";
import "./Btn2.scss";

const Btn2 = ({ buttonText, onClick }) => {
  return (
    <button className="btn2" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Btn2;

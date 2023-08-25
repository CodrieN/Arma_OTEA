import React from "react";
import Btn2 from "../Btn2/Btn2";
import "./SecondaryNav.scss";

function SecondaryNav(props) {
  const { buttons, onButtonClick, activeSection } = props;

  return (
    <div className="SecondaryNav">
      {buttons.map((buttonText, index) => (
        <Btn2
          key={index}
          buttonText={buttonText}
          onClick={() => onButtonClick(index)}
          isActive={activeSection === index} // Pass the isActive prop here
        />
      ))}
    </div>
  );
}

export default SecondaryNav;

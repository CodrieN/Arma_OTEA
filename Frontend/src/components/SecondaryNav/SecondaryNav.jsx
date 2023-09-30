import React from "react";
import Btn2 from "../Btn2/Btn2";
import "./SecondaryNav.scss";

function SecondaryNav(props) {
  const { buttons, onButtonClick, activeSection } = props;

  return (
    <aside className="SecondaryNav">
      {buttons.map((buttonText, index) => (
        <Btn2
          key={index}
          buttonText={buttonText}
          onClick={() => onButtonClick(index)}
          isActive={activeSection === index}
          index={index} // Pass the index to Btn2
        />
      ))}
    </aside>
  );
}

export default SecondaryNav;

import React, { useEffect, useState, useRef } from "react";
import SecondaryNav from "../../components/SecondaryNav/SecondaryNav";
import "./Equipe.scss";

function Equipe() {
  const presentationNavButtons = [
    "EQUIPE",
    "ORGANISATION",
    "VIDEO",
    "SERVEURS",
    "JOUER AVEC NOUS",
  ];
  const [displayText, setDisplayText] = useState("");
  const [textFullyDisplayed, setTextFullyDisplayed] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToSection = (index) => {
    setActiveSection(index);
    if (index === 0) {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (sectionRefs[index - 1] && sectionRefs[index - 1].current) {
      // Scroll to the previous section
      sectionRefs[index - 1].current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <SecondaryNav
        buttons={presentationNavButtons}
        onButtonClick={scrollToSection}
        activeSection={activeSection}
      />
      <img src="./img/Eagle.webp" alt="mainPic" className="mainPic" />
    </>
  );
}

export default Equipe;

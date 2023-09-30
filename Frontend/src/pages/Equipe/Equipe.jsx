import React, { useEffect, useState, useRef } from "react";
import Trombi from "../../components/Trombi/Trombi";
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
      <section ref={sectionRefs[0]} className="section1" id="equipe">
        <h2>EQUIPE</h2>
        <p className="white">
          L'équipe OTEA est composée d'une douzaine de membres. La passion du
          jeu et l'envie de passer de bons moments ensemble nous rassemble. Nul
          obssession d'une simulation absolue dans nos rangs, pour preuve, nous
          n'utilisions pas Ace3, pourtant presque systématiquement requise
          lorsqu'il est question de jouer en équipe de manière générale. Nous
          préférons nous focaliser sur le plaisir que nous ressentons de nos
          parties privées et publiques.
        </p>
        <p className="white">
          L'équipe OTEA est composée d'une douzaine de membres. La passion du
          jeu et l'envie de passer de bons moments ensemble nous rassemble. Nul
          obssession d'une simulation absolue dans nos rangs, pour preuve, nous
          n'utilisions pas Ace3, pourtant presque systématiquement requise
          lorsqu'il est question de jouer en équipe de manière générale. Nous
          préférons nous focaliser sur le plaisir que nous ressentons de nos
          parties privées et publiques.
        </p>
      </section>
      <section ref={sectionRefs[1]} className="section2">
        <h2>ORGANISATION</h2>
        <Trombi></Trombi>
      </section>
      <section ref={sectionRefs[2]} className="section3">
        <h2>ORGANISATION</h2>
        <p className="white"></p>
      </section>
      <section ref={sectionRefs[3]} className="section4">
        <h2>ORGANISATION</h2>
        <p className="white"></p>
      </section>
      <section ref={sectionRefs[4]} className="section5">
        <h2>ORGANISATION</h2>
        <p className="white"></p>
      </section>
    </>
  );
}

export default Equipe;

import React, { useEffect, useState } from "react";
import SecondaryNav from "../../components/SecondaryNav/SecondaryNav";
import ReactPlayer from "react-player";
import "./Home.scss";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const text = `Foondée en l'an 2011, la Team a pris forme avec une vision claire : celle de réunir des individus passionnés, unis par le plaisir de se rassembler autour du jeu ARMA. Son aventure a pris son envol sur les vastes étendues d'ARMA 2, et au fil du temps, elle s'est métamorphosée au rythme du jeu lui-même.<br><br>Fiers de compter en nos rangs une douzaine de membres, notre dévotion envers l'art de l'infanterie nous guide de par les contrées variées de toutes les opérations militaires.<br><br> Tel des virtuoses de l'action, nous nous déployons avec ferveur sur des terrains d'action variés, où nous façonnons le déroulement de missions exaltantes. Assauts audacieux, déchaînements destructeurs et évacuations cruciales sont autant de défis que nous embrassons avec passion et adresse.<br><br>Au fil des ans, notre histoire s'est tissée avec les fils d'ARMA, chaque bataille gravée dans nos mémoires comme autant de chapitres palpitants. Animés par un esprit indomptable, nous avons suivi l'évolution du jeu avec détermination, nous adaptant aux nouvelles opportunités et aux défis émergents. Nous sommes bien plus qu'un simple groupe de joueurs, nous sommes une communauté soudée par la camaraderie, la stratégie et la recherche perpétuelle de l'excellence tactique.<br><br>Alors que nous continuons de tracer notre chemin au sein de l'univers en constante évolution d'ARMA, notre équipe demeure un exemple vivant de la façon dont la passion, l'amitié et l'expérience peuvent fusionner pour créer des moments inoubliables sur le champ de bataille virtuel. Chaque opération est une toile sur laquelle nous peignons notre dévouement, et chaque succès est une étoile brillante dans notre constellation de victoires.`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 10);
    return () => clearInterval(intervalId);
  });

  return (
    <>
      <SecondaryNav />
      <section className="section1">
        <p id="text" dangerouslySetInnerHTML={{ __html: displayText }} />
      </section>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=MUa2HmMuYSI&t=44s"
        playing="true"
        volume="0"
        width="100%"
        height="1080px"
        className="video"
      />
      <section id="section2"></section>
    </>
  );
}

export default Home;

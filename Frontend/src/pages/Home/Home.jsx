import React, { useEffect, useState, useRef } from "react";
import SecondaryNav from "../../components/SecondaryNav/SecondaryNav";
import ReactPlayer from "react-player";
import "./Home.scss";

function Home() {
  const presentationNavButtons = [
    "ACCUEIL",
    "PRESENTATION",
    "REGLES",
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

  const handleScroll = () => {
    // Find the section currently in view
    for (let i = 0; i < sectionRefs.length; i++) {
      if (
        sectionRefs[i].current &&
        isElementInViewport(sectionRefs[i].current)
      ) {
        setActiveSection(i);
        break;
      }
    }
  };

  // Helper function to check if an element is in the viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };

  useEffect(() => {
    // Add scroll event listener to handle section visibility
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text = `Foondée en  2011, la Team a pris forme avec une vision claire : celle de réunir des individus passionnés, unis par le plaisir de se rassembler autour des jeux ARMA. Son aventure a pris son envol sur les vastes étendues d'ARMA 2, et au fil du temps, elle s'est métamorphosée au rythme du jeu lui-même.<br><br>Fiers de compter en nos rangs une douzaine de membres, notre dévotion envers l'art de l'infanterie nous guide de par les contrées variées de toutes les opérations militaires.<br><br> Tel des virtuoses de l'action, nous nous déployons avec ferveur sur des terrains d'action variés, où nous façonnons le déroulement de missions exaltantes. Assauts audacieux, déchaînements destructeurs et évacuations cruciales sont autant de défis que nous embrassons avec passion et adresse.<br><br>Au fil des ans, notre histoire s'est tissée avec les fils d'ARMA, chaque bataille gravée dans nos mémoires comme autant de chapitres palpitants. Animés par un esprit indomptable, nous avons suivi l'évolution du jeu avec détermination, nous adaptant aux nouvelles opportunités et aux défis émergents. Nous sommes bien plus qu'un simple groupe de joueurs, nous sommes une communauté soudée par la camaraderie, la stratégie et la recherche perpétuelle de l'excellence tactique.<br><br>Alors que nous continuons de tracer notre chemin au sein de l'univers en constante évolution d'ARMA, notre équipe demeure un exemple vivant de la façon dont la passion, l'amitié et l'expérience peuvent fusionner pour créer des moments inoubliables sur le champ de bataille virtuel. Chaque opération est une toile sur laquelle nous peignons notre dévouement, et chaque succès est une étoile brillante dans notre constellation de victoires.`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index === text.length) {
        clearInterval(intervalId);
        setTextFullyDisplayed(true);
      } else {
        setDisplayText((prevText) => prevText + text[index]);
        index++;
      }
    }, 10);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <SecondaryNav
        buttons={presentationNavButtons}
        onButtonClick={scrollToSection}
        activeSection={activeSection}
      />
      <img src="./img/Mad.webp" alt="mainPic" className="mainPic" />
      <section ref={sectionRefs[0]} id="section1">
        <h2>
          <i className="fa-solid fa-fingerprint"></i>PRESENTATION
          <i className="fa-solid fa-fingerprint"></i>
        </h2>
        <p id="text" dangerouslySetInnerHTML={{ __html: displayText }} />
      </section>
      <div id="topPic2"></div>
      <img
        src="./img/20210402214735_1.jpg"
        alt="mainPic"
        className="mainPic2"
      />
      <div id="bottomPic2"></div>
      <section ref={sectionRefs[1]} id="section2">
        <h2>
          <i className="fa-solid fa-gavel"></i>REGLES
          <i className="fa-solid fa-gavel"></i>
        </h2>

        <h3>Les dix règles à respecter par tous!</h3>
        <div id="rules">
          <ul className="white">
            <li>
              <span className="rules">Règle N°1:</span> Je resterai respectueux
              envers tous et en toutes circonstances, que ce soit sur le forum,
              Teamspeak ou dans le jeu (aucune insulte ou propos raciste).{" "}
            </li>
            <li>
              <span className="rules">Règle N°2:</span> J'expliquerai aux
              nouveaux joueurs sur le serveur OTEA les règles de l'équipe et les
              subtilités du jeu.
            </li>
            <li>
              <span className="rules">Règle N°3:</span>{" "}
              <span className="TK">Aucun TK volontaire ne sera toléré!</span>{" "}
              Conséquences: exclusion par l'administrateur de la partie, et en
              cas de récidive, bannissement définitif du serveur de jeu.
            </li>
            <li>
              <span className="rules">Règle N°4:</span> Avant un kick ou un
              bannissement, j'expliquerai au joueur ses manquements (sauf cas
              graves).
            </li>
            <li>
              <span className="rules">Règle N°5:</span> Je ne cracherai pas sur
              le travail d'autres équipes. La critique est possible, tant
              qu'elle reste respectueuse et faite dans un esprit constructif.
            </li>
            <li>
              <span className="rules">Règle N°6:</span> Je viendrai
              régulièrement sur le forum et le serveur.
            </li>
            <li>
              <span className="rules">Règle N°7:</span> Je ne prendrai pas
              position au nom de l'équipe sur d'autres forums.
            </li>
            <li>
              <span className="rules">Règle N°8:</span> J'aurai un pseudo
              respectueux, facilement prononçable, identique sur le forum OTEA,
              sur les serveurs de jeu et Teamspeak.
            </li>
            <li>
              <span className="rules">Règle N°9:</span> Je garderai des liens
              sympathiques avec les teams de la communauté.
            </li>
            <li>
              <span className="rules">Règle N°10:</span> Je respecterai ces
              commandements à la lettre sinon je serai exclu des forums,
              serveurs ou de l'équipe OTEA.
            </li>
            <li>
              {" "}
              Pour les membres Il est possible de créer des dom. , des missions
              ... L'Etat-Major décide (après tests) si les créations sont
              validées et installées sur le serveur. IMPORTANT : Une fois sur le
              serveur les créations appartiennent à la team OTEA ! On se réserve
              le droit de les modifier si besoin. Les droits du serveur sont
              UNIQUEMENT dédiés à Jean (et à l'Etat-Major) car trop compliqué à
              gérer ! Nous partageons les frais du serveur , environ 15€ par
              membre tous les 3 mois sous forme de cotisation.
            </li>
          </ul>
        </div>
        <div id="topVideo"></div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=MUa2HmMuYSI&t=30s"
          playing="true"
          volume="0"
          width="100%"
          height="1080px"
          className="video"
        />
      </section>
      <section ref={sectionRefs[2]} id="section3">
        <h2>
          <i className="fa-solid fa-server"></i>SERVEUR
          <i className="fa-solid fa-server"></i>
        </h2>
        <div id="serveur">
          <p className="white">
            L'équipe OTEA, depuis sa création, met à disposition des joueurs
            d'ARMA2 et d'ARMA3 des serveurs publics de jeu et un serveur
            Teamspeak3. Sur ces serveurs de jeu tournent différentes missions ;
            un serveur en mode sans addons avec une Domination pour ARMA2 , et
            deux autres pour ARMA3, en mode sans addons également avec sur l'un
            une Domination et sur l'autre une PvP TeeTimeWarfare. Il est bon de
            rappeler que l'existence de ces serveurs n'est pas due à la bonté
            d'un quelconque mécène, mais bien à la prise en charge de leurs
            coûts par les membres de l'équipe OTEA. Alors oui, venir jouer en
            toute liberté sur ces serveurs, ça a l'air d'être sympa puisqu'on y
            voit beaucoup de monde, mais devenir membre de l'équipe OTEA, c'est
            mieux...
          </p>
          <ul>
            nous disposons de 2 serveurs:
            <li>d'une domination publique</li>
            <li>d'un serveur privé et/ou semi privé avec invitation</li>
            <a
              href="ts3server://195.154.170.15?port=9987"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-headset"></i>
              <li>d'un teamspeack : TS3.otea.fr</li>
            </a>
            <li>un serveur public REFORGER</li>
          </ul>
          <div>
            <iframe
              src="https://cache.gametracker.com/components/html0/?host=195.154.170.15:2302&bgColor=002653&fontColor=ffffff&titleBgColor=002856&titleColor=ffffff&borderColor=002856&linkColor=d10000&borderLinkColor=002653&showMap=1&currentPlayersHeight=100&showCurrPlayers=1&topPlayersHeight=100&showTopPlayers=1&showBlogs=0&width=144"
              frameborder="0"
              title="tracker"
              scrolling="no"
              width="144"
              height="515"
            ></iframe>
          </div>
        </div>
      </section>
      <section ref={sectionRefs[3]} id="section4">
        <h2>
          <i class="fa-solid fa-gamepad"></i>JOUER AVEC NOUS
          <i class="fa-solid fa-gamepad"></i>
        </h2>
        <p className="white">
          lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor
          sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
          ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit amet{" "}
        </p>
        <p className="white">
          lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor
          sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
          ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit amet{" "}
        </p>
        <p className="white">
          lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor
          sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
          ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit amet{" "}
        </p>
        <p className="white">
          lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor
          sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
          ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit amet{" "}
        </p>{" "}
        <p className="white">
          lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor
          sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
          ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit amet{" "}
        </p>
        <p className="white">
          lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor
          sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
          ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
          ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
          dolor sit ametlorem ipsum dolor sit amet{" "}
        </p>
      </section>
    </>
  );
}

export default Home;

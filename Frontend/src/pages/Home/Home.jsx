import React from "react";

import "./Home.scss";

function Home() {
  return (
    <>
      <img src="./img/Mad.webp" alt="mainPic" className="mainPic" />
      <section className="section1">
        <div id="threecards">
          {/* <!-- ! début du code card_Efect -->
            <!-- todo 1rst card --> */}

          <div class="screen scr">
            <div class="screen-image"></div>
            <div class="screen-overlay"></div>
            <div class="screen-content">
              <div class="screen-user">
                <span class="name" data-value="EQUIPE'"></span>
              </div>
            </div>
          </div>
          <div>
            Crée en 2011, la team se veut avant tout un groupe de personnes
            aimant se retrouver ensemble pour jouer sur ARMA. Commencé sur arma
            2 , nous avons pu évoluer avec le jeu. Fort de ses 12 membres, notre
            passion pour l'infanterie nous conduit sur tous les terrains
            d’opérations ou nous menons des missions d'assaults, de destructions
            et d'extractions
          </div>
        </div>
      </section>
      <section id="section2">{/* <Gallery /> */}</section>
    </>
  );
}

export default Home;

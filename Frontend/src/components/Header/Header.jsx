import React from "react";
import { NavLink, Link } from "react-router-dom";
import Btn from "../Btn/Btn";
import "./Header.scss";

function Header() {
  const logo = "../img/logootea.webp";
  return (
    <header>
      <nav>
        <div id="auth">
          <Link to="/Auth">
            <i class="fa-solid fa-user-plus fa-fade"></i>Caserne OTEA
            <i class="fa-solid fa-arrow-right-to-bracket fa-fade"></i>
          </Link>
        </div>
        <img alt="" src={logo} />

        <div className="divNav">
          <NavLink to="/" className="active-link">
            <Btn>
              <i class="fa-solid fa-tower-observation"></i>Accueil
            </Btn>
          </NavLink>
          <NavLink to="/Equipe" className="active-link">
            <Btn>
              <i class="fa-solid fa-people-group"></i> Equipe
            </Btn>
          </NavLink>
          <NavLink to="/jeux" className="active-link">
            <Btn>
              <i class="fa-solid fa-gamepad"></i>Jeux
            </Btn>
          </NavLink>
          <NavLink to="/Operations" className="active-link">
            <Btn>
              <i class="fa-solid fa-jet-fighter"></i> Opérations
            </Btn>
          </NavLink>
          <NavLink to="/Forum" className="active-link">
            <Btn>
              <i class="fa-solid fa-walkie-talkie"></i> Forum
            </Btn>
          </NavLink>
          <NavLink to="/Gallery" className="active-link">
            <Btn>
              <i class="fa-solid fa-camera"></i> Galerie
            </Btn>
          </NavLink>
        </div>
      </nav>
      <div id="bottomPicHeader"></div>
    </header>
  );
}

export default Header;

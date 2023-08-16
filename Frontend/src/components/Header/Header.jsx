import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  const logo = "../img/logootea.jpg";
  return (
    <header>
      <nav>
        <img alt="" src={logo} />

        <div className="divNav">
          <NavLink to="/" className="active-link">
            Accueil
          </NavLink>
          <NavLink to="/équipe" className="active-link">
            Equipe
          </NavLink>
          <NavLink to="/jeux" className="active-link">
            Jeux
          </NavLink>
          <NavLink to="/opérations" className="active-link">
            Opérations
          </NavLink>
          <NavLink to="/forum" className="active-link">
            Forum
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;

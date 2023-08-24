import React from "react";
import "./Auth.scss";

function Auth() {
  return (
    <>
      <div className="login-box">
        <h2>Connection</h2>
        <form>
          <div className="user-box">
            <input type="text" name="username" required={true} />
            <label htmlFor="username">Nom</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required={true} />
            <label htmlFor="password">Mot de passe</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            C'est parti !
          </a>
        </form>
      </div>
    </>
  );
}

export default Auth;

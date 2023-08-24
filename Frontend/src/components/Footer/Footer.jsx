import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img alt="logoOTEA" src="img/OTEA.webp" width="100" />
      <div className="footerLinks">
        <div>© 2023 OTEA. All rights reserved</div>
        <p>
          <a
            href="ts3server://195.154.170.15?port=9987"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-headset"></i>
          </a>{" "}
          //{" "}
          <a
            href="https://www.youtube.com/channel/UCuqYR9XBfFjzguW-8s1R-yw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

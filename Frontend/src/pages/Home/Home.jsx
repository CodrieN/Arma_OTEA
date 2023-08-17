import React from "react";

import "./Home.scss";

function Home() {
  return (
    <>
      <img src="./img/Mad.webp" alt="mainPic" className="mainPic" />
      <section className="section1"></section>
      <section id="section2">{/* <Gallery /> */}</section>
    </>
  );
}

export default Home;

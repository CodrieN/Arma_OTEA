import React, { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import "./Gallery.scss";

gsap.registerPlugin(Observer);

function Gallery() {
  useEffect(() => {
    gsap.registerPlugin(Observer);

    let sections = document.querySelectorAll("section"),
      images = document.querySelectorAll(".bg"),
      currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating;

    gsap.set(images, { yPercent: 0 });
    gsap.set(sections, { autoAlpha: 0, zIndex: 0 });

    function gotoSection(index, direction) {
      index = wrap(index); // make sure it's valid
      animating = true;
      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => (animating = false),
        });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.to(images[index], { yPercent: 0 }, 0.1);

      currentIndex = index;
    }

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  }, []);

  return (
    <>
      <section className="first">
        <div className="outer">
          <div className="inner">
            <div className="bg one">
              <h2 className="section-heading">Scroll down</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="second">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Animated with GSAP</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="third">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">GreenSock</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Animation platform</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Keep scrolling</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;

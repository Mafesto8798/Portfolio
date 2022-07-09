import React from "react";
import Nav from "./Nav";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import arrow from "../Images/upArrow.png";

setTimeout(() => {
  const scrollBtn = document.querySelector("#arrow");
  const btnVisibility = () => {
    if (scrollBtn != null) {
      if (window.scrollY > 600) {
        scrollBtn.style.visibility = "visible";
      } else {
        scrollBtn.style.visibility = "hidden";
      }
    }
  };
  document.addEventListener("scroll", () => {
    btnVisibility();
  });
}, 1000);

export default function Home() {
  return (
    <>
      <div id="bg">
        <Nav />
        <div className="container-fluid">
          <div id="home" className="container">
            <h1 id="title">Kenny Chavarriaga</h1>
            <h3 id="subtitle">FRONT-END DEVELOPER</h3>

            <div id="info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                vitae mollitia modi iusto reiciendis veritatis ad fuga nobis
                quod. Illum.
              </p>
            </div>
            <a href="#contact" style={{ textDecoration: "none" }}>
              <button type="button" className="btn">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
      <a href="#home" id="arrow">
        <img src={arrow} alt="arrow" />
      </a>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

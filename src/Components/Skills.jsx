import React from "react";
import suitcase from "../Images/suitcase.png";
import HTML from "../Images/HTML.svg";
import CSS from "../Images/CSS.svg";
import JS from "../Images/JS.svg";
import react from "../Images/React.svg";
import Redux from "../Images/Redux.svg";
import Sass from "../Images/Sass.svg";
import MUI from "../Images/MUI.svg";
import Graph from "../Images/Graph.svg";
import TS from "../Images/TS.svg";

export default function Skills() {
  return (
    <>
      <div className="skills-section" id="skills">
        <div className="skills-title">
          <img src={suitcase} alt="icon" />
          <p>Skills</p>
        </div>
        <div className="skills">
          <span>
            <img src={HTML} alt="logo" />
            <p>HTML</p>
          </span>
          <span>
            <img src={CSS} alt="logo" />
            <p>CSS</p>
          </span>
          <span>
            <img src={JS} alt="logo" />
            <p>Javascript</p>
          </span>
          <span>
            <img src={react} alt="logo" />
            <p>React</p>
          </span>
          <span>
            <img src={Redux} alt="logo" />
            <p>Redux</p>
          </span>
          <span>
            <img src={Sass} alt="logo" />
            <p>Sass</p>
          </span>
          <span>
            <img src={MUI} alt="logo" />
            <p>MUI</p>
          </span>
          <span>
            <img src={Graph} alt="logo" />
            <p>GraphQL</p>
          </span>
          <span>
            <img src={TS} alt="logo" />
            <p>TypeScript</p>
          </span>
        </div>
      </div>
    </>
  );
}

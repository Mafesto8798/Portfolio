import React from "react";
import Project from "./Project";
import suitcase from "../Images/suitcase.png";
import Villager from "../Images/Login.PNG";
import Notes from "../Images/Notes2.PNG";
import Game from "../Images/Game.PNG";

export default function Projects() {
  return (
    <div className="skills-section" id="projects">
      <div className="skills-title">
        <img src={suitcase} alt="icon" />
        <p>Projects</p>
      </div>
      <div className="projects">
        <Project
          name="Villager search"
          thumbnail={Villager}
          skills={[
            "React Router",
            "Responsive Design",
            "APIs",
            "Function Components",
          ]}
          description="Signup / Login and search through a list of Animal Crossing villagers"
          code="https://github.com/Mafesto8798/Villager-Search"
          demo="https://login-acnh.herokuapp.com/"
        />
        <Project
          name="Notes journal"
          thumbnail={Notes}
          skills={[
            "Immutable state",
            "React hooks",
            "Local storage",
            "REST API",
          ]}
          description="Create, read, update and delete notes"
          code="https://github.com/Mafesto8798/notes-journal"
          demo="https://notes-journal.herokuapp.com/"
        />
        <Project
          name="Unity Portfolio"
          thumbnail={Game}
          skills={["Responsive Design", "Single page application"]}
          description="Showcases unity projects in a single page application"
          code="https://github.com/Mafesto8798/game-dev-portfolio"
          demo="https://gamedev-portfolio.herokuapp.com/"
        />
      </div>
    </div>
  );
}

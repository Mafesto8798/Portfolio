import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import Project from "./Project";

const projects = [
  {
    id: uuidv4(),
    demo: "https://login-acnh.herokuapp.com/",
    code: "https://github.com/Mafesto8798/Villager-Search",
    title: "Villager Search",
    desc: "Implements basic user authentication as well as using the Animal Crossing API to display information about the villagers. ",
  },
  {
    id: uuidv4(),
    demo: "https://notes-journal.herokuapp.com",
    code: "https://github.com/Mafesto8798/notes-journal",
    title: "Notebook",
    desc: "A note taking CRUD application that uses local storage to save and update a user's notes.",
  },
  {
    id: uuidv4(),
    demo: "https://gamedev-portfolio.herokuapp.com",
    code: "https://github.com/Mafesto8798/game-dev-portfolio",
    title: "Gameplay Programmer Portfolio",
    desc: "Demonstrates a responsive portfolio showcasing experience, and utilizing reusable components",
  },
];

export default function Projects() {
  return (
    <>
      <EuiFlexGroup
        className="projects-container"
        gutterSize="l"
        direction="row"
      >
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </EuiFlexGroup>
    </>
  );
}

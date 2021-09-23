import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import Project from "./Project";

const projects = [
  {
    id: uuidv4(),
    link: "https://login-acnh.herokuapp.com/",
    title: "Villager Search",
    desc: "Implements basic user authentication as well as using the Animal Crossing API to display information about the villagers. ",
  },
  {
    id: uuidv4(),
    link: "https://notes-journal.herokuapp.com",
    title: "Notebook",
    desc: "A note taking CRUD application that uses local storage to save user's notes. As well as experimentation with animations.",
  },
  {
    id: uuidv4(),
    link: "https://weather-forecast-now.herokuapp.com",
    title: "Weather Now",
    desc: "Get current weather information from an API that displays a three day forecast as well as hourly weather.",
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

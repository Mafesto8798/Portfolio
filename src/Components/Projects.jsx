import React from 'react'
import Project from './Project'
import {v4 as uuidv4} from 'uuid'

const projects = [
    {id:uuidv4(),image:"Logo.png",link:"https://login-acnh.herokuapp.com/",title:"Villager Search",
        desc:"Login or create an account and search for Animal Crossing villagers as well as get to know them.",
        tech:[
            "HTML",
            "React JS",
            "API's",
            "Javascript",
            "CSS/Sass",
            "React router",
            "React hooks",
            "User authentication"
        ]},
    {id:uuidv4(),image:"notepad.png",link:"https://notes-journal.herokuapp.com",title:"My Notes",
        desc:"Create, remove, and edit notes with auto save." ,
        tech:[
            "HTML",
            "React JS",
            "Javascript",
            "CSS/Sass",
            "React hooks",
            "React router",
            "Local storage"
        ]}
]

export default function Projects() {
    return (
        <div className="projects-container" >
            {projects.map(project => (
                <Project project={project}/>
            ))}
        </div>
    )
}

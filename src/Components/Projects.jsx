import React from 'react'
import Project from './Project'
import {v4 as uuidv4} from 'uuid'

const projects = [
    {id:uuidv4(),image:"Logo.png",link:"https://login-acnh.herokuapp.com/",title:"Villager Search",
        desc:"Login or create an account and search for Animal Crossing villagers as well as get to know them.",
        tech:[
            "HTML",
            "React",
            "Javascript",
            "CSS/Sass",
            "API's",
            "React router",
            "hooks",
            "User authentication",
            "Responsive design"
        ]},
    {id:uuidv4(),image:"notepad.png",link:"https://notes-journal.herokuapp.com",title:"My Notes",
        desc:"Create, remove, and edit notes with auto save." ,
        tech:[
            "HTML",
            "React",
            "Javascript",
            "CSS/Sass",
            "React router",
            "hooks",
            "Local storage",
            "Responsive design"
        ]},
        {id:uuidv4(),image:"icon.png",link:"https://weather-forecast-now.herokuapp.com",title:"Weather Now",desc:"Search for current weather, including a 3 day 24HR forecast.",
        tech:[
            "HTML",
            "React",
            "Javscript",
            "CSS/Sass",
            "API's",
            "React router",
            "Responsive design"
        ]
    }
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

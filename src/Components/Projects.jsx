import React from 'react'
import Project from './Project'
import {v4 as uuidv4} from 'uuid'

const projects = [
    {id:uuidv4(),image:"Logo.png",link:"https://login-acnh.herokuapp.com/",title:"Villager Search",
        desc:"Animal Crossing villager information "},
    {id:uuidv4(),image:"Notes.png",link:"https://notes-journal.herokuapp.com",title:"Notes App",
        desc:"Create, remove, and edit notes"},
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

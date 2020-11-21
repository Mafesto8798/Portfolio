import React from 'react'
import Project from './Project'
import {v4 as uuidv4} from 'uuid'

const projects = [
    {id:uuidv4(),image:"Leaf.png",link:"https://login-acnh.herokuapp.com/",title:"Villager Search",
        desc:"Animal Crossing inspired, villager encyclopedia"},
    {id:uuidv4(),image:"Notes.png",link:"https://google.com",title:"Notes App",
        desc:"Take notes, delete notes"}
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

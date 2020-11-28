import React from 'react'
import Project from './Project'
import {v4 as uuidv4} from 'uuid'

const projects = [
    {id:uuidv4(),image:"Logo.png",link:"https://login-acnh.herokuapp.com/",title:"Villager Search",
        desc:"Animal Crossing villager information "},
    {id:uuidv4(),image:"Notes.png",link:"https://google.com",title:"Notes App",
        desc:"Take a note! Delete a note!"},
    {id:uuidv4(),image:"Basket.png",link:"https://youtube.com",title:"Shopping App",desc:"Shopping app, what will you buy?"}
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

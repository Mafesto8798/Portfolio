import React from 'react'
import {Link} from 'react-router-dom'
export default function Project({project}) {



    return (
        <Link className="project-link"to={{pathname:project.link}} target="blank">
        <div className="project-container">
            <img className="project" src={project.image} alt="project"/>
            <div>
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
            </div>
        </div>
        </Link>
    )
}

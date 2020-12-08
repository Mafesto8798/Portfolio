import React from 'react'
import {Link} from 'react-router-dom'
export default function Project({project}) {



    return (
        <Link className="project-link" to={{pathname:project.link}} target="blank">
        <div className="project-container">
            <div className="project-info">
                <h1>{project.title}</h1>
                <img src={project.image} alt="project"/>
                <h2>{project.desc}</h2>
            </div>
                <div className="tech">
                    <p>Technologies used</p>
                    <ul>
                    {project.tech.map(tech => (
                        <li>{tech}</li>
                    ))}
                    </ul>
                </div>
        </div>
        </Link>
    )
}

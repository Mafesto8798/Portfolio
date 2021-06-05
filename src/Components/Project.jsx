import React from 'react'
import {Link} from 'react-router-dom'
import {Fade} from 'react-reveal'



export default function Project({project}) {



    return (
        <Fade>
        <Link className="project-link" to={{pathname:project.link}} target="blank">
        <div className="project-container">
                <div className="title">
                <h1>{project.title}</h1>
                </div>
            <div className="project-info">
                <img src={project.image} alt="project"/>
                <h2>{project.desc}</h2>
            </div>
                <div className="tech">
                    <p>Technologies used</p>
                    <ul>
                    {project.tech.map(tech => (
                        <li key={tech}>{tech}</li>
                    ))}
                    </ul>
                </div>
        </div>
        </Link>
        </Fade>
    )
}

import React from 'react'
import {Link} from "react-router-dom"


export default function Nav() {
    return (
       <div className="nav-container">
        <nav>
            <Link to="/" className="nav-links" >
            <h1>Home</h1>
            </Link>
            <Link to="/projects" className="nav-links" >
            <h1>Projects</h1>
            </Link>
        </nav>
        <Link to={{pathname:'/https://github.com/Mafesto8798'}} className="nav-links" target="blank">
            <img className="github" src="github.png" alt="github link"/>
        </Link>
      </div>
    )
}

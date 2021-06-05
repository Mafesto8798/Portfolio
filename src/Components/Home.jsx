import React from 'react'
import {v4 as uuidv4} from "uuid";
import Project from './Project'
import {Fade,Zoom} from 'react-reveal'
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
            "Hooks",
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
            "Hooks",
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

export default function Home() {
    



    return (
        <Fade >
        <div className="homepage">
            <img  className="woods-img" src="https://www.massaudubon.org/var/ezdemo_site/storage/images/site_ma/get-outdoors/wildlife-sanctuaries/lincoln-woods/11485-32-eng-US/lincoln-woods-wildlife-sanctuary.jpg" alt=""/>
            <div className="profile-container">
                <h2>Kenny Chavarriaga - Front End Developer</h2>
                <p style={{textAlign:'center'}}>I am an aspiring developer from Rhode Island. I love creating user experiences and learning new technologies. My other passions
                    include playing guitar, being in nature, and cooking.
                </p>
            </div>
            <section className="bio">
                <div className="languages">
                    <img className="language-icon" src="js-logo.png" alt="Javascript"/>
                    <img className="language-icon" src="html-logo.png" alt="HTML"/>
                    <img className="language-icon" src="React.png" alt="React"/>
                    <img className="language-icon" src="css-logo.png" alt="CSS"/>
                    <img className="language-icon" src="sass-logo.png" alt="Sass"/>
                </div>
            </section>
            <div className="projects-container" >
            {projects.map(project => (
                <Project key={project.id} project={project}/>
            ))}
            </div>
            <footer>
                <div className="contact-container">
                <h2>Contact Me!</h2>
                <a href="mailto:kenny.chavarriaga@gmail.com" subject="Portfolio" target="blank" > Kenny.chavarriaga@gmail.com</a>
                <a href="tel:401-369-2607"> (401) 369-2607</a>
                </div>
            </footer>
        </div>
        </Fade>
    )
}

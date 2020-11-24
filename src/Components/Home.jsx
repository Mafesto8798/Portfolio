import React from 'react'

export default function Home() {
    return (
        <div className="homepage">
            <div className="profile-container">
                <img id="profile-pic" src="Mountain.jpg" alt=""/>
                <h1>Kenny Chavarriaga - Developer</h1>
            </div>
            <section className="bio">
                <h2>I am a self-taught developer working on  front-end development.
                    Coding is my passion and I am always eager to learn new skills
                    and learn to work with a team.
                </h2>
                <div className="languages">
                    <img className="language-icon" src="react.ico" alt=""/>
                    <img className="language-icon" src="js-logo.png" alt=""/>
                    <img className="language-icon" src="html-logo.png" alt=""/>
                    <img className="language-icon" src="sass-logo.png" alt=""/>
                </div>
            </section>
        </div>
    )
}

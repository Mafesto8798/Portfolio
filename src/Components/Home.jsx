import React from 'react'

export default function Home() {
    return (
        <div className="homepage">
            <div className="profile-container">
                <h1>Kenny Chavarriaga - Front end Developer</h1>
            </div>
            <section className="bio">
                <div className="languages">
                    <img className="language-icon" src="react.ico" alt=""/>
                    <img className="language-icon" src="js-logo.png" alt=""/>
                    <img className="language-icon" src="html-logo.png" alt=""/>
                    <img className="language-icon" src="sass-logo.png" alt=""/>
                    <img className="language-icon" src="css-logo.png" alt=""/>
                </div>
            </section>
        </div>
    )
}

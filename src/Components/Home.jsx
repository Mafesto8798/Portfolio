import React from 'react'

export default function Home() {
    return (
        <div className="homepage">
            <div className="profile-container">
                <h2>Kenny Chavarriaga - Front End Developer</h2>
                <p>I am a self-taught developer from Rhode Island. I love creating new user interfaces and see how far I can stretch my skills in the unlimited world of coding. My other passions
                    include playing bass, sculpting, and cooking.
                </p>
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

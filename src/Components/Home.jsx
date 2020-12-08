import React from 'react'

export default function Home() {
    return (
        <div className="homepage">
            <div className="profile-container">
                <h1>Kenny Chavarriaga - Front End Developer</h1>
                <p>Being a software developer has been my interest in career since grade school, now it's' a part of my everyday life. I learn new things constantly,
                    and developed a passion for solving problems in the world of software. I am looking to pursue my dream and to bring my skills to the test, so that I can put 100% of my focus and passion into the work I do.  </p>
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

import React, { Fragment } from "react";
import Nav from "./Nav";
import Projects from "./Projects";
import { EuiText, EuiPage, EuiTitle, EuiFlexItem } from "@elastic/eui";

export default function Home() {
  return (
    <>
      <Nav />
      <EuiPage className="homepage">
        <div>
          <EuiFlexItem className="profile-container">
            <EuiTitle size="l">
              <h1 style={{ textAlign: "center" }}>
                Kenny Chavarriaga - Front End Developer
              </h1>
            </EuiTitle>
            <EuiText size="m">
              <h2 style={{ textAlign: "center" }}>
                I am an aspiring developer from Rhode Island. I love creating
                beautiful experiences and learning new things about technology.
              </h2>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem className="bio">
            <div className="languages">
              <img className="language-icon" src="html-logo.png" alt="HTML" />
              <img className="language-icon" src="sass-logo.png" alt="Sass" />

              <img className="language-icon" src="React.png" alt="React" />
              <img className="language-icon" src="Redux.svg" alt="Redux" />
              <img className="language-icon" src="css-logo.png" alt="CSS" />

              <img
                className="language-icon"
                src="js-logo.png"
                alt="Javascript"
              />
            </div>
            <div></div>
          </EuiFlexItem>
        </div>
      </EuiPage>
      <EuiPage>
        <Projects />
      </EuiPage>
    </>
  );
}

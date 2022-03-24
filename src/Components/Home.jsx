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
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: 500,
                  color: "#00a2d8",
                }}
              >
                Kenny Chavarriaga - Frontend Developer
              </h1>
            </EuiTitle>
            <EuiText size="m">
              <h1 style={{ textAlign: "center" }}>
                Since I've began coding in 2018, I have picked up new
                technologies such as React, Typescript, and sharpened my skills
                in JavaScript. I've learned more modern approaches to problem
                solving, and remain curious but determined when finding
                solutions. I love the work that I do and would love to be a part
                of your team to contribute to a robust user interface.
              </h1>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem className="bio">
            <div className="languages">
              <img className="language-icon" src="React.svg" alt="React" />
              <img
                className="language-icon"
                src="javascript.png"
                alt="Javascript"
              />
              <img
                className="language-icon"
                src="typescript.svg"
                alt="Typescript"
              />
              <img className="language-icon" src="Redux.svg" alt="Redux" />
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

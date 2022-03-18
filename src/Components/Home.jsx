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
                Since I've began coding in 2018, I've had a nonstop journey of
                facing challenges and picking up new skills while working a full
                time job in another field. I am looking to make frontend
                development my primary focus and join a team! I am willing to
                learn, communicate, and troubleshoot to ensure a quality,
                maintainable, and reusable codebase.
              </h1>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem className="bio">
            <div className="languages">
              <img className="language-icon" src="React.png" alt="React" />
              <img
                className="language-icon"
                src="javascript_round.png"
                alt="Javascript"
              />
              <img className="language-icon" src="Graphql.svg" alt="GraphQL" />
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

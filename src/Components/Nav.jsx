import { EuiText, EuiPanel, EuiIcon } from "@elastic/eui";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <EuiPanel
      color="primary"
      hasShadow={false}
      hasBorder={false}
      className="navbar"
    >
      <Link to={{ pathname: "https://github.com/mafesto8798" }} target="_blank">
        <EuiIcon
          type="github.svg"
          size="xxl"
          title="Github link"
          className="link"
        />
      </Link>
      <a href="Coding Resume.docx" download>
        <EuiText size="m">
          <h1 style={{ fontWeight: 400 }} className="resume-link">
            Resume
          </h1>
        </EuiText>
      </a>
    </EuiPanel>
  );
}

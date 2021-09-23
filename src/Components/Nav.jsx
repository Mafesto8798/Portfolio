import { EuiButton, EuiPanel, EuiIcon } from "@elastic/eui";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <EuiPanel
      color="subdued"
      hasShadow={false}
      hasBorder={false}
      className="navbar"
    >
      <Link to={{ pathname: "https://github.com/mafesto8798" }} target="_blank">
        <EuiIcon
          type="github.svg"
          size="xxl"
          title="Github link"
          className="github-link"
        />
      </Link>
      <div>
        <EuiButton color="primary" fill={true} className="nav-btn">
          About Me
        </EuiButton>
        <EuiButton color="primary" fill={true} className="nav-btn">
          Contact
        </EuiButton>
      </div>
    </EuiPanel>
  );
}

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
          size="xl"
          title="Github link"
          className="link"
        />
      </Link>
    </EuiPanel>
  );
}

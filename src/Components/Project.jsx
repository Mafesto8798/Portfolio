import {
  EuiCard,
  EuiFlexGroup,
  EuiButton,
  EuiFlexItem,
  EuiText,
} from "@elastic/eui";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";

export default function Project({ project }) {
  const cardFooterContent = (
    <EuiFlexGroup justifyContent="flexEnd" className="btn-container">
      <EuiFlexItem grow={false}>
        <Link to={{ pathname: project.code }} target="_blank">
          <EuiButton standard={true} color="primary" size="s" fullWidth="false">
            View Code
          </EuiButton>
        </Link>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <Link to={{ pathname: project.demo }} target="_blank">
          <EuiButton fill={true} color="primary" size="s" fullWidth="false">
            View Demo
          </EuiButton>
        </Link>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  const icon = (
    <img className="project-icon" src="desktop.svg" alt="project-icon" />
  );

  return (
    <>
      <EuiFlexItem>
        <EuiCard
          icon={icon}
          className="project-card"
          textAlign="center"
          title={
            <EuiText>
              <h2 className="project-title">{project.title}</h2>
            </EuiText>
          }
          description={
            <EuiText>
              <h2 className="project-info">{project.desc}</h2>
            </EuiText>
          }
          footer={cardFooterContent}
        ></EuiCard>
      </EuiFlexItem>
    </>
  );
}

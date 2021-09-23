import {
  EuiCard,
  EuiFlexGroup,
  EuiButton,
  EuiIcon,
  EuiFlexItem,
  EuiText,
} from "@elastic/eui";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";

export default function Project({ project }) {
  const cardFooterContent = (
    <EuiFlexGroup justifyContent="flexEnd">
      <EuiFlexItem grow={false}>
        <Link to={{ pathname: project.link }} target="_blank">
          <EuiButton fill={true} color="primary">
            Check It Out
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
              <h1 className="project-title">{project.title}</h1>
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

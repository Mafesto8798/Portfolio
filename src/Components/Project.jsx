import { EuiCard, EuiFlexGroup, EuiButton, EuiFlexItem } from "@elastic/eui";
import { Link } from "react-router-dom";
import React from "react";

export default function Project({ project }) {
  const cardFooterContent = (
    <EuiFlexGroup justifyContent="flexEnd" className="btn-container">
      <EuiFlexItem grow={false}>
        <Link to={{ pathname: project.code }} target="_blank">
          <EuiButton
            color="primary"
            size="s"
            fullWidth={false}
            iconType="documents"
          >
            View Code
          </EuiButton>
        </Link>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <Link to={{ pathname: project.demo }} target="_blank">
          <EuiButton
            fill={true}
            color="primary"
            size="s"
            fullWidth={false}
            iconType="playFilled"
          >
            View Demo
          </EuiButton>
        </Link>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  return (
    <>
      <EuiFlexItem>
        <EuiCard
          image={project.icon}
          className="project-card"
          textAlign="center"
          title={project.title}
          description={project.desc}
          footer={cardFooterContent}
          paddingSize="l"
        ></EuiCard>
      </EuiFlexItem>
    </>
  );
}

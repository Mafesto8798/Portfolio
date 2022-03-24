import React from "react";
import { EuiText, EuiPanel } from "@elastic/eui";
export default function Footer() {
  return (
    <EuiPanel
      color="primary"
      hasShadow={false}
      hasBorder={false}
      className="footer"
    >
      <EuiText size="xs" className="footer-text">
        <p>Kenny.Chavarriaga@gmail.com</p>
      </EuiText>
      <EuiText size="xs" className="footer-text">
        <p>(401) 369-2607</p>
      </EuiText>
      <a href="Coding Resume.docx" download>
        <EuiText size="m">
          <p style={{ fontWeight: 400 }} className="resume-link">
            Resume
          </p>
        </EuiText>
      </a>
    </EuiPanel>
  );
}

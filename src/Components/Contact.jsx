import React from "react";
import suitcase from "../Images/suitcase.png";
import mail from "../Images/mail.png";
import phone from "../Images/phone.png";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";

export default function Contact() {
  return (
    <>
      <div className="skills-section" id="contact">
        <div className="skills-title">
          <img src={suitcase} alt="icon" />
          <p>Contact</p>
        </div>
        <div className="contact">
          <span>
            <a href="mailto:kenny.chavarriaga@gmail.com">
              <img src={mail} alt="logo" />
            </a>
            <p>Kenny.chavarriaga@gmail.com</p>
          </span>
          <span>
            <a href="tel:401-369-2607">
              <img src={phone} alt="logo" />
            </a>
            <p>(401) 369-2607</p>
          </span>
          <span>
            <a
              href="https://www.github.com/mafesto8798"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="logo" />
            </a>
            <p>Github</p>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/kenny-chavarriaga-805b68159/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="logo" />
            </a>
            <p>LinkedIn</p>
          </span>
        </div>
      </div>
    </>
  );
}

import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Contact() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/andy-nunez-webdev/"
          target="_blank"
          rel=""
          className="socialMedia"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/NunezAndy"
          target="_blank"
          rel=""
          className="socialMedia"
        >
          <GitHubIcon />
        </a>
      </div>
      <div className="socialMedia">
        <EmailIcon />
      </div>
      <p> <b>made in Chicago!</b> </p>
    </div>
  );
}

export default Contact;

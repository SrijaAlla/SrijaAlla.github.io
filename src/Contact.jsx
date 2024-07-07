import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from "@mui/material/Button";
import resume from "./resume/LEELA_SRIJA_ALLA_RESUME.pdf";
import React, { useState } from "react";

function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconStyle = {
    color: "#9EC8B9",
    transition: "color 0.3s ease",
  };

  const hoverColor = "#43766c"; // Replace with your desired hover color

  const socialIcons = [
    { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/srijaalla/" },
    { Icon: MailIcon, href: "mailto:srijaalla1001@gmail.com" },
    { Icon: GitHubIcon, href: "https://github.com/SrijaAlla" },
    { Icon: InstagramIcon, href: "https://www.instagram.com/_srijaalla_/" },
  ];

  return (
    <div className="contacts">
      <div className="resume">
        <a href={resume} target="_blank">
          <Button size="small" className="resume-button">
            <FileDownloadIcon style={{ color: "white" }} />
            <span className="resume-text">Resume</span>
          </Button>
        </a>
      </div>
      <div className="social">
        {/* <a
          href="https://www.linkedin.com/in/srijaalla/"
          target="_blank"
          rel="noopener"
        >
          <div size="small" className="cont">
            <LinkedInIcon
              style={{ color: "#9EC8B9" }}
              className="social-icon"
            />
          </div>
        </a>
        <a href="mailto:srijaalla1001@gmail.com" target="_blank" rel="noopener">
          <div size="small" className="cont">
            <MailIcon style={{ color: "#9EC8B9" }} className="social-icon" />
          </div>
        </a>
        <a href="https://github.com/SrijaAlla" target="_blank" rel="noopener">
          <div size="small" className="cont">
            <GitHubIcon style={{ color: "#9EC8B9" }} className="social-icon" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/_srijaalla_/"
          target="_blank"
          rel="noopener"
        >
          <div size="small" className="cont">
            <InstagramIcon
              style={{ color: "#9EC8B9" }}
              className="social-icon"
            />
          </div>
        </a> */}
        {socialIcons.map(({ Icon, href }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <div
              size="small"
              className="cont"
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Icon
                style={{
                  ...iconStyle,
                  color: hoveredIcon === index ? hoverColor : "#9EC8B9",
                }}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;

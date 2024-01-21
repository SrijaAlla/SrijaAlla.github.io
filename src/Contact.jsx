import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Button from "@mui/material/Button";
import resume from "./resume/LEELA_SRIJA_ALLA_RESUME.pdf";
function Contact() {
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
        <a
          href="https://www.linkedin.com/in/srijaalla/"
          target="_blank"
          rel="noopener"
        >
          <div size="small" className="cont">
            <LinkedInIcon style={{ color: "#9EC8B9" }} />
          </div>
        </a>
        <a href="mailto:srijaalla1001@gmail.com" target="_blank" rel="noopener">
          <div size="small" className="cont">
            <MailIcon style={{ color: "#9EC8B9" }} />
          </div>
        </a>
        <a href="https://github.com/SrijaAlla" target="_blank" rel="noopener">
          <div size="small" className="cont">
            <GitHubIcon style={{ color: "#9EC8B9" }} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/_srijaalla_/"
          target="_blank"
          rel="noopener"
        >
          <div size="small" className="cont">
            <InstagramIcon style={{ color: "#9EC8B9" }} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;

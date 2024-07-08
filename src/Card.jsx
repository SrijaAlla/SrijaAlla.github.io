import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import arduino from "./assets/arduino.jpg";
import playstore from "./assets/17mcme18_project.png";
import om from "./assets/om.png";
import cheque from "./assets/check.png";
import lamap from "./assets/lamap.png";
import dkube from "./assets/dkube.png";
import jindal from "./assets/jindal.png";
import portfolio from "./assets/portfolio.png";
import nli4ct from "./assets/Modelarchitecture.png";
import erbcnf from "./assets/er_bcnf.png";
import facial from "./assets/architecture.png";
import monitoring from "./assets/monitoring.png";
const cards = [
  {
    title: "Multi evidence Natural Language Inference",
    description: "Description for card 1",
    link: "https://github.com/SrijaAlla/LLMs_in_health_sciences",
    image: nli4ct,
  },
  {
    title: "Analysis of IMDB Movie dataset",
    description: "Description for card 1",
    link: "https://github.com/SrijaAlla/imdb-postgres",
    image: erbcnf,
  },
  {
    title: "Facial Emotion Recognition",
    description: "Description for card 1",
    link: "https://github.com/SrijaAlla/imdb-postgres",
    image: facial,
  },
  {
    title: "Crime Analysis with Los Angeles Dataset",
    description: "Description for card 1",
    link: "https://github.com/SrijaAlla/LA-crime-dataset",
    image: lamap,
  },
  {
    title: "Opinion Maximization in Signed Social Networks",
    description: "Description for card 2",
    link: "https://github.com/SrijaAlla/OM",
    image: om,
  },
  {
    title: "DKube",
    description: "Description for card 1",
    link: "https://www.dkube.io/",
    image: dkube,
  },
  {
    title: "Vehicle Collision and Alcohol Detection System",
    description: "Description for card 3",
    link: "https://github.com/SrijaAlla/Vehicle-Collision-and-Alcohol-Detection-System",
    image: arduino,
  },

  {
    title: "Jindal Trading Company",
    description: "Description for card 2",
    link: "http://www.jindaltradingcompany.in/",
    image: jindal,
  },
  {
    title: "Pen Ink Differentiation in Hand Written Document Forensics",
    description: "Description for card 3",
    link: "https://github.com/AnuragAnalog/Pen-Ink-Differentiation-for-Hand-Written-Document-Forensics",
    image: cheque,
  },
  {
    title: "Preferential Attachment in Play Store Games",
    description: "Description for card 3",
    link: "https://github.com/SrijaAlla/Play-store-games-scraping",
    image: playstore,
  },
  {
    title: "Study on Network Monitoring Tools",
    description: "Description for card 3",
    link: "https://github.com/SrijaAlla/Network-Classification-and-Monitoring-Tools-Breif",
    image: monitoring,
  },
  {
    title: "Personal Portfolio",
    description: "Description for card 3",
    link: "https://github.com/SrijaAlla/srijaalla.github.io",
    image: portfolio,
  },
];

const CardList = () => {
  return (
    <div className="Work">
      {cards.map((card) => (
        <div className="project-card">
          <a
            href={card.link}
            target="_blank"
            // rel="noopener"
            rel="noreferrer"
            style={{ textDecoration: "None", zIndex: "inherit" }}
          >
            <Card sx={{ minWidth: "20rem" }} className="card">
              <CardMedia sx={{ height: "10rem" }} image={card.image} />
              <CardContent>
                <Typography
                  gutterBottom
                  component="div"
                  className="project-title"
                >
                  {card.title}
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardList;

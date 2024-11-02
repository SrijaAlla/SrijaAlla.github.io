import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, List, ListItem } from "@mui/material";

const experiences = [
  {
    title: "Flow AI",
    description: "Senior AI Engineer Intern",
    details: [
      "Developed backend for Flow’s corporate website end-to-end using Django, including designing the architecture. Connected backend services to Salesforce CRM for efficient business management.",
      "Contributed to creating responsive landing and support pages using ReactJS, ensuring a seamless user experience",
    ],
  },
  {
    title: "DKube",
    description: "Software Engineer",
    details: [
      "Enhanced DKube UI using ReactJS and TypeScript, reducing model deployment time of ML models by 9%.",
      "Developed backend services using Express.js and Socket.io, deployed on an AWS EC2 Linux instance.",
      "Optimized backend with Node.js and Fast API, improving API response times by 20%, and increasing server performance.",
      "Implemented CI/CD with Jenkins, automating Docker image creation and zero-downtime deployments on Kubernetes.",
      "Integrated Prometheus and Grafana for monitoring, enhancing early issue detection and system performance reliability.",
      " Created a microservice architecture with Docker and Kubernetes, ensuring scalable deployment across clusters.",
    ],
  },
  {
    title: "University of Hyderabad",
    description: "Research Assistant",
    details: [
      "Worked under Dr. Anjeneya Swami on opinion maximization and influence maximization problems in social networks and aided the professor in teaching the course Graph Theory.",
      "Formulated heuristic algorithms using centrality measures and community detection for identifying influential seed nodes in signed networks.",
      "Implemented diffusion models like linear threshold and studied seed selection techniques leveraging network topology, conducted extensive experimentation on real-world and synthetic datasets.",
    ],
  },
  {
    title: "Jindal Trading Co.",
    description: "Full Stack Web Developer",
    details: [
      "Headed e-commerce platform overhaul using React, Node.js, and MongoDB, boosting daily traffic by 21% and sales by 15%.",
      "Incorporating unit testing with Jest and end-to-end testing with Cypress, enhancing code quality and reducing bugs.",
      " Established CI/CD pipelines with Jenkins and Docker, boosting development efficiency and ensuring seamless integration.",
      "Led a team of 4 developers, managing milestones and delegating tasks to ensure project success and business growth.",
    ],
  },
];

const Experience = () => {
  //   const [selectedExperience, setSelectedExperience] = useState({
  //     title: "Flow AI",
  //     description: "Senior AI Engineer Intern",
  //     details: [
  //       "Developed backend for Flow’s corporate website end-to-end using Django, including designing the architecture. Connected backend services to Salesforce CRM for efficient business management.",
  //       "Contributed to creating responsive landing and support pages using ReactJS, ensuring a seamless user experience",
  //     ],
  //   });

  //   const handleExperienceClick = (experience) => {
  //     setSelectedExperience(experience);
  //   };
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    // <div className="container">
    //   <div className="left-panel">
    //     {experiences.map((experience, index) => (
    //       <div
    //         className="experience-tab"
    //         key={index}
    //         onClick={() => handleExperienceClick(experience)}
    //         // style={{ backgroundColor: "#eaecee" }}
    //       >
    //         {experience.title}
    //       </div>
    //     ))}
    //   </div>
    //   <div className="right-panel">
    //     {selectedExperience && (
    //       <div className="job-description">
    //         <h3>{selectedExperience.description}</h3>
    //         <ul>
    //           {selectedExperience.details.map((detail, index) => (
    //             <li key={index}>{detail}</li>
    //           ))}
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </div>
    // return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "25em",
        borderRadius: "2em",
        margin: "0 auto",
        width: "100%",
        padding: "2em 1em 2em 1em",
      }}
    >
      {/* Left panel with Tabs */}
      <Box sx={{ borderRight: 1, borderColor: "divider", width: "10rem" }}>
        <Tabs
          orientation="vertical"
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Experience Tabs"
          className="tab-left"
        >
          {experiences.map((experience, index) => (
            <Tab
              className="experience-tab"
              key={index}
              label={experience.title}
            />
          ))}
        </Tabs>
      </Box>

      {/* Right panel with selected job details */}
      <Box sx={{ p: 3, width: "70%", overflowY: "scroll" }}>
        {experiences[selectedTab] && (
          <Box>
            <Typography variant="h6" gutterBottom>
              {experiences[selectedTab].description}
            </Typography>
            <List>
              {experiences[selectedTab].details.map((detail, index) => (
                <ListItem key={index}>{detail}</ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </Box>
    //   );
  );
};

export default Experience;

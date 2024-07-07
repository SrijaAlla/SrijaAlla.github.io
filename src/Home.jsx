// import React from "react";
import "./App.css";
import Contact from "./Contact.jsx";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import sa from "./assets/sa.svg";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { Link } from "react-router-dom";

function Home() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <AppBar position="sticky" style={{ backgroundColor: "#092635" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            component="div"
            // color="inherit"
            sx={{ flexGrow: 3 }}
            className="srija-logo"
          >
            {/* <Button
              onClick={() => {
                setPage(0);
              }}
              color="inherit"
            >
              <img src={sa}></img>
            </Button> */}
            <Link to="/">
              <Button
                color="inherit"
                onClick={() => {
                  setPage(0);
                }}
              >
                <img src={sa} alt="logo" />
              </Button>
            </Link>
          </Typography>
          <Button
            // aria-label="Resume"
            onClick={() => {
              setPage(1);
            }}
            color="inherit"
            component={Link}
            to="/about"
            // style={{ backgroundColor: "#9EC8B9" }}
          >
            About
          </Button>
          <Button
            onClick={() => {
              setPage(2);
            }}
            component={Link}
            color="inherit"
            to="/work"
          >
            Work
          </Button>

          {/* <Button
            // aria-label="Resume"
            onClick={() => {
              setPage(2);
            }} 
            color="inherit"
            className="resume-button"
            // style={{ backgroundColor: "#9EC8B9" }}
          >
            <DownloadIcon className="resume-icon" /> Resume
          </Button> */}
          <Button
            onClick={() => {
              setPage(3);
            }}
            color="inherit"
            component={Link}
            to="/gallery"
          >
            <ColorLensIcon />
          </Button>
          <Button
            onClick={() => {
              setPage(4);
            }}
            color="inherit"
            component={Link}
            to="/life"
          >
            <FavoriteIcon style={{ color: "#A94438" }} />
          </Button>
        </Toolbar>
      </AppBar>

      {/* <div className="content">
        {
          {
            0: <Profile />,
            1: <About />,
            2: <Work />,
            3: <Art />,
            4: <Gallery />,
          }[page]
        }
      </div> */}

      {page !== 1 && (
        <div className="contact">
          <Contact />
        </div>
      )}
    </div>
  );
}

export default Home;

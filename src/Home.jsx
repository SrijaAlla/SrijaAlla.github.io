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
            sx={{ flexGrow: 3 }}
            className="srija-logo"
          >
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
            onClick={() => {
              setPage(1);
            }}
            color="inherit"
            component={Link}
            to="/about"
          >
            About
          </Button>
          <Button
            onClick={() => {
              setPage(2);
            }}
            color="inherit"
            component={Link}
            to="/work"
          >
            Work
          </Button>
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

      {page !== 1 && (
        <div className="contact">
          <Contact />
        </div>
      )}
    </div>
  );
}

export default Home;

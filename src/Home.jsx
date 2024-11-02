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

import { Routes, Route } from "react-router-dom";
import Art from "./Art.js";
import About from "./About.jsx";
import Gallery from "./gallery.jsx";
import Profile from "./Profile.jsx";
import Work from "./Work.jsx";
import Chatbot from "./ChatPage.jsx";

function Home() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <AppBar
        // position="fixed"
        style={{
          backgroundColor: "#092635",
          position: "sticky",
          // marginTop: "1em",
          // borderRadius: "3em",
          top: 0,
        }}
      >
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

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/gallery" element={<Art />} />
        <Route path="/life" element={<Gallery />} />
      </Routes>

      {page !== 1 && (
        <div className="contact">
          <Contact />
        </div>
      )}
    </div>
  );
}

export default Home;

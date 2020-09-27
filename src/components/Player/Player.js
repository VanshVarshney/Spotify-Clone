import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Player.css";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__sidebar">
        <Sidebar />
        <Body spotify />
      </div>
      <Footer />
    </div>
  );
}

export default Player;

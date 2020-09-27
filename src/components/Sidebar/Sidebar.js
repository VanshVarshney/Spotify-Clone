import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../../StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      {/* <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      /> */}
      <img
        className="sidebar__logo"
        src="https://lh3.googleusercontent.com/proxy/7vAbVfaueECurZskXQkfCA2RFRHrB7KskSCsn_tmmjIG_cXVq1UlhM3ZXod4Ylvg3lr8qwXSME9KldC6gMzeLZMgLPad8ysUWOSkjDGX62AlMzo"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;

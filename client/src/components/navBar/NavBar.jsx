import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./navBar.scss";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>louissocial</span>
        </Link>
        <HomeOutlinedIcon style={{ cursor: "pointer" }} />
        {darkMode ? (
          <WbSunnyOutlinedIcon style={{ cursor: "pointer" }} onClick={toggle} />
          ) : (
            <DarkModeOutlinedIcon style={{ cursor: "pointer" }} onClick={toggle}/>
        )}
        <GridViewOutlinedIcon style={{ cursor: "pointer" }} />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Rechercher..." />
        </div>
      </div>

      <div className="right" >
      <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none"}}>
        <PersonOutlinedIcon style={{ cursor: "pointer" }} />
      </Link>
        <EmailOutlinedIcon style={{ cursor: "pointer" }} />
        <NotificationsOutlinedIcon style={{ cursor: "pointer" }} />

        <div className="user">
        <Link to={`/profile/${currentUser.id}`}>
          <img src={`/upload/${currentUser.profilePic}`} alt=""/>
        </Link>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

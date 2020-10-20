import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "../CSS/Sidebar.css";
import "../CSS/Header.css";

import logo from "../MEDIA/logo.png";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { Avatar } from "@material-ui/core";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [{ user }, dispatch] = useStateValue("");

  const signout = () => {
    dispatch({
      type: actionTypes.REMOVE_USER,
    });
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="header__tagline">
          <Link to="/" className="router__link">
            <div className="header__taglinetext">Chalo Online POS</div>
          </Link>
        </div>

        <div className="header__content">
          {user ? (
            <>
              <div className="header__controls">
                <Link to="/profile">
                  <Avatar />
                </Link>
              </div>

              <div className="header__controls" onClick={signout}>
                <Link to="/" className="router__link">
                  <div className="header__controls">
                    <MeetingRoomIcon className="header__controls__icon" />
                    <span className="header__text">Signout</span>
                  </div>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="header__controls">
                <Link to="/login" className="router__link">
                  <div className="header__controls">
                    <LockOpenRoundedIcon className="header__controls__icon" />
                    <span className="header__text">Login</span>
                  </div>
                </Link>
              </div>

              <div className="header__controls">
                <Link to="/signup" className="router__link">
                  <div className="header__controls">
                    <PersonAddIcon className="header__controls__icon" />
                    <span className="header__text">New ?</span>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;

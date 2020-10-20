import React from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";
import logo from "../MEDIA/logo.png";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { Avatar } from "@material-ui/core";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Header() {
  // const [{ user }, dispatch] = useStateValue("");
  
  // const signout = () => {
  //   dispatch({
  //     type: actionTypes.REMOVE_USER,
  //   });
  // };

  return (
    <div className="header">
      {/* <div className="header__logo">
        <Link to="/sidebar" className="router__link">
          <img src={logo} alt="pos logo" />
        </Link>
      </div>

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
      </div> */}
    </div>
  );
}

export default Header;

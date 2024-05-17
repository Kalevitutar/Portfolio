import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


function Header(props) {
  return (
    <div className="header">
      {props.title === "Movies" ?
        <div className="navbar-movies">
          <h1 className="header-top">Full Stack Developer</h1>
          <Link className="logo-link" to="/Profile">
            <button className="navbar-button">
              Contact Me
            </button>
          </Link>
        </div> :
        <div className="navbar">
          <Link className="logo-link" to="/">
            <h1 className="header-top">Full Stack Developer</h1>
          </Link>
        </div> 
      }
      {props.title === "Movies" ?
        <h1 className="center-name">Tanya Thomas</h1> :
        <h1 className="center-name">Contact Me</h1>
      }
    </div>
  );
}

export default Header;
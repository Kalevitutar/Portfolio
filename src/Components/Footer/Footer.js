import React from "react";
import { Link } from "react-router-dom";

import facebook from "../../Assets/facebook.png";
import twitterc from "../../Assets/twitterc.png";
import instagramc from "../../Assets/instagramc.png";
// import html from "../../Assets/html.png";
// import postgresql from "../../Assets/postgresql.jpeg"
import "./Footer.css";


function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-above-line">
        <div className="contact">
          <div className="contact-links">
            <img src="src/Assets/medievalT.png" alt="medievalT logo"/>
            <h2 className="brown">CONNECT WITH ME</h2>
          </div>
          <div className="contact-links">
            <img src="src/Assets/email.png" alt="email logo"/>
            <h3 className="blue">Gmail.com</h3>
          </div>
          <div className="contact-links">
            <img src="src/Assets/website.png" alt="website logo"/>
            <h3 className="blue">tanyamthomas.com</h3>
          </div>
          <div className="contact-links">
            <img src="src/Assets/gitHub.png" alt="gitHub logo"/>
            <h3 className="blue">github.com/Kalevitutar</h3>
          </div>
          <div className="contact-links">
            <img src="src/Assets/linkedIn.png" alt="linkedIn logo"/>
            <h3 className="blue">linkedin.com/in/tanya-m-thomas/</h3>
          </div>
        </div>
        <div className="menu">
          <h3 className="brown">MENU</h3>
          <nav>
            {props.title === "Profile" ?
              <div className="movies-option">
                <Link className="footer-link" to="/">
                  <h4 className="blue">My Movies</h4>
                </Link>
              </div> :
              <div>
                <Link className="footer-link" to="/Profile">
                  <h4 className="blue">Profile</h4>
                </Link>
              </div>}
          </nav>
        </div>
      </div>
      <hr className="footer-line"></hr>
      <div className="social">
        <a href="https://www.facebook.com/tanya.thomas.35574" target="_blank" rel="noopener noreferrer" >
          <img src={facebook} alt="facebook link" className="social-media-links" />
        </a>
        <a href="https://twitter.com/tanyamthomas" target="_blank" rel="noopener noreferrer">
          <img src={twitterc} alt="twitter link" className="social-media-links" />
          </a>
        <a href="https://www.instagram.com/tanyathomas7407/" target="_blank" rel="noopener noreferrer">
          <img src={instagramc} alt="instagram link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="desktop">
        <div className="footer">
          <div className="footer2">
            <div className="footer-logo">
              <img className="footer-rekruit-img" src="./rekruit-logo2.svg" />
              <div className="footer-icons">
                <img className="footer-icon" src="./fb-logo.svg" />
                <img className="footer-icon" src="./twitter-logo.svg" />
                <img className="footer-icon" src="./ig-logo.svg" />
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-quicklink">
                <h3 className="footer-header">Quick Link</h3>
                <ul className="footer-list">
                  <li>
                    <Link to="/Hero">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/SignIn">Get signed up</Link>
                  </li>
                  <li>
                    <Link to="/Hero">log in</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-support">
                <h3 className="footer-header">Support</h3>
                <ul className="footer-list">
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="">Help</Link>
                  </li>

                  <li>
                    <Link to="/blog">Blogs</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-connect">
                <h3 className="footer-header">Connect with Us</h3>
                <ul className="footer-list">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="footer-hr" />
          <p className="footer-copyright">Copyright © 2023 REKRUIT</p>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;

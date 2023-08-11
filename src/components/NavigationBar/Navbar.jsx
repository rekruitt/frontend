import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="NavBar">
        <div className="NavBar-logo">
        <Link to="/Hero">
          <img src="./rekruit-logo.jpeg" width="80%" height="80%"/>
          </Link>
        </div>
        <div className="NavBar_second">
          <nav className="NavBar-nav">
            <ul>
              <li>
                <Link to="/BrowseJobs">Browse jobs</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/AboutUs">About us</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact us</Link>
              </li>
            </ul>
          </nav>

          <div className="NavBar-nav-button">
            <button className="NavBar-SignIn">
              <Link to="/signIn">Sign in</Link>
            </button>
            <button className="NavBar-PostaJob">
              <Link to="/PostaJob">Post a job</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

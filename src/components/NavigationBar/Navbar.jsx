import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
     <div className="NavBar">
        <div className='NavBar-logo'>
          <img src="./rekruit-logo.jpeg"/>
        </div>
        <div>
        <nav className='NavBar-nav'>
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
        </div>
        <div className='NavBar-nav-button'>
          <button className="NavBar-SignIn"><Link to="/sign in">Sign in</Link></button>
          <button className="NavBar-PostaJob"><Link to="/PostaJob">Post a job</Link></button>
        </div>
        </div>
  );
};

export default Navbar;

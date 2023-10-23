import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import logo1 from "../../assets/images/navbar/postajob.jpg";
import logo2 from "../../assets/images/navbar/browsejobs.jpg";
import logo3 from "../../assets/images/navbar/blog.jpg";
import logo4 from "../../assets/images/navbar/aboutus.jpg";
import logo5 from "../../assets/images/navbar/contactus.jpg";

const Navbar = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  const toggleImage = () => {
    setIsImage1Visible((prevState) => !prevState);

    var x = document.getElementById("mobilebottom");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  return (
    <div>
      <div className="navbardesktop">
        <div>
          <Link to="/Hero">
            <img src="./rekruit-logo.jpeg" width="70%" height="90%" />
          </Link>
        </div>
        <nav className="navigationdesktop">
          <div>
            <ul className="navbar_menu_desktop">
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
          </div>

          <div className="button_container_desktops">
            <button className="navbarsignin">
              <Link to="/signIn">Sign in</Link>
            </button>
            <button className="navbarpostajob">
              <Link to="/PostaJob">Post a job</Link>
            </button>
          </div>
        </nav>
      </div>

      <div className="navbarmobile">
        <div className="mobiletop">
          <Link to="/Hero">
            <img src="./rekruit-logo.jpeg" className="mobile_logo" />
          </Link>
          <div onClick={toggleImage} className="">
            {isImage1Visible ? <GiHamburgerMenu /> : <GrClose />}
          </div>
        </div>

        <div className="mobilebottom" id="mobilebottom">
          <div className="mobile-btn-cnt">
            <button className="NavBar-SignInbtn">
              <Link to="/signIn">Sign in</Link>
            </button>
            <button className="NavBar-SignUpbtn">
              <Link to="/signUp">Sign up</Link>
            </button>
          </div>

          <ul className="navmenu">
            <li className="mobnavigations">
              <img src={logo1} />
              <Link to="/PostaJob">Post a job</Link>
            </li>
            <li className="mobnavigations">
              <img src={logo2} />
              <Link to="/BrowseJobs">Browse jobs</Link>
            </li>
            <li className="mobnavigations">
              <img src={logo3} />
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="mobnavigations">
              <img src={logo4} />
              <Link to="/AboutUs">About us</Link>
            </li>
            <li className="mobnavigations">
              <img src={logo5} />
              <Link to="/ContactUs">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

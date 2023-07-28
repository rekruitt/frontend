import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div
        className="Hero-section1"
        style={{
          backgroundImage: "url(./hero.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          height: '600px'
        }}
      >
        <p className="Hero-part1">
          Unlocking opportunities <br></br>
          transforming careers
        </p>
        <p className="hero-part2">
          Our screening process helps you focus<br></br>
          on the best fit for the job
        </p>
        <button className="Hero-section1-button">Get Started</button>
      </div>
      <div className="Hero-section2">
        <div className="Hero-section2-part1">
          <p className="Hero-section2-part1A">
            Get connected with the<br></br>
            best candidate
          </p>
          <p className="Hero-section2-part1B">
            With our immediate test screening you<br></br>
            do not have to spend hours reviewing <br></br>too many resumes.
          </p>

          <button className="Hero-section2-button">
            <Link to="/PostaJob">Post a job</Link>
          </button>
        </div>
        <div className="hero-overlap">
          <div className="hero-bg"></div>
          <img className="hero-bg2" src="./heroimg2.svg"></img>
        </div>
      </div>
      <div className="Hero-section2b">
        <div className="hero-boxa">
          <div className="hero-boxb"></div>
          <img className="hero-bg2b" src="./heroimg3.svg"></img>
        </div>
        <div className="Hero-boxa2">
          <p className="Hero-section2-box">
            Find your dream job<br></br>
            faster
          </p>
          <p className="Hero-section2-part1B">
            With our immediate test screening you<br></br>
            do not have to spend hours reviewing <br></br>
            too many resumes.<br></br>
          </p>
          <button className="Hero-section2-button">
            <Link to="/PostaJob">Post a job</Link>
          </button>
        </div>
      </div>
      <div className="Hero-section2">
        <div className="Hero-section2-part1">
          <p className="Hero-section2-part1A">
            Advance your career<br></br>
            with Rekruit
          </p>
          <p className="Hero-section2-part1B">
            Get job recommendations based on<br></br>
            preference,get matched with your dream <br></br>
            job by creating a free account and filling out<br></br>
            your profile.
          </p>
          <button className="Hero-section1-button">Get Started</button>
        </div>
        <div className="hero-overlap">
          <div className="hero-bg"></div>
          <img className="hero-bg2" src="./heroimg2.svg"></img>
        </div>
      </div>
      {/* Latest blog posts */}
      <div>
        <p className="hero-latest-title">Latest blog posts</p>
        <div className="hero-latest">
          <div className="hero-latest-img1">
            <img className="hero-image" src="./latest1.svg" />
            <p className="hero-latest-title1">
              5 Tips for acing your<br></br>interview
            </p>
            <p className="hero-latest-title2"> June 24th, 2023</p>
          </div>
          <div className="hero-latest-img1">
            <img className="hero-image" src="./latest2.svg" />
            <p className="hero-latest-title1">
              How to start your<br></br>
              career as a fresh<br></br> graduate
            </p>
            <p className="hero-latest-title2"> June 24th, 2023</p>
          </div>
          <div className="hero-latest-img2">
            <img className="hero-image" src="./latest3.png" />
            <p className="hero-latest-title1">
              How to create a resume<br></br>resume
            </p>
            <p className="hero-latest-title2"> June 24th, 2023</p>
          </div>
        </div>
      </div>
      {/* subscribe */}
      <div
        className="hero-subscribe"
        style={{
          backgroundImage: "url(./subscribeimg.svg)",
          backgroundRepeat: "no-repeat",
          marginBottom: "0px",
          height: "440px",
        }}
      >
        <p className="hero-subscribe1">Subscribe to our Newsletter</p>
        <p className="hero-subscribe2">
          Never want to miss any job news? Join our email subcription
        </p>
        <input
          type="text"
          placeholder="your email"
          className="hero-subscribe-input"
        ></input>
        <button className="hero-subscribe-button">subscribe</button>
      </div>
    </div>
  );
};
export default Hero;


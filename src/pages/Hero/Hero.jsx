import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div
        className="Hero-section1"
        style={{
          backgroundImage: "url(./hero-image.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          height: '40rem'
        }}
      >
        <div className="hero1">
        <h2 className="Hero-part1">
        Find Your Dream Job here <br></br>
        easy and fast
        </h2>
        <input className="hero1-input1" type="text" placeholder="Enter job title"/>
  <select className="hero1-input2">
    <option>Job Location</option>
    <option>lagos</option>
    <option>Abuja</option>
    <option>Calabar</option>
    </select> <br></br>
    <div>
        <button className="Hero1-button">
          <Link to="/BrowseJobs">Browse jobs</Link>
       </button>
       </div>
        </div>
        </div>
        {/* hero part2 */}
        <div className="hero2a">
        <h2 className="hero2header">Easy steps to get your dream job</h2>
        <div className="heropart2">
           {/* hero register */}
          <div className="heroregister">
          <img className="heroimg1" src="./hero1.svg"/>
          <div className="heropart2text">
            <h4>Register with us</h4>
            <p className="heropart2text2">It is totally free!!!<br></br>
you only need to register by creating an account <br></br>
and follwing the easy registration process.</p>
          </div>
          </div>
        {/* hero browse */}
          <div className="heroregister">
          <img className="heroimg1" src="./hero2.svg"/>
          <div className="heropart2text">
            <h4>Broswe the best jobs for you</h4>
            <p className="heropart2text2">Find verified jobs based on job categories <br></br>
            and location that are most relevant<br></br>
            to you.</p>
          </div>
          </div>
        {/* hero apply */}
          <div>
          <img className="heroimg1" src="./hero3.svg"/>
          <div className="heropart2text">
            <h4>Apply for job</h4>
            <p className="heropart2text2">Apply for your preferred job and schedule<br></br>
            your test to be taken within 48hours.</p>
          </div>
          </div>
          </div>
          </div>
        {/* hero part3a */}
        <div className="heropart3">
        <div className="heropart3a">
          <img className="hero-bg2" src="./heropart2img.png"></img>
          <div className="Hero-section2-part1">
        <h2 className="Hero-section2-part1A">
          Get connected with the<br></br>
          best candidate
        </h2>
        <p className="Hero-section2-part1B">
          With our immediate test screening you<br></br>
          do not have to spend hours reviewing <br></br>too many resumes.
        </p>
        <button className="Hero-section2-button">
          <Link to="/PostaJob">Post a job</Link>
        </button>
      </div>
        </div>
  {/* hero part3b */}
        <div className="heropart3b">
        <div className="Hero-section2-part2">
        <h2 className="Hero-section2-part1A">
        Find your dream job<br></br>
        faster
        </h2>
        <p className="Hero-section2-part1B">
        Get your CV reviewed faster by a recruiter by <br></br>
        passing our test which has to be completed <br></br>
        within 48hrs after submission of your application.
        </p>

        <button className="Hero-section2-button">
          <Link to="/BrowseJobs">Browse jobs</Link>
        </button>
      </div>
      <img className="heroimg2" src="./heroimg3.svg"></img>
        </div>
        </div>
      {/*hero grid*/}
       <div className="hero-grid">
        <h2 className="hero2header2">Popular job categories</h2>
        <div className="hero-grid2">
        <div className='hero-grid1'>
        <img className='hero-grida' src="./agriculture.png"/>
        <p>Agriculture</p>
        <p className='hero-jobs'>(25 jobs)</p>
        </div>
        <div className='hero-grid1'>
        <img className='hero-grida' src="./advertising.png"/>
        <p>Advertising</p>
        <p className='hero-jobs'>(12 jobs)</p>
        </div>
        <div className='hero-grid1'>
        <img className='hero-grida' src="./banking.png"/>
        <p>Banking</p>
        <p className='hero-jobs'>(9 jobs)</p>
        </div>
        <div className='hero-grid1'>
        <img className='hero-grida' src="./image Education.png"/>
        <p>Education</p>
        <p className='hero-jobs'>(5 jobs)</p>
        </div>
        <div className='hero-grid1'>
        <img className='hero-grida' src="./hospitality.png"/>
        <p>Hospitality</p>
        <p className='hero-jobs'>(20 jobs)</p>
        </div>
        <div className='hero-grid1'>
        <img className='hero-grida' src="./enginnering.png"/>
        <p>Engineering</p>
        <p className='hero-jobs'>(21 jobs)</p>
        </div> 
        <div className='hero-grid1'>
        <img className='hero-grida' src="./image 142.png"/>
        <p>IT services</p>
        <p className='hero-jobs'>(9 jobs)</p>
        </div>
        <div className='hero-grid1'>
        <img className='hero-grida' src="./aviation.png"/>
        <p>Aviation</p>
        <p className='hero-jobs'>(9 jobs)</p>
        </div>
</div>
<div className="herobutton1">
<button className="Hero-section2-button2">
          <Link to="/PostaJob">View all job categories</Link>
        </button>
        </div>
        </div>
 {/* Latest blog posts */}
      <div className="herolatest1">
      <h2 className="hero2header2">Latest blog posts</h2>
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
              How to start your career<br></br>
              as a fresh graduate
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
        <div className="herobutton1">
<button className="Hero-section2-button3">
          <Link to="/PostaJob">View all blog posts</Link>
        </button>
        </div>
      </div>
       {/* subscribe */}
      <div
        className="hero-subscribe"
        style={{
          backgroundImage: "url(./subscribeimg.svg)",
          backgroundRepeat: "no-repeat",
          marginBottom: "0px",
         height: "410px",
         backgroundSize: "cover"
        
        }}
      >
       
        <h2 className="hero-subscribe1">Subscribe to our Newsletter</h2>
        <p className="hero-subscribe2">
          Never want to miss any job news? Join our email subcription
        </p>
        <div className="heroradiobutton">
        <p><input type="radio"/> Job seeker
      <span className="heroradiobuttonspan"><input type="radio"/> Recruiter</span></p>
        </div>
        <input
          type="text"
          placeholder="Email"
          className="hero-subscribe-input"
        ></input>
        <button className="hero-subscribe-button">subscribe</button>
      </div>
        
    </div>
  );
};
export default Hero;


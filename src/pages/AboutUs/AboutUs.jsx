import React from "react";
import "./AboutUs.css";
import Blue from "../../assets/images/aboutus/blue.png";
import img1 from "../../assets/images/aboutus/aboutus1.png";
import img2 from "../../assets/images/aboutus/aboutus2.png";
import img3 from "../../assets/images/aboutus/ourmission.png";
import img4 from "../../assets/images/aboutus/ourvision.png";
import img5 from "../../assets/images/aboutus/corevalues.png";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutussec1">
        <div className="aboutimgcont1">
          <div className="about_blue1">
            <img src={Blue} width="468.5px" height="250px" />
          </div>
          <div className="about_img1">
            <img src={img1} width="468.5px" height="250px" />
          </div>
        </div>
        <div>
          <h3>Welcome to Rekruit Africa</h3>
          <p>
            At Rekruit, we are a leading recruiting firm <br />
            ?dedicated to connecting exceptional talent with <br />
            top-tier organizations. <br />
            With our extensive network, industry expertise,
            <br /> and personalized approach, we strive to deliver <br />
            tailored solutions to meet the unique hiring
            <br /> needs of our clients.
            <br />
            We help to facilitate successful partnerships by
            <br /> identifying, attracting, and securing the best <br />
            candidates for our clients.
            <br /> We aim to provide exceptional recruitment <br />
            services that drive organizational growth and
            <br /> contribute to the professional advancement of <br />
            individuals.
          </p>
        </div>
      </div>
      <div className="aboutussec2">
        <div className="aboutimgcont2">
          <div className="about_blue2">
            <img src={Blue} width="468.5px" height="250px" />
          </div>
          <div className="about_img2">
            <img src={img2} width="468.5px" height="250px" />
          </div>
        </div>
        <div>
          <h3>Our services</h3>
          <p>
            1. Executive Search: We specialize in finding
            <br />
            exceptional executive-level talent to lead <br />
            organizations towards success. <br />
            2. Direct Placement: We assist our clients
            <br />
            in filling critical positions across various levels
            <br />
            and functions within their organizations <br />
            3. Talent Acquisition Consulting: We provide <br />
            strategic guidance and consulting services to <br />
            help organizations optimize their talent
            <br />
            acquisition strategies. <br />
            4. Candidate Development: We go beyond <br />
            traditional recruitment by actively investing in <br />
            the development of candidates.{" "}
          </p>
        </div>
      </div>
      <div className="aboutussec3">
        <div className="aboutus_mission">
          <h3>Our mission</h3>
          <img src={img3} width="30px" height="30px" />
          <p>
            {" "}
            Our mission is to facilitate <br />
            successful partnerships by <br />
            identifying, attracting, and <br />
            securing the best candidates <br />
            for our clients
          </p>
        </div>
        <div className="aboutus_vision">
          <h3>Our vision</h3>
          <img src={img4} width="30px" height="30px" />
          <p>
            Empowering individuals, <br />
            building meaningful <br />
            connections, delivering
            <br /> exceptional services,
            <br /> embracing innovation
          </p>
        </div>
        <div className="aboutus_values">
          <h3>Core values</h3>
          <img src={img5} width="30px" height="30px" />
          <p>
            Our core values are excellence,
            <br /> integrity, collaboration and <br />
            expertise
          </p>
        </div>
      </div>
      <div className="aboutussec4">
        <div>
          <h2>Meet the team</h2>
        </div>
        <div className="aboutus_team">
          <div>
            <img />
            <p>Crystal Naomi</p>
            <p>Chief executive officer</p>
          </div>
          <div>
            <img />
            <p>Ebuka Johnson</p>
            <p>Head, finance</p>
          </div>
          <div>
            <img />
            <p>Christabel Akon </p>
            <p>Head, marketing</p>
          </div>
          <div>
            <img />
            <p>Akin Ojo</p>
            <p>Programs manager</p>
          </div>
          <div>
            <img />
            <p>Ejiro Efe</p>
            <p>Head, customer service</p>
          </div>
          <div>
            <img />
            <p>Kelly Ali</p>
            <p>Head, youth engagement</p>
          </div>
        </div>
      </div>
      <div className="aboutussec5">
        <h3>
        Get the best experience with us
        </h3>
        <p>
        At Rekruit, we are passionate about connecting talent
         with opportunity. Whether you are an employer <br/>
        seeking exceptional candidates or a candidate looking
         for your next career move, we are here to assist<br/>
         you. Contact us today to experience the difference
          of working with a top-tier recruiting firm.
        </p>
        <button className="aboutussec5_button">Get Started</button>
      </div>
    </div>
  );
};

export default AboutUs;

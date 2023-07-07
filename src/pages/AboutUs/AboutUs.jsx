import React from "react";
import "./AboutUs.css";
import Blue from "../../assets/images/blue.jpg";
import img1 from "../../assets/images/aboutus1.jpg";
import img2 from "../../assets/images/aboutus2.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutussec1">
        <div className="aboutimgcont1">
          <div>
            <img src={Blue} width = "351.76px" height = "187.69px" />
          </div>
          <div>
            <img src={img1} width = "351.76px" height = "187.69px" />
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
        <div>
          <div>
            <img src={Blue} width = "351.76px" height = "187.69px" />
          </div>
          <div>
            <img src={img2} width = "351.76px" height = "187.69px" />
          </div>
        </div>
      </div>
      <div className="aboutussec3">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="aboutussec4"></div>
      <div className="aboutussec5"></div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      {/* <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div> */}
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          We are currently in dev phase. Please register using below form.
        </h1>
        <p className="primary-text">
          Our Automated Email Marketing Platform is Under Construction!
          <br />
          Don't miss out on this opportunity to supercharge your email marketing
          strategy with our innovative platform.
        </p>
        <p className="primary-text">
          Join our waitlist today and get ready to take your email marketing to
          new heights!
        </p>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            {" "}
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;

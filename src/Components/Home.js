import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Unlock Your Email Marketing Potential: Powering Growth with
            Automated Solutions.
          </h1>
          <br />
          <button className="secondary-button">
            Learn More
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

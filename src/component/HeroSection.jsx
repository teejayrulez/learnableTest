/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Reusables/Navbar"
import heroimg from '../assets/Homepage/media-bg-cover.png';
import heroimg1 from "../assets/Homepage/media-bg-cover1.png";
import heroimg2 from "../assets/Homepage/media-bg-cover2.png";
import heroimg3 from "../assets/Homepage/media-bg-cover3.png";
import Product from "./Product";
import Services from "./Services";
import Post from "./Post";
import Review from "./Review"
import Experience from "./Experience";
import Footer from "../Reusables/Footer"

const HeroSection = () => {
    return (
      <div>
        <Navbar />
        <div className="hero-section-container">
          {/*Big img*/}
          <div className="big-hero-container">
            <img src={heroimg} alt="heroimg" />
            <div className="big-hero-inner-text">
              <span>5 items</span>
              <h2>FURNITURE</h2>
              <p>Read more</p>
            </div>
          </div>

          <div className="small-long-img-container hero-small-img">
            {/*Small img 1*/}
            <div className="small-long-hero-container">
              <img src={heroimg1} alt="heroimg" />
              <div className="small-long-hero-inner-text">
                <span>5 items</span>
                <h2>FURNITURE</h2>
                <p>Read more</p>
              </div>
            </div>

            <div className="small-img-container-1 hero-small-second-1-img">
              {/*Small img 2*/}
              <div className="small-hero-container">
                <img src={heroimg2} alt="heroimg" />
                <div className="small-hero-inner-text">
                  <span>5 items</span>
                  <h2>FURNITURE</h2>
                  <p>Read more</p>
                </div>
              </div>
              <div className="small-hero-container hero-small-second-2-img">
                <img src={heroimg3} alt="heroimg" />
                <div className="small-hero-inner-text">
                  <span>5 items</span>
                  <h2>FURNITURE</h2>
                  <p>Read more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Product />
        <Services />
        <Post />
        <Review />
        <Experience />
        <Footer />
      </div>
    );
};

export default HeroSection;

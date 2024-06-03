/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { faAngleRight, faChartArea } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post1 from '../assets/Homepage/post1.png'

const Post = () => {
    return (
      <div>
        <div className="post-header-container">
          <h3>Practice Advice</h3>
          <h2>Featured Posts</h2>
        </div>
        {/*card-1*/}
        <div className="post-container">
          <div className="post-section-container">
            <div className="post-container-1">
              <img src={Post1} alt="heroimg" />
              <div className="post-border">
                <div className="post-card-link">
                  <p className="active-link">Google</p>
                  <p>Trending</p>
                  <p>New</p>
                </div>
                <div className="post-card-text1">
                  <h3>Loudest a la Madison #1 (L'intergral)</h3>
                  <p>
                    We focus on ergonomincs and meeting you where you work. It's
                    only a keystroke away.
                  </p>
                </div>
                <div className="time-chart-container">
                  <div className="time-container">
                    <FontAwesomeIcon className="time-icon" icon={faClock} />
                    <p>22 April 2021</p>
                  </div>
                  <div className="chart-container">
                    <FontAwesomeIcon
                      className="chart-icon"
                      icon={faChartArea}
                    />
                    <p>10 comments</p>
                  </div>
                </div>
                <div>
                  <p className="post-learn-more">
                    Learn More{" "}
                    <FontAwesomeIcon
                      className="post-learn-more-icon"
                      icon={faAngleRight}
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="post-section-container">
              <div className="post-container-1">
                <img src={Post1} alt="heroimg" />
                <div className="post-border">
                  <div className="post-card-link">
                    <p className="active-link">Google</p>
                    <p>Trending</p>
                    <p>New</p>
                  </div>
                  <div className="post-card-text1">
                    <h3>Loudest a la Madison #1 (L'intergral)</h3>
                    <p>
                      We focus on ergonomincs and meeting you where you work.
                      It's only a keystroke away.
                    </p>
                  </div>
                  <div className="time-chart-container">
                    <div className="time-container">
                      <FontAwesomeIcon className="time-icon" icon={faClock} />
                      <p>22 April 2021</p>
                    </div>
                    <div className="chart-container">
                      <FontAwesomeIcon
                        className="chart-icon"
                        icon={faChartArea}
                      />
                      <p>10 comments</p>
                    </div>
                  </div>
                  <div>
                    <p className="post-learn-more">
                      Learn More{" "}
                      <FontAwesomeIcon
                        className="post-learn-more-icon"
                        icon={faAngleRight}
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="post-section-container">
                <div className="post-container-1">
                  <img src={Post1} alt="heroimg" />
                  <div className="post-border">
                    <div className="post-card-link">
                      <p className="active-link">Google</p>
                      <p>Trending</p>
                      <p>New</p>
                    </div>
                    <div className="post-card-text1">
                      <h3>Loudest a la Madison #1 (L'intergral)</h3>
                      <p>
                        We focus on ergonomincs and meeting you where you work.
                        It's only a keystroke away.
                      </p>
                    </div>
                    <div className="time-chart-container">
                      <div className="time-container">
                        <FontAwesomeIcon className="time-icon" icon={faClock} />
                        <p>22 April 2021</p>
                      </div>
                      <div className="chart-container">
                        <FontAwesomeIcon
                          className="chart-icon"
                          icon={faChartArea}
                        />
                        <p>10 comments</p>
                      </div>
                    </div>
                    <div>
                      <p className="post-learn-more">
                        Learn More{" "}
                        <FontAwesomeIcon
                          className="post-learn-more-icon"
                          icon={faAngleRight}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Post;

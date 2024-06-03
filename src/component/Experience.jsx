// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Homepage/logo.png";

const Experience = () => {
  return (
    <div>
      <div className="ex-bg">
        <div className="ex-text-container">
          <p className="ex-first-text">Design Better Experience</p>
          <h1>Problems trying to resovle the conflict between</h1>
          <p className="ex-second-text">
            Problems trying to resovle the conflict between the two major realms
            of Classical physics
          </p>
          <p className="ex-prize">$16.48</p>
          <button className="ex-btn">ADD YOUR CALL TO ACTION</button>
        </div>
      </div>

      <div className="ex-social">
        <div>
          <img className="social-link-logo" src={Logo} />
        </div>
        <div>
          <FontAwesomeIcon className="ex-social-link" icon={faFacebook} />
          <FontAwesomeIcon className="ex-social-link" icon={faInstagram} />
          <FontAwesomeIcon className="ex-social-link " icon={faTwitter} />
        </div>
      </div>
    </div>
  );
}

export default Experience
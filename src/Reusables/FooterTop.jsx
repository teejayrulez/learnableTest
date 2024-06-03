// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Homepage/logo.png";


const FooterTop = () => {
  return (
    <div>
      <div className="Footer-top-social">
        <div>
          <img className="Footer-top-social-link-logo" src={Logo} />
        </div>
        <div>
          <FontAwesomeIcon
            className="Footer-top-social-link"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="Footer-top-social-link"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="Footer-top-social-link "
            icon={faTwitter}
          />
        </div>
      </div>
      <div className='line-5'></div>
    </div>
  );
}

export default FooterTop
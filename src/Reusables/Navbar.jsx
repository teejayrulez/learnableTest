/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCartShopping, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Logo from '../assets/Homepage/logo.png'

const Navbar = () => {
  return (
    <div>
      {/*Green-Navbar*/}
      <div className="navbar-container">
        <div className="navbar-layer-1">
          <div className="layer-1-left">
            <p>
              <FontAwesomeIcon className="layer-1-icon-left" icon={faPhone} />
              (225) 555-0118
            </p>
            <p>
              <FontAwesomeIcon
                className="layer-1-icon-left"
                icon={faEnvelope}
              />
              michelle.rivera@example.com
            </p>
          </div>
          <div className="layer-1-center">
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="layer-1-right">
            <p>
              <span>Follow Us:</span>
              <FontAwesomeIcon
                className="layer-1-icon-right"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="layer-1-icon-right"
                icon={faYoutube}
              />
              <FontAwesomeIcon
                className="layer-1-icon-right"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="layer-1-icon-right"
                icon={faTwitter}
              />
            </p>
          </div>
        </div>

        {/*Navlinks*/}
        <div className="navbar-layer-2">
          <div className="layer-2-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="layer-2-nav-links">
            <div>
              <ul>
                <li>Home</li>
                <li>
                  Shop <FontAwesomeIcon icon={faAngleDown} />
                </li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pages</li>
              </ul>
            </div>
            <div className='layer-2-login-section'>
              <div className='layer-2-login'>
                <p>
                  <FontAwesomeIcon icon={faUser} />
                  <span>Login / Register</span>
                </p>
              </div>

              <FontAwesomeIcon className='layer-2-icons' icon={faSearch} />
              <FontAwesomeIcon className='layer-2-icons' icon={faCartShopping} /><p>1</p>
              <FontAwesomeIcon className='layer-2-icons' icon={faHeart} /><p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar

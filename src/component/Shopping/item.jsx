// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  faAngleRight,
  faEye,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarRating from '../../Reusables/StarRating'
import { faHeart, } from "@fortawesome/free-regular-svg-icons";
import Carousel from '../../assets/Shoppage/carousel-inner.png'
import Beta from "../../assets/Shoppage/carousel-inner.png";
import Navbar from "../../Reusables/Navbar";
import Allproducts from "../../Reusables/Allproducts";
import Footer from "../../Reusables/Footer";


const Items = () => {
  return (
    <div>
      <Navbar />
      <div className="item-section">
        <p>
          Home
          <FontAwesomeIcon className="item-direction" icon={faAngleRight} />
          <span>Shop</span>
        </p>
      </div>
      <div className="item-container">
        <div className="seleted-item">
          <img src={Carousel} />
          <FontAwesomeIcon className="next-item" icon={faAngleRight} />
        </div>
        <div className="item-content">
          <p className="item-name">Floating Phone</p>
          <div className="item-rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <StarRating />
            <span>10 reviews</span>
          </div>
          <div>
            <p className="item-price">$1,139.33</p>
            <p className="item-avaliable">
              Avaliability : <span>In Stock</span>
            </p>
          </div>
          <div className="line"></div>

          <div className="color-circle-container">
            <div className="color-circle"></div>
            <div className="color-circle"></div>
            <div className="color-circle"></div>
            <div className="color-circle"></div>
          </div>

          <div className="select-container">
            <button className="item-btn">Select Options</button>
            <div>
              <FontAwesomeIcon className="item-like" icon={faHeart} />
              <FontAwesomeIcon className="item-cart" icon={faShoppingCart} />
              <FontAwesomeIcon className="item-show" icon={faEye} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Item-container-2">
          <ul>
            <li>Description</li>
            <li>Additional Information</li>
            <li>
              Reviews <span className="item-review">(0)</span>
            </li>
          </ul>
          <div className="line position-line"></div>
        </div>
        <div className="item-con-2-text">
          <div>
            <div className="item-context">
              <h3>the quick fox jumps over</h3>
              <p>
                Met minim Mollie non desert Alamo est sit dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation
                venial consquent sent nostrum met.
              </p>
            </div>
            <div className="item-context-2">
              <span>I</span>
              <p>
                Met minim Mollie non desert Alamo est sit dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation
                venial consquent sent nostrum met.
              </p>
            </div>
            <div className="item-context-3">
              <p>
                Met minim Mollie non desert Alamo est sit dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation
                venial consquent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="item-context-pic">
            <img src={Beta} />
          </div>
        </div>
      </div>
      <Allproducts />
      <Footer />
    </div>
  );
}

export default Items
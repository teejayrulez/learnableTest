// eslint-disable-next-line no-unused-vars
import React from 'react'
import { faAdd, faAngleRight, faStar, faSubtract, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item1 from '../../assets/Cartpage/Item-1.jpg'
import Master from '../../assets/Cartpage/Mastercard.png'
import PayStack from '../../assets/Cartpage/Paystack.png'
import Visa from '../../assets/Cartpage/Visa-Inc.png'
import Product1 from "../../assets/Shoppage/product-cover-1.png";
import Product2 from "../../assets/Shoppage/product-cover-2.png";
import Product3 from "../../assets/Shoppage/product-cover-3.png";
import Product4 from "../../assets/Shoppage/product-cover-4.png";
import Product5 from "../../assets/Shoppage/product-cover-5.png";
import Product6 from "../../assets/Shoppage/product-cover-6.png";
import Product7 from "../../assets/Shoppage/product-cover-1.png";
import Product8 from "../../assets/Shoppage/product-cover-2.png";
import Navbar from '../../Reusables/Navbar';
import FooterTop from '../../Reusables/FooterTop'
import Footer from '../../Reusables/Footer';

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="item-section">
        <p>
          Home
          <FontAwesomeIcon className="item-direction" icon={faAngleRight} />
          Shop
          <FontAwesomeIcon
            className="item-direction-active"
            icon={faAngleRight}
          />
          <span>Shoppping Cart</span>
        </p>
      </div>
      <div className="shopping-container">
        <div className="shopping-header">
          <div>
            <h3>Shopping Cart</h3>
            <ul>
              <li>Item Details</li>
              <li>Quantity</li>
              <li>Price</li>
            </ul>
          </div>
          {/*Card 1*/}
          <div className="shopping-cart-container">
            <div className="shopping-img">
              <img src={Item1} />
              <p>
                <FontAwesomeIcon className="remove-item" icon={faTrash} />{" "}
                REMOVE
              </p>
            </div>
            <div className="shopping-stock">
              <h4>Graphic Design</h4>
              <span>In Stock</span>
              <div className="shopping-cart-rating">
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon
                  className="shop-cart-star last-star"
                  icon={faStar}
                />
                28 Reviews
              </div>
            </div>
            <div className="shopping-quantity">
              <FontAwesomeIcon className="minus-style" icon={faSubtract} />
              <input type="text" />
              <FontAwesomeIcon className="add-style" icon={faAdd} />
            </div>
            <div className="shopping-price">
              <p>$3,000</p>
              <span>$3,000x 1 Item</span>
            </div>
          </div>
          <div className="line-2"></div>
          {/*Card 2*/}
          <div className="shopping-cart-container">
            <div className="shopping-img">
              <img src={Item1} />
              <p>
                <FontAwesomeIcon className="remove-item" icon={faTrash} />{" "}
                REMOVE
              </p>
            </div>
            <div className="shopping-stock">
              <h4>Graphic Design</h4>
              <span>In Stock</span>
              <div className="shopping-cart-rating">
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon
                  className="shop-cart-star last-star"
                  icon={faStar}
                />
                28 Reviews
              </div>
            </div>
            <div className="shopping-quantity">
              <FontAwesomeIcon className="minus-style" icon={faSubtract} />
              <input type="text" />
              <FontAwesomeIcon className="add-style" icon={faAdd} />
            </div>
            <div className="shopping-price">
              <p>$3,000</p>
              <span>$3,000x 1 Item</span>
            </div>
          </div>
          <div className="line-2"></div>
          {/*Card 3*/}
          <div className="shopping-cart-container">
            <div className="shopping-img">
              <img src={Item1} />
              <p>
                <FontAwesomeIcon className="remove-item" icon={faTrash} />{" "}
                REMOVE
              </p>
            </div>
            <div className="shopping-stock">
              <h4>Graphic Design</h4>
              <span>In Stock</span>
              <div className="shopping-cart-rating">
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon className="shop-cart-star" icon={faStar} />
                <FontAwesomeIcon
                  className="shop-cart-star last-star"
                  icon={faStar}
                />
                28 Reviews
              </div>
            </div>
            <div className="shopping-quantity">
              <FontAwesomeIcon className="minus-style" icon={faSubtract} />
              <input type="text" />
              <FontAwesomeIcon className="add-style" icon={faAdd} />
            </div>
            <div className="shopping-price">
              <p>$3,000</p>
              <span>$3,000x 1 Item</span>
            </div>
          </div>
          <div className="line-2"></div>
        </div>
        <div className="payment-container">
          <div className="payment-header">
            <h3>Order Summary</h3>
            <p>4 items</p>
          </div>
          <div className="payment-context-1">
            <p>Delivery Charges</p>
            <span>
              Add your delivery address to checkout to see delivery charges
            </span>
          </div>
          <div className="line-3"></div>
          <div className="payment-context-2">
            <p>Subtotal</p>
            <p>$26,500</p>
          </div>
          <div className="line-3"></div>
          <div className="payment-context-3">
            <h3>Total</h3>
            <p>$26,000</p>
          </div>
          <div className="line-3"></div>
          <div className="payment-context-4">
            <span>Excluding Delivery Charges</span>
            <button>Proceed to Checkout</button>
          </div>
          <div className="line-3"></div>
          <div className="payment-method">
            <img src={PayStack} />
            <img src={Master} />
            <img src={Visa} />
          </div>
        </div>
      </div>
      
      <div className="related-items">
        <h3 className="related-items-header">Products Related To Items in you cart</h3>
        <div className="line-4"></div>
        <div className="allproduct-top-card">
          {/*Card 1*/}
          <div className="allproduct-card-container">
            <div>
              <div>
                <img src={Product1} alt="allproduct-card-1" />
                <h3>Graphic Design</h3>
                <h5>English Department</h5>
                <p>
                  $16.48<span>$6.48</span>
                </p>
              </div>
            </div>

            {/*Card 2*/}
            <div className="allproduct-card-container">
              <div>
                <img src={Product2} alt="allproduct-card-1" />
                <h3>Graphic Design</h3>
                <h5>English Department</h5>
                <p>
                  $16.48<span>$6.48</span>
                </p>
              </div>
            </div>

            {/*Card 3*/}
            <div className="allproduct-card-container">
              <div>
                <img src={Product3} alt="allproduct-card-1" />
                <h3>Graphic Design</h3>
                <h5>English Department</h5>
                <p>
                  $16.48<span>$6.48</span>
                </p>
              </div>
            </div>

            {/*Card 4*/}
            <div className="allproduct-card-container">
              <div>
                <img src={Product4} alt="allproduct-card-1" />
                <h3>Graphic Design</h3>
                <h5>English Department</h5>
                <p>
                  $16.48<span>$6.48</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="allproduct-top-card">
        {/*Card 5*/}
        <div className="allproduct-card-container">
          <div>
            <div>
              <img src={Product5} alt="allproduct-card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>

          {/*Card 6*/}
          <div className="allproduct-card-container">
            <div>
              <img src={Product6} alt="allproduct-card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>

          {/*Card 7*/}
          <div className="allproduct-card-container">
            <div>
              <img src={Product7} alt="allproduct-card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>

          {/*Card 8*/}
          <div className="allproduct-card-container">
            <div>
              <img src={Product8} alt="allproduct-card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer/>
    </div>
  );
}

export default Cart

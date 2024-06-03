// eslint-disable-next-line no-unused-vars
import React from 'react'
import Product1 from "../assets/Shoppage/product-cover-1.png";
import Product2 from "../assets/Shoppage/product-cover-2.png";
import Product3 from "../assets/Shoppage/product-cover-3.png";
import Product4 from "../assets/Shoppage/product-cover-4.png";
import Product5 from "../assets/Shoppage/product-cover-5.png";
import Product6 from "../assets/Shoppage/product-cover-6.png";
import Product7 from "../assets/Shoppage/product-cover-1.png";
import Product8 from "../assets/Shoppage/product-cover-2.png";
import FooterTop from './FooterTop';
import Sponsors from './Sponsors';
    
const Allproducts = () => {
  return (
    <div>
      <div className="allproduct-container">
        <div className="allproduct-header">
          <h2>BESTSELLER PRODUCTS</h2>
        </div>
        <div className="line-1"></div>
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
          <Sponsors />
          <FooterTop />
    </div>
  );
}

export default Allproducts

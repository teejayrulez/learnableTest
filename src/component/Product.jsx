/* eslint-disable no-unused-vars */
import React from 'react'
import Product1 from "../assets/Homepage/product1.png"
import Product2 from "../assets/Homepage/product2.png";
import Product3 from "../assets/Homepage/product3.png";
import Product4 from "../assets/Homepage/product4.png";
import Product5 from "../assets/Homepage/product5.png";
import Product6 from "../assets/Homepage/product6.png";
import Product7 from "../assets/Homepage/product7.png";
import Items from './Shopping/item';
import { BrowserRouter as Route, Routes, Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <div className="product-header-container">
        <h3>Featured Products</h3>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="top-card">
        {/*Card 1*/}
        <div className="card-container box-1">
          <div>
            <div>
              <img src={Product1} alt="card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>

          {/*Card 2*/}
          <div className="card-container">
            <div>
              <img src={Product2} alt="card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>

          {/*Card 3*/}
          <div className="card-container">
            <div>
              <img src={Product3} alt="card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>

          {/*Card 4*/}
          <div className="card-container">
            <div>
              <img src={Product4} alt="card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>

          {/*Card 5*/}
          <div className="card-container">
            <div>
              <img src={Product1} alt="card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Bottom-card*/}
      <div className="bottom-card">
        {/*Card 1*/}
        <div className="card-container box-1">
          <div>
            <div>
              <img src={Product2} alt="card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>

          {/*Card 2*/}
          <div className="card-container">
            <div>
              <img src={Product5} alt="card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>

          {/*Card 3*/}
          <div className="card-container">
            <div>
              <img src={Product4} alt="card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>

          {/*Card 4*/}
          <Link to="/item">
            <div className="card-container">
              <div>
                <img src={Product6} alt="card-1" />
                <h3>Graphic Design</h3>
                <h5>English Department</h5>
                <p>
                  $16.48<span>$6.48</span>
                </p>
              </div>
            </div>
          </Link>

          {/*Card 5*/}
          <div className="card-container">
            <div>
              <img src={Product7} alt="card-1" />
              <h3>Graphic Design</h3>
              <h5>English Department</h5>
              <p>
                $16.48<span>$6.48</span>
              </p>
            </div>
          </div>
        </div>
        <button className="product-btn">LOAD MORE PRODUCTS</button>
      </div>
      <Routes>
        <Route path='/item' element={<Items />} />
      </Routes>
    </div>
  );
}

export default Product

// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sponsor1 from "../assets/Shoppage/spon-1.png";
import Sponsor2 from "../assets/Shoppage/spon-2.png";
import Sponsor3 from "../assets/Shoppage/spon-3.png";
import Sponsor4 from "../assets/Shoppage/spon-4.png";
import Sponsor5 from "../assets/Shoppage/spon-5.png";
import Sponsor6 from "../assets/Shoppage/spon-6.png";

const Sponsors = () => {
  return (
    <div>
      <div className="product-sponsors-container">
              <div className="product-sponsors">
                  <img src={Sponsor1} />
                  <img src={Sponsor2} />
                  <img src={Sponsor3} />
                  <img src={Sponsor4} />
                  <img src={Sponsor5} />
                  <img src={Sponsor6} />
        </div>
          </div>
    </div>
  )
}

export default Sponsors
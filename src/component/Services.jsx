/* eslint-disable no-unused-vars */
import { faBookOpenReader, faTableColumns, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = () => {
  return (
    <div>
      <div className="product-header-container">
        <h3>Featured Products</h3>
        <h2>THE BEST SERVICES</h2>
        <p>Problems trying to resolve the conflict between</p>
      </div>

      <div className="services-container">
        <div className="services-card">
          <FontAwesomeIcon className="services-icon" icon={faBookOpenReader} />
          <h3>Easy Wins</h3>
          <p>Get your best looking smile now!</p>
        </div>

        <div className="services-card">
          <FontAwesomeIcon className="services-icon" icon={faTableColumns} />
          <h3>Concrete</h3>
          <p>
            Defalcate is most focused in helping you to discover your most
            beautiful smail{" "}
          </p>
        </div>

        <div className="services-card">
          <FontAwesomeIcon className="services-icon" icon={faArrowTrendUp} />
          <h3>Hack Growth</h3>
          <p>Overcome any hurdle or any other problem.</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

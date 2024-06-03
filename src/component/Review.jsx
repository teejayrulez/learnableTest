// eslint-disable-next-line no-unused-vars
import React from 'react'
import StarRating from '../Reusables/StarRating'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserIcon from '../assets/Homepage/user1.png'
import Re1 from '../assets/Homepage/re1.png'
import Re2 from '../assets/Homepage/re2.png'
import Re3 from '../assets/Homepage/re3.png'
import Re4 from '../assets/Homepage/re4.png'
import Re5 from '../assets/Homepage/re5.png'
import Re6 from '../assets/Homepage/re6.png'
import Re7 from '../assets/Homepage/re7.png'
import Re8 from '../assets/Homepage/re8.png'
import Re9 from '../assets/Homepage/re9.png'

const Review = () => {
  return (
    <div>
      <div className="review-container">
        <div className="review-left">
          <h2>What they say about us</h2>
          <img src={UserIcon} alt="User-img" />
          <div className="star-rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <StarRating />
          </div>
          <p>
            Late hepls you see how many more days you need to work to reach your
            financial goal.
          </p>
          <span>Regina Miles</span>
          <h3>Desinger</h3>
        </div>
        <div className='review-right-container'>
          <div>
            <img className='review-img-margin' src={Re1} />
            <img className='review-img-margin' src={Re2} />
            <img className='review-img-margin' src={Re3} />
          </div>
          <div>
            <img className='review-img-margin-2' src={Re4} />
            <img className='review-img-margin-2' src={Re5} />
            <img className='review-img-margin-2' src={Re6} />
          </div>
          <div>
            <img className='review-img-margin-3' src={Re7} />
            <img className='review-img-margin-3' src={Re8} />
            <img className='review-img-margin-3' src={Re9} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review

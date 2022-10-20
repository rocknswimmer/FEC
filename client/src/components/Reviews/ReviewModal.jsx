import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from '../Stars/StarRating.jsx';

const ReviewModal = ({toggle, productId}) => {
  let name;
  if (productId === 37311) {
    name = 'Camo Onesie';
  } else if (productId === 37312) {
    name = 'Bright Future Sunglasses';
  } else if (productId === 37313) {
    name = 'Morning Joggers';
  } else if (productId === 37314) {
    name = 'Slacker\'s Slacks';
  }

  const [recommend, setRecommend] = useState(false);
  const [stars, setStars] = useState(0);
  console.log(stars);
  console.log(recommend);

  const selectStars = (int) => {
    setStars(int);
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-pop" role="dialog" aria-modal="true">
          <button className="photo-modal-close" type="button" onClick={() => toggle()}>Close</button>
          <h2>Write Your Review</h2>
          <h3>About the {name}</h3>
          <br/>
          <div>
            <div>
              <div>Overall Rating <small>*</small></div>
              <StarRating selectStars={selectStars} stars={stars}/>
            </div>
            <div>
              <form>
                <div>Do you recommend this product? <small>*</small></div>
                <input type="radio" id="yes" name="rec" onClick={() => setRecommend(true)}/>
                <label for="yes">Yes</label>
                <input type="radio" id="no" name="rec" onClick={() => setRecommend(false)}/>
                <label for="no">No</label>
              </form>
            </div>
          </div>
        </div>
        <div className="modal-overlay" ></div>
      </div>
    </div>
  );
};

export default ReviewModal;
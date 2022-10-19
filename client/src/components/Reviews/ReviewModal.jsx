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

  const [stars, setStars] = useState(null);

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
          <div>Overall Rating <small>*</small></div>
          <StarRating selectStars={selectStars}/>

        </div>
        <div className="modal-overlay" ></div>
      </div>
    </div>
  );
};

export default ReviewModal;
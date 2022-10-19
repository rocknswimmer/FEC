import React, { useState, useEffect } from 'react';
import ReviewModal from './ReviewModal.jsx';


const Buttons = ({handleMoreReviews, reviewsList, visibleReviews, productId}) => {

  const [showModal, setShowModal] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);
  // console.log(reviewsList)
  const toggleReviewModal = (img) => {
    setShowModal(!showModal);
    setIsScrollable(!isScrollable);
    isScrollable ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
  };

  return (
    <div>
      <div>
        {visibleReviews.length < reviewsList.length ?
          <button className="rev-button" onClick={() => { handleMoreReviews(); }}>MORE REVIEWS</button>
          : null}
        <button className="rev-button" onClick={() => toggleReviewModal()}>ADD A REVIEW +</button>
        {showModal ? <ReviewModal toggle={toggleReviewModal} productId={productId}/> : null}
      </div>
    </div>
  );
};

export default Buttons;
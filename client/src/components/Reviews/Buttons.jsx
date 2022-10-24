import React, { useState, useEffect } from 'react';
import ReviewModal from './ReviewModal.jsx';
import styled from 'styled-components';


const Button = styled.button`
  background: inherit;
  color: grey;
  font-size: .75em;
  margin: 10px 0 0 0;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
`;

const Buttons = ({handleMoreReviews, reviewsList, visibleReviews, productId, getReviews, metaData, toggleObj}) => {

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
      <div className="buttons-container">
        {visibleReviews.length < reviewsList.length && !Object.values(toggleObj).includes(true) ?
          <Button
            className="rev-button"
            onClick={() => handleMoreReviews()}>MORE REVIEWS</Button>
          : null}
        <Button
          className="rev-button"
          data-testid="add-button"
          onClick={() => toggleReviewModal()}>ADD A REVIEW +</Button>
        {showModal ?
          <ReviewModal
            toggle={toggleReviewModal}
            productId={productId}
            getReviews={getReviews}
            metaData={metaData}/>
          : null}
      </div>
    </div>
  );
};

export default Buttons;
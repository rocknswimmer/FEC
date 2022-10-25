import React, { useState, useEffect } from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

let reviewCount = 0;

const ReviewsList = ({reviewsList, visibleReviews}) => {

  return (
    <div>
      {visibleReviews.map((review, i) => (
        <ReviewsListEntry review={review} key={i}/>
      ))}
    </div>
  );
};

export default ReviewsList;
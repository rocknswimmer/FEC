import React, { useState, useEffect } from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

const ReviewsList = ({reviewsList}) => {

  //Map ReviewListEntries here
  console.log(reviewsList);
  return (
    <div>
      {reviewsList.map((review, i) => (
        <ReviewsListEntry review={review} key={i}/>
      ))}
    </div>
  );
};

export default ReviewsList;
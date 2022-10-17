import React, { useState, useEffect } from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

const ReviewsList = ({reviewsList}) => {

  //Map ReviewListEntries here
  // console.log(reviewsList);
  return (
    <div>
<<<<<<< HEAD
      {/* {reviewsList.map((review) => (
        <ReviewsListEntry review={review} />
      ))} */}
=======
      {reviewsList.map((review, i) => (
        <ReviewsListEntry review={review} key={i}/>
      ))}
>>>>>>> f1ce8876fad2e65e9d5dacd277a40dec79961cbc
    </div>
  );
};

export default ReviewsList;
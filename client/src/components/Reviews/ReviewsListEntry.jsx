import React, { useState, useEffect } from 'react';

const ReviewsListEntry = ({review}) => {

  let starTest = (int) => {
    let rating = '';
    for (let i = 0; i < int; i++) {
      rating += '*';
    }
    return rating;
  };

  return (
    <div className="rev-entry">
      <div className="rev-star-date">
        <div>{starTest(review.rating)}</div>
        <small><div>{review.reviewer_name}, {review.date}</div></small>
      </div>
      <b><div>{review.summary}</div></b>
      <div>{review.body}</div>
    </div>
  );
};

export default ReviewsListEntry;
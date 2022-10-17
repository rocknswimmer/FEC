import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ReviewEntry = styled.div`
border-bottom: solid grey 1px;
padding: 30px;
display: flex-column;
align-items: space-between;
font-family: arial;
`;

const ReviewTitle = styled.div`
  font-weight: bold;
`;

const ReviewsListEntry = ({review}) => {

  const [over250, setOver250] = useState(review.body.length > 50);


  const toggleShowMore = () => {
    setOver250(!over250);
  };

  let starTest = (int) => {
    let rating = '';
    for (let i = 0; i < int; i++) {
      rating += '*';
    }
    return rating;
  };

  return (
    <ReviewEntry>
      <div className="rev-star-date">
        <div>{starTest(review.rating)}</div>
        <small><div>{review.reviewer_name}, {review.date}</div></small>
      </div>
      {review.summary.length > 60 ?
        <>
          <ReviewTitle>{review.summary.substring(0, 60)}...</ReviewTitle>
          <div>...{review.summary.substring(60, review.summary.length)}</div>
        </> : <ReviewTitle>{review.summary}</ReviewTitle>}
      <div>
        {over250 ?
          <div>
            {review.body.substring(0, 50)}... <div>
              <button onClick={() => (toggleShowMore())}>Show More</button>
            </div>
          </div> : review.body}
      </div>
    </ReviewEntry>
  );
};

export default ReviewsListEntry;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarRating from '../Stars/StarRating.jsx';


const AverageNumContainer = styled.div`
  font-size: 40px;
  margin-right: 30px
`;

const Summary = ({metaData}) => {
  console.log('In summary: ', metaData);
  if (!Object.keys(metaData).length) {
    return null;
  }
  const totalRatings = Object.values(metaData.ratings).reduce((a, b) => Number(a) + Number(b), 0);
  console.log(totalRatings);

  const averageRating = Math.round((((1 * metaData.ratings[1]) + (2 * metaData.ratings[2]) + (3 * metaData.ratings[3]) + (4 * metaData.ratings[4]) + (5 * metaData.ratings[5])) / totalRatings * 10) / 10);
  console.log(averageRating);

  const percentRec = Math.round((metaData.recommended.true / totalRatings) * 100)

  return (
    <div>
      <div>
        <div className="average-and-stars">
          <AverageNumContainer>{averageRating}</AverageNumContainer>
          <StarRating rating={averageRating}/>
        </div>
        <div> Out of {totalRatings} total reviews</div>
      </div>
      <div><small>{percentRec}% of reviews recommend this product</small></div>
      <div className="star-bars">


      </div>
    </div>
  );
};

export default Summary;
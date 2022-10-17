import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewsList from './ReviewsList.jsx';
import Dropdown from './Dropdown.jsx';
import Summary from './Summary.jsx';
import Buttons from './Buttons.jsx';



const Reviews = ({productId}) => {

  const [reviewsList, setReviewsList] = useState([]);


  const getReviews = (id) => {

    axios({
      url: '/reviews/',
      method: 'get',
      params: {
        id: productId,
        count: 6,
        page: 1
      }
    })
      .then((response) => {
        setReviewsList(response.data.results);
        console.log('in client request', response);
      })
      .catch((err) => {
        console.log('error in client request', err);
      });
  };

  useEffect(() => {
    getReviews(productId);
  }, []);

  const ReviewsContainer = styled.div`
    padding: 10px;
    margin: 32px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    overflow-y: scroll;
  `;

  const SummaryListDivider = styled.div`
  width: 100%;
  display: flex;
  flex-shrink: 0;
  overflow: scroll;
  `;

  return (
    <ReviewsContainer>
      <div>
        <div>
          <h3 id="rev-header">RATINGS AND REVIEWS</h3>
        </div>
        <SummaryListDivider>
          <div className="summary">
            <Summary />
          </div>
          <div className="list">
            <Dropdown reviewsList={reviewsList}/>
            <ReviewsList reviewsList={reviewsList}/>
            <Buttons />
          </div>
        </SummaryListDivider>
      </div>
    </ReviewsContainer>
  );
};

export default Reviews;
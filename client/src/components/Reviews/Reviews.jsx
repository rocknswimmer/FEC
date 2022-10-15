import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        page: 4
      }
    })
      .then((response) => {
        console.log('in client request', response);
      })
      .catch((err) => {
        console.log('error in client request', err);
      });
  };

  useEffect(() => {
    getReviews(productId);
  }, []);

  return (
    <div id="rev-container">
      <div>
        <h3 id="rev-header">RATINGS AND REVIEWS</h3>
      </div>
      <div id="rev-summary-list-divider">
        <div class="summary">
          <Summary />
        </div>
        <div class="list">
          <Dropdown />
          <ReviewsList />
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
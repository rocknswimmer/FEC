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
        page: 1
      }
    })
      .then((response) => {
        setReviewsList(response.data.results);
        // console.log('in client request', response);
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
        <div className="summary">
          <Summary />
        </div>
        <div className="list">
          <Dropdown reviewsList={reviewsList}/>
          <ReviewsList reviewsList={reviewsList}/>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
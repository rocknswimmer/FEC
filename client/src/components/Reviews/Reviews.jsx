import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import Dropdown from './Dropdown.jsx';
import Summary from './Summary.jsx';
import Buttons from './Buttons.jsx';



const Reviews = (props) => {

  console.log(props);

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
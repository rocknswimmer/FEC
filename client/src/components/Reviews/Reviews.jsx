import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import Dropdown from './Dropdown.jsx';
import Summary from './Summary.jsx';
import Buttons from './Buttons.jsx';



const Reviews = (props) => {

  console.log(props);

  return (
    <div>
      <h3>I'm a Reviews parent component</h3>
      <Summary />
      <Dropdown />
      <ReviewsList />
      <Buttons />
    </div>
  );
};

export default Reviews;
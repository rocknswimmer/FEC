import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Description from './Description.jsx';
import ProductImage from './ProductImage.jsx';
import ProductName from './ProductName.jsx';
import SelectedStyle from './SelectedStyle.jsx';
import ItemSelection from './SelectedStyle.jsx';

const View = ({ productId }) => {
  //Establish pieces of state for View and StyleSelector
  const [currentProduct, setCurrentProduct] = useState({
    "id": 37311,
    "campus": "hr-rfe",
    "name": "",
    "slogan": "",
    "description": "",
    "category": "",
    "default_price": "",
    "created_at": "",
    "updated_at": "",
    "features": [
      {
        "feature": "",
        "value": ""
      }
    ]
  });

  const [currentStyle, setCurrentStyle] = useState({});

  //Get methods for View and StyleSelector
  const getCurrentProduct = (productId) => {
    axios.get('/products', {
      params: {
        "id": productId
      }
    })
      .then(results => {
        console.log('Here are the successful results of of getCurrentProduct ', results);
        setCurrentProduct(results);
      })
      .catch(err => {
        console.log('There is an error in the getCurrentProduct fn ', err);
      })
  };

  const getCurrentStyle = () => { };

  return (
    <div>
      I'm the View.jsx and this is the product Id {productId} i received from App
      <ProductImage />
      <ProductName />
      <SelectedStyle />
      <ItemSelection />
      <Description />
    </div>
  );
};

export default View;
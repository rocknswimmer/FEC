import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Description from './Description.jsx';
import ProductImage from './ProductImage.jsx';
import ProductName from './ProductName.jsx';
import SelectedStyle from './SelectedStyle.jsx';
import ItemSelection from './SelectedStyle.jsx';

const View = ({ productId }) => {
  //Establish pieces of state for View and StyleSelector
  const [currentProduct, setCurrentProduct] = useState({});
  const [otherStyles, setOtherStyles] = useState([]);

  //Get methods for View and StyleSelector
  const getCurrentProduct = (productId) => {
    axios.get('/products', {
      params: {
        "id": productId
      }
    })
      .then(results => {
        let newProduct = results.data;
        setCurrentProduct(newProduct);
      })
      // .then()
      .catch(err => {
        console.log('There is an error in the getCurrentProduct fn ', err);
      });
  };

  const getOtherStyles = (productId) => {
    const endPoint = `/products/:product_id/styles`;
    axios.get(endPoint, {
      params: {
        "id": productId
      }
    })
      .then(results => {
        setOtherStyles(results.data.results);
      })
      .catch(err => {
        console.log('Here is an error in getOtherStyles ->', err);
      });
  };

  //useEffect
  useEffect(() => {
    getCurrentProduct(productId);
    getOtherStyles(productId);
  }, []);

  return (
    <div className="view-main">
      <ProductImage otherStyles = {otherStyles}/>
      <div>
        <ProductName productInfo={currentProduct} />
        <SelectedStyle otherStyles={otherStyles} />
        <ItemSelection />
      </div>

      <Description productInfo={currentProduct} />
    </div>
  );
};

export default View;
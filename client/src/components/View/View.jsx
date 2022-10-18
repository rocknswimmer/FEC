import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Description from './Description.jsx';
import ProductImage from './ProductImage.jsx';
import ProductName from './ProductName.jsx';
import SelectedStyle from './SelectedStyle.jsx';
import ItemSelection from './ItemSelection.jsx';

const View = ({ productId }) => {
  //Establish pieces of state for View and StyleSelector
  const [currentProduct, setCurrentProduct] = useState({});
  const [otherStyles, setOtherStyles] = useState([]);
  const [displayedStyle, setDisplayedStyle] = useState({});
  const [cartContents, setCartContents] = useState([]);

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
        let stylesArray = results.data.results;
        setOtherStyles(stylesArray);
        setDisplayedStyle(stylesArray[0]);
      })
      .catch(err => {
        console.log('Here is an error in getOtherStyles ->', err);
      });
  };

  //Add to Cart <---have not tested this yet
  const addToCart = (cartAddition) => {
    let newCartArray = cartContents.map((itemObj, index) => {
      let modifiedObj = {};
      Object.assign(modifiedObj, itemObj);
      if (itemObj.product_id === cartAddition.product_id
          && itemObj.style_id === cartAddition.style_id
          && itemObj.sku === cartAddition.sku) {
        modifiedObj.selectedQty = cartAddition.selectedQty + itemObj.selectedQty;
      }
      return modifiedObj;
    });
    setCartContents(newCartArray);
  };

  //useEffect
  useEffect(() => {
    getCurrentProduct(productId);
    getOtherStyles(productId);
  }, []);

  //eventhandler to change DisplayedStyle
  const changeDisplayedStyle = (index) => {
    setDisplayedStyle(otherStyles[index]);
  };

  return (
    <div className="view-main">
      <ProductImage otherStyles={otherStyles} />
      <div>
        <ProductName productInfo={currentProduct} currentDisplayedStyle={displayedStyle} />

        {otherStyles.length > 0 && <SelectedStyle otherStyles={otherStyles} productId={productId} changeDisplayedStyle={changeDisplayedStyle} currentDisplayedStyle={displayedStyle} />}

        <ItemSelection currentDisplayedStyle={displayedStyle} productId={productId} />
      </div>

      <Description productInfo={currentProduct} />
    </div>
  );
};

export default View;
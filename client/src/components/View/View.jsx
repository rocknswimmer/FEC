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
    console.log('inside addToCart at View level, adding the following to the cart -->', cartAddition);
    console.log('these are the cartContents before  adding', cartContents);

    let foundItemInCart = false;

    let newCartArray = cartContents.map((cartItemObj, index) => {
      let modifiedCartObj = {};
      Object.assign(modifiedCartObj, cartItemObj);
      console.log(modifiedCartObj, '<---- this is the modifiedCartObj inside addToCart');
      if (cartItemObj.product_id === cartAddition.product_id
          && cartItemObj.style_id === cartAddition.style_id
          && cartItemObj.sku === cartAddition.sku) {
        modifiedCartObj.quantity = cartItemObj.quantity - cartAddition.selectedQty;
        foundItemInCart = true;
      }
      return modifiedCartObj;
    });
    if (!foundItemInCart) {
      newCartArray.push(cartAddition);
    }


    console.log('this is the newCartArray before setCartContents > ', newCartArray);
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

        <ItemSelection currentDisplayedStyle={displayedStyle} productId={productId} addToCart = {addToCart} cartContents = {cartContents}/>
      </div>

      <Description productInfo={currentProduct} />
    </div>
  );
};

export default View;
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
        // setOtherStyles(results.data.results);
        let stylesArray = results.data.results;
        // Promise.all(results.data.results)
        //   .then(values => {
        //     console.log(values, 'promise resolution');
        //     setOtherStyles(values);
        //   });
        setOtherStyles(stylesArray);
        // return stylesArray;
      })
      .catch(err => {
        console.log('Here is an error in getOtherStyles ->', err);
      });
  };
  const newFn = () => {
    getOtherStyles(productId);
  };


  //useEffect
  useEffect(() => {
    getCurrentProduct(productId);
    getOtherStyles(productId);
  }, []);

  return (
    <div className="view-main">
      <ProductImage otherStyles={otherStyles} />
      <div>
        <ProductName productInfo={currentProduct} />

       {otherStyles.length > 0 && <SelectedStyle otherStyles={otherStyles} productId={productId} />}


        {/* <ItemSelection productId = {productId}/> */}
      </div>

      <Description productInfo={currentProduct} />
    </div>
  );
};

export default View;
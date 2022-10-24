import React from 'react';
import { useState, useEffect } from 'react';
import Reviews from './Reviews/Reviews.jsx';
import View from './View/View.jsx';
import Questions from './Questions/Questions.jsx';
// import Header from './Header.jsx';
import axios from 'axios';


const App = () => {
  const randomId = 37311 + Math.floor(Math.random() * 15);
  const [product, setProduct] = useState(37311);

  const [metaData, setMetaData] = useState({});
  const [currentProduct, setCurrentProduct] = useState({});

  const getMetaData = (id) => {
    axios({
      method: 'get',
      url: 'reviews/meta',
      params: {
        'product_id': id
      }
    })
      .then((response) => {
        setMetaData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCurrentProduct = (productId) => {
    axios.get('/products', {
      params: {
        'id': productId
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

  useEffect(() => {
    getMetaData(product);
    getCurrentProduct(product);
  }, []);

  return (
    <div id="app">
      <Header />
      <View productId={product} currentProduct={currentProduct} metaData={metaData} />
      <Questions productId={product} />
      <Reviews productId={product} metaData={metaData} currentProduct={currentProduct} />
    </div>
  );
};

export default App;

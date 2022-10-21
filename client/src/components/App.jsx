import React from 'react';
import { useState, useEffect } from 'react';
import Reviews from './Reviews/Reviews.jsx';
import View from './View/View.jsx';
import Questions from './Questions/Questions.jsx';
import axios from 'axios';


const App = () => {
  const randomId = 37311 + Math.floor(Math.random() * 15);
  const [product, setProduct] = useState(37311);

  const [metaData, setMetaData] = useState({});

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

  useEffect(() => {
    const start = 37311;
    getMetaData(product);
    setProduct(randomId);
  }, []);

  return (
    <div id="app">
      <h1>House Greyjoy</h1>
      <View productId = {product} />
      <Questions productId = {product} />
      <Reviews productId={product} metaData={metaData}/>
    </div>
  );
};

export default App;

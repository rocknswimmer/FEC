import React from 'react';
import { useState, useEffect } from 'react';
import Reviews from './Reviews/Review.jsx';
// import View from './View/View.jsx';
import Questions from './Questions/Questions.jsx';


const App = () => {

  const [product, setProduct] = useState(37311);

  useEffect(() => {
    const start = 37311;
    const randomId = 37311 + Math.floor(Math.random() * 4);
    setProduct(randomId);
  }, []);

  return (
    <div>
      <h1>House Greyjoy</h1>
      {/* <View productId = {product} /> */}
      <Questions productId = {product} />
      < Reviews productId={product} />
    </div>
  );
};

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
const App = () => {

  const [product, setProduct] = useState({});

  useEffect(() => {
    // get request
    //set state to result of request
  }, []);

  return (
    <div>
      <h1>House Greyjoy</h1>
      {/* <View />
      <Questions />
      <Reviews /> */}
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';

const ProductName = ({productInfo}) => {
  // console.log(productInfo);
  return (
    <div>
      <>Stars *****</>
      <h4 className = "category">CATEGORY</h4>
      <h1>{productInfo.name}</h1>
      <p>${productInfo.default_price}</p>

    </div>
  );
};

export default ProductName;
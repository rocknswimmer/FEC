import React, { useState, useEffect } from 'react';
import { SalesPricing, FormerPrice } from './Styled/PricingAndDescription.styled.jsx';

const ProductName = ({ productInfo, currentDisplayedStyle }) => {
  // const [price, setPrice] = useState(0);
  const [onSale, setOnSale] = useState(false);

  useEffect(() => {
    setOnSale(false);
    if (currentDisplayedStyle.sale_price) {
      setOnSale(true);
    }
    console.log(currentDisplayedStyle.sale_price);
  }, [currentDisplayedStyle]);


  return (
    <div>
      <>Stars *****</>
      <h4 className="category">CATEGORY: {productInfo.category}</h4>
      <h1>{productInfo.name}</h1>
      {
        !onSale && <h3> Price: ${productInfo.default_price}</h3>
      }
      {
        onSale && <>
          <h3>On Sale Now: <SalesPricing>  ${currentDisplayedStyle.sale_price} </SalesPricing></h3>
          <h3>Original Price:  <FormerPrice>$ {currentDisplayedStyle.original_price}</FormerPrice></h3>
        </>
      }

    </div>
  );
};

export default ProductName;
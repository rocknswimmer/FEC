import React, { useState, useEffect } from 'react';
import StarRating from '../Stars/StarRating.jsx';
import { SalesPricing, FormerPrice } from './Styled/PricingAndDescription.styled.jsx';

const ProductName = ({ productInfo, currentDisplayedStyle, metaData, interact }) => {
  const [onSale, setOnSale] = useState(false);
  const [metaDataRatings, setMetaDataRatings] = useState({});
  const [averageStarRating, setAverageStarRating] = useState(0);


  const averageStars = (ratingsObj) => {
    let totalStars = 0;
    let weightedStars = 0;
    let weightedAverage = 0;
    for (let star in ratingsObj) {
      let numStar = parseInt(star);
      totalStars += parseInt(ratingsObj[star]);
      weightedStars += numStar * parseInt(ratingsObj[star]);
    }
    weightedAverage = weightedStars / totalStars;
    return weightedAverage;
  };

  useEffect(() => {
    setOnSale(false);
    if (currentDisplayedStyle.sale_price) {
      setOnSale(true);
    }
    if (metaData.product_id) {
      let newRatingsObj = averageStars(metaData.ratings);
      setAverageStarRating(newRatingsObj);
    }
  }, [currentDisplayedStyle, metaData]);



  return (
    <div>
      <div className="static-stars">
        <StarRating
          rating={averageStarRating}
        />
      </div>

      <h4
        data-testid="category_test"
        className="category">
        CATEGORY: {productInfo.category}
      </h4>
      <h1>{productInfo.name}</h1>
      {
        !onSale &&
        <h3> Price:
          ${productInfo.default_price}
        </h3>
      }
      {
        onSale &&
        <>
          <h3>On Sale Now:
            <SalesPricing>
              ${currentDisplayedStyle.sale_price}
            </SalesPricing>
          </h3>

          <h3>Original Price:
            <FormerPrice>
              $ {currentDisplayedStyle.original_price}
            </FormerPrice>
          </h3>

        </>
      }

    </div >
  );
};

export default ProductName;
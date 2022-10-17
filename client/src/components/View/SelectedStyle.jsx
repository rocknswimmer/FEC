import React, { useState, useEffect } from 'react';

const SelectedStyle = ( {otherStyles, productId} ) => {

  console.log('is the otherStyles an array in SelectedStyle ', Array.isArray(otherStyles), otherStyles);
  return (
    <div>
      {
        otherStyles.map((style, index) => {
          let imgSrc = style.photos[0].thumbnail_url;
          return <img src = {imgSrc} />;

        })
      }

    </div>
  );
};

export default SelectedStyle;



{/* <img className = 'style-thumbnail' key = {index} src = {style.photos.thumbnail_url}/>;  */}
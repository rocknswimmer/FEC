import React, { useState, useEffect } from 'react';

const SelectedStyle = ( {otherStyles, productId} ) => {

  return (
    <div>
      {
        otherStyles.map((style, index) => {
          let imgSrc = style.photos[0].thumbnail_url;
          return <img key ={index} src = {imgSrc} />;
        })
      }
    </div>
  );
};

export default SelectedStyle;




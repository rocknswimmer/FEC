import React, { useState, useEffect } from 'react';

const SelectedStyle = ({otherStyles}) => {
  console.log('is the otherStyles an array in SelectedStyle ', Array.isArray(otherStyles));
  return (
    <div>
      {
        // map.otherStyles((style, index) => {
        //   return <img className = 'style-thumbnail' key = {index} src = {style.photos.thumbnail_url}/>;
        // })
      }


    </div>
  );
};

export default SelectedStyle;



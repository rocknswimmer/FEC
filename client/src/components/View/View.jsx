import React, { useState, useEffect } from 'react';
import Description from './Description.jsx';
import ProductImage from './ProductImage.jsx';
import ProductName from './ProductName.jsx';
import SelectedStyle from './SelectedStyle.jsx';
import ItemSelection from './SelectedStyle.jsx';

const View = ({productId}) => {
  return (
    <div>
      I'm the View.jsx and this is the product Id {productId} i received from App
      <ProductImage productId = {productId}/>
      <ProductName productId = {productId}/>
      <SelectedStyle productId = {productId}/>
      <ItemSelection productId = {productId}/>
      <Description productId = {productId}/>
    </div>
  );
};

export default View;
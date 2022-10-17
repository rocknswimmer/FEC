import React, { useState, useEffect } from 'react';
import {RoundImage, StyleDiv} from './Styled/SelectedStyleImage.styled.jsx';
import styled from 'styled-components';



const SelectedStyle = ( {otherStyles, productId} ) => {

  return (
    <StyleDiv>
      {
        otherStyles.map((style, index) => {
          let imgSrc = style.photos[0].thumbnail_url;
          return <RoundImage key = {index} img={imgSrc}></RoundImage>;
        })
      }
    </StyleDiv>
  );
};

export default SelectedStyle;


{/* <img key ={index} src = {imgSrc} />  */}

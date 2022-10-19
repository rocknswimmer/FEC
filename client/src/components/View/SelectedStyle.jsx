import React, { useState, useEffect } from 'react';
import {RoundImage, StyleDiv} from './Styled/SelectedStyleImage.styled.jsx';
import styled from 'styled-components';
import {FaCheckCircle} from 'react-icons/fa';


const SelectedStyle = ( {otherStyles, productId, changeDisplayedStyle, currentDisplayedStyle} ) => {
  const [displayCheck, setDisplayCheck] = useState(true);

  return (
    <StyleDiv>
      {
        otherStyles.map((style, index) => {

          let imgSrc = style.photos[0].thumbnail_url;
          if (imgSrc === null) {
            return <></>;
          } else {
            return <RoundImage key = {index} img={imgSrc} onClick ={(event) => {
              changeDisplayedStyle(index);
            }} >{currentDisplayedStyle.name === style.name && <FaCheckCircle style={{color: 'red'}}/>}</RoundImage>;
          }
        })
      }
    </StyleDiv>
  );
};

export default SelectedStyle;

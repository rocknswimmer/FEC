import React, { useState, useEffect } from 'react';
import {PhotoColumn, Thumbnails} from './Styled/LargeImage.styled.jsx';

const Carousel = ({imageArray, photoIndex, changePhotoToSelectedThumbnail}) => {

  // Create clickhandlers for up and down arrows
  const clickHanderArrowUp = (event) => {
    if (photoIndex === 0) {
      setPhotoIndex(imageArray.length - 1);
    }
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }
    setDisplayedImage(imageArray[photoIndex].url);
  };

  return (
    <PhotoColumn>
      {
        imageArray.map((photoObj, index) => {
          let pictureUrl = photoObj.thumbnail_url;
          return (
            <Thumbnails key= {index} index = {index} photoIndex = {photoIndex} onClick={(event)=> { changePhotoToSelectedThumbnail(index); }} img={pictureUrl}></Thumbnails>
          );
        })
      }
    </PhotoColumn>
  );
};

export default Carousel;
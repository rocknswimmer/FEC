import React, { useState, useEffect } from 'react';
import {PhotoColumn, Thumbnails} from './Styled/LargeImage.styled.jsx';

const Carousel = ({imageArray, photoIndex, changePhotoToSelectedThumbnail}) => {
  // const []
  return (
    <PhotoColumn>
      {
        imageArray.map((photoObj, index) => {
          let pictureUrl = photoObj.thumbnail_url;
          return (
            <Thumbnails key= {index} onClick={(event)=> { changePhotoToSelectedThumbnail(index); }} img={pictureUrl}></Thumbnails>
          );
        })
      }
    </PhotoColumn>
  );
};

export default Carousel;
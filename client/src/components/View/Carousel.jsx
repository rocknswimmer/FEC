import React, { useState, useEffect } from 'react';
import { PhotoColumn, Thumbnails } from './Styled/LargeImage.styled.jsx';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


const Carousel = ({ imageArray, photoIndex, changePhotoToSelectedThumbnail }) => {
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [thumbnailEndIndex, setThumbnailEndIndex] = useState(4);
  const [endOfUpScroll, setEndOfUpScroll] = useState(false);
  const [endOfDownScroll, setEndOfDownScroll] = useState(false);
  const numberOfDisplayedThumbnails = 4;

  const moveThumbnailsUp = (e) => {
    if (thumbnailEndIndex < imageArray.length) {
      setEndOfDownScroll(false);
      setThumbnailStartIndex(thumbnailStartIndex + 1);
      setThumbnailEndIndex(thumbnailEndIndex + 1);
    } else if (thumbnailEndIndex === imageArray.length) {
      setEndOfUpScroll(true);
    }
  };

  const moveThumbnailsDown = (e) => {
    if (thumbnailStartIndex !== 0) {
      setEndOfUpScroll(false);
      setThumbnailStartIndex(thumbnailStartIndex - 1);
      setThumbnailEndIndex(thumbnailEndIndex - 1);
    } else {
      setEndOfDownScroll(true);
    }
  };

  return (
    <PhotoColumn>
      {!endOfUpScroll && < div onClick={moveThumbnailsUp}><FaAngleUp /></div>}
      {
        imageArray.map((photoObj, index) => {
          let pictureUrl = photoObj.thumbnail_url;
          if (index < thumbnailEndIndex && index >= thumbnailStartIndex) {
            return (
              <Thumbnails key={index} index={index} photoIndex={photoIndex} onClick={(event) => { changePhotoToSelectedThumbnail(index); }} img={pictureUrl}></Thumbnails>
            );
          }

        })
      }
      {!endOfDownScroll && <div onClick={moveThumbnailsDown}><FaAngleDown /></div>}
    </PhotoColumn>
  );
};

export default Carousel;
import React, { useState, useEffect } from 'react';
import { PhotoColumn, Thumbnails } from './Styled/LargeImage.styled.jsx';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


const Carousel = ({ imageArray, photoIndex, changePhotoToSelectedThumbnail, sendThumbnailUp, thumbnailArray, sendThumbnailDown }) => {
  const [carouselArray, setCarouselArray] = useState([]);
  const [indexObj, setIndexObj] = useState({ start: 0, end: 3 });
  const numberOfDisplayedThumbnails = 5;

  //create scrolling arrayFunction
  useEffect(() => {
    let tempArray = thumbnailArray.slice();
    setCarouselArray(tempArray);
  }, [thumbnailArray]);

  const moveThumbnailsUp = (e) => {
    let image = carouselArray[0];
    let tempArray = carouselArray.slice(1);
    tempArray.push(image);
    setCarouselArray(tempArray);
  };

  const moveThumbnailsDown = (e) => {
    let image = carouselArray[carouselArray.length - 1];
    let tempArray = carouselArray.slice(0, -1);
    tempArray.unshift(image);
    setCarouselArray(tempArray);
  };

  useEffect(() => {
    if (sendThumbnailUp > 0) {
      let image = carouselArray[0];
      let tempArray = carouselArray.slice(1);
      tempArray.push(image);
      setCarouselArray(tempArray);
    }
  }, [sendThumbnailUp]);

  useEffect(() => {
    if (sendThumbnailDown > 0) {
      let image = carouselArray[carouselArray.length - 1];
      let tempArray = carouselArray.slice(0, -1);
      tempArray.unshift(image);
      setCarouselArray(tempArray);
    }
  }, [sendThumbnailDown]);
  return (
    <PhotoColumn>
      < div onClick={moveThumbnailsUp}><FaAngleUp /></div>
      {carouselArray.map((photoObj, index) => {
        // console.log(photoObj, '<photoObj');

        let originalIndex = photoObj.originalIndex;
        // console.log(originalIndex, '<originalIndex');
        let pictureUrl = photoObj.thumbnail_url;
        if (index < numberOfDisplayedThumbnails && index >= 0) {
          return (
            <Thumbnails key={index} origIndex={originalIndex} photoIndex={photoIndex} onClick={(event) => { changePhotoToSelectedThumbnail(originalIndex); }} img={pictureUrl}></Thumbnails>
          );
        }
      })
      }
      <div onClick={moveThumbnailsDown}><FaAngleDown /></div>
    </PhotoColumn>
  );
};

export default Carousel;
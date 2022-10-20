import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import {FaAngleLeft, FaAngleRight, FaExpand } from 'react-icons/fa';
import { ExpandedImageDiv, ExpandedView, ComponentBlock, LeftArrow, RightArrow, Expander } from './Styled/LargeImage.styled.jsx';



const ExpandedPhoto = ({ currentDisplayedStyle }) => {
  const [imageArray, setImageArray] = useState([]);
  const [infoUpdated, setInfoUpdated] = useState(false);
  const [displayedImage, setDisplayedImage] = useState('');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [thumbnailArray, setThumbnailArray] = useState([]);
  const [sendThumbnailUp, setSendThumbnailUp] = useState(0);
  const [sendThumbnailDown, setSendThumbnailDown] = useState(0);

  //create the thumbnailArray
  const createThumbnailArray = (array) => {
    let tempArray = array.map((photoObj, index) => {
      let photoCopy = Object.assign({}, photoObj);
      photoCopy.originalIndex = index;
      return photoCopy;
    });
    setThumbnailArray(tempArray);
  };

  const moveThumbnailsUp = (e) => {
    let image = thumbnailArray[0];
    let tempArray = thumbnailArray.slice(1);
    tempArray.push(image);
    setThumbnailArray(tempArray);
  };

  //create clickHandler for side arrows
  const clickHanderArrowRight = (event) => {
    let num= photoIndex;
    if (photoIndex < imageArray.length - 1) {
      setPhotoIndex(photoIndex + 1);
      num +=1;
    }
    let otherNum = sendThumbnailUp;
    otherNum += 1;
    setSendThumbnailUp(otherNum);
    setDisplayedImage(imageArray[num].url)
  };

  const clickHanderArrowLeft = (event) => {
    let num = photoIndex;
    if (photoIndex === 0) {
      setPhotoIndex(imageArray.length - 1);
    }
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
      num -=1;
    }
    let otherNum = sendThumbnailDown;
    otherNum += 1;
    setSendThumbnailDown(otherNum);
    setDisplayedImage(imageArray[num].url);
  };

  //set photoIndex handler for Carousel
  const changePhotoToSelectedThumbnail = (num) => {
    if (num !== photoIndex) {
      setPhotoIndex(num);
      setDisplayedImage(imageArray[num].url);
    }
  };

  useEffect(() => {
    if (currentDisplayedStyle.photos) {
      setImageArray(currentDisplayedStyle.photos);
      setInfoUpdated(true);
      let firstImage = currentDisplayedStyle.photos[photoIndex].url;
      if (firstImage === null) {
        firstImage = 'https://commons.wikimedia.org/wiki/File:Image_not_available.png';
      }
      setDisplayedImage(firstImage);
      createThumbnailArray(currentDisplayedStyle.photos);
    }
  }, [currentDisplayedStyle]);

  return (
    <ComponentBlock>
      {infoUpdated &&

          <ExpandedImageDiv img={displayedImage}>
            <Carousel imageArray={imageArray} photoIndex= {photoIndex} changePhotoToSelectedThumbnail={changePhotoToSelectedThumbnail} thumbnailArray = {thumbnailArray} sendThumbnailUp = {sendThumbnailUp} sendThumbnailDown = {sendThumbnailDown}/>
            <Expander><FaExpand/></Expander>
            {photoIndex !== 0 && <LeftArrow onClick = {clickHanderArrowLeft}><FaAngleLeft/></LeftArrow>}
            {photoIndex !== imageArray.length -1 && <RightArrow onClick = {clickHanderArrowRight}><FaAngleRight/></RightArrow>}
          </ExpandedImageDiv>
      }

    </ComponentBlock>
  );
};

export default ExpandedPhoto;
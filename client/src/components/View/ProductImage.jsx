import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import {FaAngleLeft, FaAngleRight, FaExpand } from 'react-icons/fa';
import { MainImage, ExpandedView, ComponentBlock, LeftArrow, RightArrow, Expander } from './Styled/LargeImage.styled.jsx';



const ProductImage = ({ currentDisplayedStyle }) => {
  const [imageArray, setImageArray] = useState([]);
  const [infoUpdated, setInfoUpdated] = useState(false);
  const [displayedImage, setDisplayedImage] = useState('');
  const [photoIndex, setPhotoIndex] = useState(0);

  // console.log(currentDisplayedStyle, '<------ this is the displayed style from within ProductImage');

  //create clickHandler for side arrows
  const clickHanderArrowRight = (event) => {
    if (photoIndex < imageArray.length - 1) {
      setPhotoIndex(photoIndex + 1);
    } else if (photoIndex === imageArray.length - 1) {
      setPhotoIndex(0);
    }
    // console.log(photoIndex, imageArray.length - 1, 'array object at index');
    setDisplayedImage(imageArray[photoIndex].url);
  };

  const clickHanderArrowLeft = (event) => {
    if (photoIndex === 0) {
      setPhotoIndex(imageArray.length - 1);
    }
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }
    // console.log(photoIndex, imageArray.length - 1, 'array object at index');
    setDisplayedImage(imageArray[photoIndex].url);
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
    }
  }, [currentDisplayedStyle]);

  return (
    <ComponentBlock>
      {infoUpdated &&

          <MainImage img={displayedImage}>
            {/* <Carousel/> */}
            <Expander><FaExpand/></Expander>
            <LeftArrow onClick = {clickHanderArrowLeft}><FaAngleLeft/></LeftArrow>
            <RightArrow onClick = {clickHanderArrowRight}><FaAngleRight/></RightArrow>
          </MainImage>
      }

    </ComponentBlock>
  );
};

export default ProductImage;
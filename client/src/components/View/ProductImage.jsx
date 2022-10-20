import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import {FaAngleLeft, FaAngleRight, FaExpand } from 'react-icons/fa';
import { MainImage, ExpandedView, ComponentBlock, LeftArrow, RightArrow, Expander } from './Styled/LargeImage.styled.jsx';



const ProductImage = ({ currentDisplayedStyle }) => {
  const [imageArray, setImageArray] = useState([]);
  const [infoUpdated, setInfoUpdated] = useState(false);
  const [displayedImage, setDisplayedImage] = useState('');
  const [photoIndex, setPhotoIndex] = useState(0);


  //create clickHandler for side arrows
  const clickHanderArrowRight = (event) => {
    let num= photoIndex;
    if (photoIndex < imageArray.length - 1) {
      setPhotoIndex(photoIndex + 1);
      num +=1;
    }
    // else if (photoIndex === imageArray.length - 1) {
    //   setPhotoIndex(0);
    // }
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
    }
  }, [currentDisplayedStyle]);

  return (
    <ComponentBlock>
      {infoUpdated &&

          <MainImage img={displayedImage}>
            <Carousel imageArray={imageArray} photoIndex= {photoIndex} changePhotoToSelectedThumbnail={changePhotoToSelectedThumbnail}/>
            <Expander><FaExpand/></Expander>
            {photoIndex !== 0 && <LeftArrow onClick = {clickHanderArrowLeft}><FaAngleLeft/></LeftArrow>}
            {photoIndex !== imageArray.length -1 && <RightArrow onClick = {clickHanderArrowRight}><FaAngleRight/></RightArrow>}
          </MainImage>
      }

    </ComponentBlock>
  );
};

export default ProductImage;
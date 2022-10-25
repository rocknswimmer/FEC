import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import { FaCamera, FaAngleLeft, FaAngleRight, FaWindowClose, FaCircle, FaStar } from 'react-icons/fa';
import { ExpandedImageDiv, ExpandedView, ComponentBlock, LeftArrow, RightArrow, ModalPop, ModalPhoto, ModalOverlay, IconHolder, ExpandedPhotoControls } from './Styled/LargeImage.styled.jsx';


const ExpandedPhoto = ({ displayedImage, photoIndex, arrowRightHandler, expandPhoto, arrowLeftHandler, lengthOfImageArray, changePhotoToSelectedIcon, imageArray, interact }) => {


  const [isZoomed, setIsZoomed] = useState(false);
  const [mouseLocation, setMouseLocation] = useState('center');
  const [cursorType, setCursorType] = useState({});

  const cursorCrossHair = {
    cursor: 'crosshair'
  };

  const cursorZoomOut = {
    cursor: 'zoom-out'
  };

  const zoom = (event) => {
    // console.log(event);
    if (isZoomed === false) {
      setMouseLocation(`${event.clientX}px ${event.clientY}px`);
      setIsZoomed(!isZoomed);
      setCursorType(cursorZoomOut);
    } else {
      console.log('zoom event listener firing on case where isZoomed= true');
      setIsZoomed(false);
      setMouseLocation('center');
      setCursorType(cursorCrossHair);
    }

  };


  return (
    <>
      <ExpandedImageDiv >
        <ModalPop
          className="modal-pop"
          role="dialog"
          aria-modal="true"
        >

          <ExpandedPhotoControls>
            {photoIndex !== 0 &&
              <FaAngleLeft
                className="expanded-photo-left"
                onClick={arrowLeftHandler} />}
            {
              photoIndex === 0 &&
              <FaAngleLeft
                className="expanded-photo-left"
                style={
                  {
                    stroke: 'rgba(0,0,0,0)',
                    fill: 'rgba(0,0,0,0)'
                  }
                }
              />
            }
            {photoIndex !== imageArray.length - 1 &&
              <FaAngleRight
                className="expanded-photo-right"
                onClick={arrowRightHandler} />}
            {
              photoIndex === imageArray.length - 1 &&
              <FaAngleRight
                className="expanded-photo-left"
                style={
                  {
                    stroke: 'rgba(0,0,0,0)',
                    fill: 'rgba(0,0,0,0)'
                  }
                }
              />
            }

            <FaWindowClose
              onClick={expandPhoto}
              className="close-out-expanded-view" />

            <IconHolder

            >
              {
                Array.from(Array(imageArray.length).keys()).map((num, index) => {
                  if (num === photoIndex) {
                    return <div
                      key={index}
                    >
                      <FaCamera className='icon-styled' /></div>;
                  } else {
                    return (
                      <div
                        data-testid="icon"
                        key={index}
                        number={index}
                        onClick={(e) => { changePhotoToSelectedIcon(index); }}>
                        <FaCircle
                          style={{ height: '20px' }}
                          className='icon-styled'
                        />
                      </div>);

                  }
                })
              }
            </IconHolder>
          </ExpandedPhotoControls>

          <ModalPhoto
            data-testid="modal"
            src={displayedImage}
            isZoomed={isZoomed}
            mouseLocation={mouseLocation}
            style = {cursorType}
            onClick={zoom}
          />


        </ModalPop>
        <ModalOverlay>
        </ModalOverlay>
      </ExpandedImageDiv>
    </>
  );
};

export default ExpandedPhoto;




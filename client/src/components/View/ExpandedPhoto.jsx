import React, { useState, useEffect, useRef } from 'react';
import Carousel from './Carousel.jsx';
import { FaCamera, FaAngleLeft, FaAngleRight, FaWindowClose, FaCircle, FaStar } from 'react-icons/fa';
import { ExpandedImageDiv, ExpandedView, ComponentBlock, LeftArrow, RightArrow, ModalPop, ModalPhoto, ModalOverlay, IconHolder, ExpandedPhotoControls } from './Styled/LargeImage.styled.jsx';


const ExpandedPhoto = ({ displayedImage, photoIndex, arrowRightHandler, expandPhoto, arrowLeftHandler, lengthOfImageArray, changePhotoToSelectedIcon, imageArray, interact }) => {
  // const modalPhotoRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mouseLocation, setMouseLocation] = useState('center');
  const [cursorType, setCursorType] = useState({});
  // let mouseMoveListener;

  const cursorCrossHair = {
    cursor: 'zoom-in'
  };

  const cursorZoomOut = {
    cursor: 'zoom-out'
  };

  const zoom = (event) => {
    if (isZoomed === false) {
      setMouseLocation(`${event.clientX}px ${event.clientY}px`);
      setIsZoomed(!isZoomed);
      setCursorType(cursorZoomOut);
    } else {
      // console.log('zoom event listener firing on case where isZoomed= true');
      setIsZoomed(false);
      setMouseLocation('center');
      setCursorType(cursorCrossHair);
    }
  };

  // const pan = (event) => {
  //   const img = modalPhotoRef.current;
  //   let mouseIsDown = false;
  //   let topCoord;
  //   let leftCoord;
  //   img.addEventListener('mousedown', (event) => {
  //     mouseIsDown = true;
  //     setTimeout(() => {
  //       mouseMoveListener = img.addEventListener('mousemove', (event) => {
  //         // console.log(getComputedStyle(img))
  //         // topCoord = parseInt(getComputedStyle(img).top.replace('px', ''));
  //         // leftCoord = parseInt(getComputedStyle(img).left.replace('px', ''));
  //         // if (mouseIsDown) {
  //         //   img.style.top = `${topCoord + event.movementY}px`;
  //         //   img.style.left = `${leftCoord + event.movementX}px`;
  //         //   // console.log(img.style.top, img.style.left);
  //         // }
  //       });
  //     }, 50);
  //   });

  //   img.addEventListener('mouseup', (event) => {
  //     mouseIsDown = false;
  //     img.removeEventListener('mousemove', mouseMoveListener);
  //   });
  // };

  // const dragStart = (event) => {
  //   event.preventDefault();
  // };


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
            // ref={modalPhotoRef}
            data-testid="modal"
            src={displayedImage}
            isZoomed={isZoomed}
            mouseLocation={mouseLocation}
            style={cursorType}
            onClick={zoom}
            // onMouseDown={pan}
            // onDragStart={dragStart}
          />


        </ModalPop>
        <ModalOverlay>
        </ModalOverlay>
      </ExpandedImageDiv>
    </>
  );
};

export default ExpandedPhoto;




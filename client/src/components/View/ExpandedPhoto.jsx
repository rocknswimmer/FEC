import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import { FaCamera, FaAngleLeft, FaAngleRight, FaWindowClose, FaCircle, FaStar } from 'react-icons/fa';
import { ExpandedImageDiv, ExpandedView, ComponentBlock, LeftArrow, RightArrow, ModalPop, ModalPhoto, ModalOverlay, IconHolder, ExpandedPhotoControls } from './Styled/LargeImage.styled.jsx';


const ExpandedPhoto = ({ displayedImage, photoIndex, arrowRightHandler, expandPhoto, arrowLeftHandler, lengthOfImageArray, changePhotoToSelectedIcon, imageArray }) => {


  const [isZoomed, setIsZoomed] = useState(false);
  const [mouseLocation, setMouseLocation] = useState('');
  // zoom clickhandler


  const zoom = (event) => {
    // console.log(event);
    setMouseLocation(`${event.clientX}px ${event.clientY}px`);
    setIsZoomed(!isZoomed);
  };




  return (
    <>
      <ExpandedImageDiv >
        <ModalPop className="modal-pop" role="dialog" aria-modal="true" >

          <ExpandedPhotoControls>
            <FaAngleLeft className="expanded-photo-left" onClick={arrowLeftHandler} />
            <FaAngleRight className="expanded-photo-right" onClick={arrowRightHandler} />
            <FaWindowClose onClick={expandPhoto} className="close-out-expanded-view" />

            <IconHolder>
              {
                Array.from(Array(imageArray.length).keys()).map((num, index) => {
                  if (num === photoIndex) {
                    return <div key={index}><FaCamera className='icon-styled' /></div>;
                  } else {
                    return <div key={index} number={index} onClick={(e) => { changePhotoToSelectedIcon(index); }}><FaCircle style={{height: '20px'}} className='icon-styled' /></div>;

                  }
                })
              }
            </IconHolder>
          </ExpandedPhotoControls>

          <ModalPhoto src={displayedImage} mouseLocation={mouseLocation} isZoomed={isZoomed} onClick={zoom} />


        </ModalPop>
        <ModalOverlay></ModalOverlay>
      </ExpandedImageDiv>

    </>
  );
};

export default ExpandedPhoto;





//   return (
//     <div>
//       {visible && photo.clicked ?
//         <div className="modal">
//           <div className="modal-pop" role="dialog" aria-modal="true">
//             <button className="photo-modal-close" type="button" onClick={() => { toggle(); togglePhotoClicked(photo); }}>Close</button>
//             <img src={photo.url} className="modal-photo" ></img>
//           </div>
//           <div className="modal-overlay" ></div>
//         </div> : null}
//     </div>
//   );
// };

// export default PhotosModal;
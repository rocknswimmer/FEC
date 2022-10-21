import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import { FaAngleLeft, FaAngleRight, FaWindowClose } from 'react-icons/fa';
import { ExpandedImageDiv, ExpandedView, ComponentBlock, LeftArrow, RightArrow, ModalPop, ModalPhoto, ModalOverlay } from './Styled/LargeImage.styled.jsx';


const ExpandedPhoto = ({ displayedImage, photoIndex, arrowRightHandler, expandPhoto, arrowLeftHandler}) => {
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
          <FaAngleLeft className="expanded-photo-left" onClick={arrowLeftHandler} />

          <FaWindowClose onClick={expandPhoto} className="close-out-expanded-view"/>
          <ModalPhoto src={displayedImage} mouseLocation={mouseLocation} isZoomed={isZoomed} onClick={zoom} />

          <FaAngleRight className="expanded-photo-right" onClick={arrowRightHandler} />
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
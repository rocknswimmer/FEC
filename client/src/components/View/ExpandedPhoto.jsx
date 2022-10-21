import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import { FaAngleLeft, FaAngleRight, FaExpand } from 'react-icons/fa';
import { ExpandedImageDiv, ExpandedView, ComponentBlock, LeftArrow, RightArrow, ModalPop, ModalPhoto } from './Styled/LargeImage.styled.jsx';


const ExpandedPhoto = ({ displayedImage, photoIndex, arrowRightHandler }) => {


  return (
    <ExpandedImageDiv >
      <ModalPop img={displayedImage}>
        <ModalPhoto img={displayedImage}>
          <FaAngleRight onClick={arrowRightHandler} />
        </ModalPhoto>
      </ModalPop>
    </ExpandedImageDiv>
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
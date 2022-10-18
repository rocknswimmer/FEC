import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const PhotosModal = ({toggle, visible, photo, togglePhotoClicked}) => {

  return (
    <div>
      {console.log(photo)}
      {visible && photo.clicked ?
        <div className="modal">
          {/* <button className="photo-modal-close" type="button" onClick={() => {  }}>Close</button> */}
          <div className="modal-pop" role="dialog" aria-modal="true">

            <img src={photo.url} className="modal-photo" onClick={() => { toggle(); togglePhotoClicked(photo); }}></img>
            <br></br>
          </div>

          <div className="modal-overlay" ></div>
        </div> : null}
    </div>
  );
};

export default PhotosModal;
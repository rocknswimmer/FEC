import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const PhotosModal = ({toggle, visible, photo, togglePhotoClicked}) => {

  return (
    <div>
      {visible && photo.clicked ?
        <div className="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <button className="photo-modal-close" type="button" onClick={() => { toggle(); togglePhotoClicked(photo); }}>Close</button>
            <img src={photo.url} className="modal-photo" ></img>
          </div>
          <div className="modal-overlay" ></div>
        </div> : null}
    </div>
  );
};

export default PhotosModal;
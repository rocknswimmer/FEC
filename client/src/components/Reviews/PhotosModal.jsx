import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const PhotosModal = ({toggle, visible, photo, togglePhotoClicked}) => {

  return (
    <div>
      {console.log(photo)}
      {visible && photo.clicked ?
        <div className="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <img src={photo.url} className="modal-photo"></img>
            <br></br>
            <button type="button" onClick={() => { toggle(); togglePhotoClicked(photo); }}>Close</button>
          </div>
          <div className="modal-overlay" ></div>
        </div> : null}
    </div>
  );
};

export default PhotosModal;
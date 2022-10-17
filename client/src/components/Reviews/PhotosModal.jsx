import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const PhotosModal = ({toggle, visible, photo}) => {

  return (
    <div>
      {visible ?
        <div className="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <img src={photo}></img>
            <br></br>
            <button type="button" onClick={toggle}>Close</button>
          </div>
          <div className="modal-overlay" ></div>
        </div> : null}
    </div>
  );
};

export default PhotosModal;
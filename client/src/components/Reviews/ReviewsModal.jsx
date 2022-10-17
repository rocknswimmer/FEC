import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewsModal = (props) => {


  return (
    <div className="rev-modal-backdrop">
      <div className="rev-modal-container">
        <h3 className="rev-modal-title">I'm a modal!</h3>
        <p>
        When this modal is open, we disable scrolling the <code>body</code> using{' '}
          <code>overflow: hidden</code>. This allows users to scroll the modal
        without losing their position on the page.
        </p>
        <p>
        To close this modal, press the button below or use the Escape key on desktop.
        </p>
        <button type="button">
        Close this modal
        </button>
        <div className="placeholder" />
        <div className="placeholder" />
        <div className="placeholder medium" />
        <div className="placeholder" />
      </div>
    </div>
  );
};

export default ReviewsModal;
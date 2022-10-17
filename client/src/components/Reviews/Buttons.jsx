import React, { useState, useEffect } from 'react';
import ReviewsModal from './ReviewsModal.jsx';

const Buttons = (props) => {

  const [isModalOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      {/* <ReviewsModal /> */}
      <button className="rev-button">MORE REVIEWS</button>
      <button className="rev-button">ADD A REVIEW +</button>
    </div>
  );
};

export default Buttons;
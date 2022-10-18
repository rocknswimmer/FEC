import React, { useState, useEffect } from 'react';


const Buttons = ({handleMoreReviews}) => {

  const [isModalOpen, setModalIsOpen] = useState(false);

  return (
    <div>

      <button className="rev-button" onClick={() => { handleMoreReviews(); }}>MORE REVIEWS</button>
      <button className="rev-button">ADD A REVIEW +</button>
    </div>
  );
};

export default Buttons;
import React, { useState, useEffect } from 'react';


const Buttons = (props) => {

  const [isModalOpen, setModalIsOpen] = useState(false);

  return (
    <div>

      <button className="rev-button">MORE REVIEWS</button>
      <button className="rev-button">ADD A REVIEW +</button>
    </div>
  );
};

export default Buttons;
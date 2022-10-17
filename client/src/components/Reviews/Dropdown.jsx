import React, { useState, useEffect } from 'react';

const Dropdown = ({reviewsList}) => {

  return (
    <div>
      <div>{reviewsList.length} reviews, sorted by relevance</div>
    </div>
  );
};

export default Dropdown;
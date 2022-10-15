import React, { useState, useEffect } from 'react';

const Description = ({productInfo}) => {
  return (
    <div>
      <h3>{productInfo.slogan}</h3>
      <p>{productInfo.description}</p>
    </div>
  );
};

export default Description;
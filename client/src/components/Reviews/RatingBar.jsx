import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RatingBar = ({val, descr}) => {

  console.log(val);
  return (

    <div className="char-range">
      <div className="arrow-down" style={{marginLeft: (val * 56)}}></div>
      <div className="bar"></div>
      {descr[2] === 'Perfect' ?
        <div className="char-bar-descr">
          <div><small>{descr[0]}</small></div>
          <div><small>{descr[2]}</small></div>
          <div><small>{descr[4]}</small></div>
        </div> :
        <div className="char-bar-descr">
          <div><small>{descr[0]}</small></div>
          <div><small>{descr[4]}</small></div>
        </div>}
    </div>
  );
};

export default RatingBar;
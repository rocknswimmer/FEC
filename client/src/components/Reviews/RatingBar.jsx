import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RatingBar = ({val, descr}) => {

  return (

    <div data-testid="range-bar" className="char-range">
      <div data-testid="arrow" className="arrow-down" style={{marginLeft: (val * 56) - 8}}></div>
      {descr[2] === 'Perfect' ?
        <div>
          <div className="bar-container">
            <div className="bar" ></div>
            <div className="bar" style={{marginLeft: 2}}></div>
            <div className="bar" style={{marginLeft: 2}}></div>
          </div>

          <div className="char-bar-descr">
            <div><small>{descr[0]}</small></div>
            <div><small>{descr[2]}</small></div>
            <div><small>{descr[4]}</small></div>
          </div>
        </div> :
        <div>
          <div className="bar-container">
            <div className="bar" ></div>
            <div className="bar" style={{marginLeft: 2}}></div>
            <div className="bar" style={{marginLeft: 2}}></div>
            <div className="bar" style={{marginLeft: 2}}></div>
          </div>
          <div className="char-bar-descr">
            <div><small>{descr[0]}</small></div>
            <div><small>{descr[4]}</small></div>
          </div>

        </div>}
    </div>
  );
};

export default RatingBar;
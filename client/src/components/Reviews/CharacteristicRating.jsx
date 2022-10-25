import React, {useEffect, useState} from 'react';

const CharacteristicRating = ({char, setChar, name, descr, postableObj, charId}) => {

  postableObj[`${charId}`] = Number(char);

  return (
    <div>

      {char ? <div><small>{descr[char - 1]}</small></div>
        : <br/>}
      <div data-testid="modal" className="rev-modal-form" >
        <div data-testid="radio-box" className="radio-box">
          <input
            onClick={(e) => setChar(e.target.value)}
            type="radio"
            name={name}
            value="1"
            required/>
          <label><small>{descr[0]}</small></label>
        </div>
        <div className="radio-box">
          <input
            onClick={(e) => setChar(e.target.value)}
            type="radio"
            name={name}
            value="2"/>
          <label></label>
        </div>
        <div className="radio-box">
          <input
            onClick={(e) => setChar(e.target.value)}
            type="radio"
            name={name}
            value="3"/>
          <label></label>
        </div>
        <div className="radio-box">
          <input
            onClick={(e) => setChar(e.target.value)}
            type="radio"
            name={name}
            value="4"/>
          <label></label>
        </div>
        <div className="radio-box">
          <input
            onClick={(e) => setChar(e.target.value)}
            type="radio"
            name={name}
            value="5"/>
          <label><small>{descr[4]}</small></label>
        </div>
      </div>
    </div>
  );
};

export default CharacteristicRating;
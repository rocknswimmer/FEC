import React, {useEffect, useState} from 'react';

const CharacteristicRating = ({char, setChar, name, descr}) => {

  return (
    <div>

      {char ? <div><small>{descr[char - 1]}</small></div>
        : <br/>}
      <div className="rev-modal-form" >
        <div className="radio-box">
          <input
            onClick={(e) => setChar(e.target.value)}
            type="radio" name={name}
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
    // <div>
    //   <input
    //     type="radio"
    //     id={descr[0]}
    //     name={name}
    //     value={1}
    //   />
    //   <label for={descr[0]}>{descr[0]}</label>

  // </div>

  );
};

export default CharacteristicRating;
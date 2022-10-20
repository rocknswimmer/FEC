import React, {useEffect, useState} from 'react';
import CharacteristicRating from './CharacteristicRating.jsx';


const Characteristic = ({char, setChar, name, descr}) => {

  return (

    <div>
      <div>{name}:</div>
      <CharacteristicRating char={char} setChar={setChar} name={name} descr={descr}/>
    </div>

  );
};

export default Characteristic;
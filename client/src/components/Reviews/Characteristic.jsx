import React, {useEffect, useState} from 'react';
import CharacteristicRating from './CharacteristicRating.jsx';


const Characteristic = ({char, setChar, name, descr, postableObj, charId}) => {

  return (

    <div>
      <div>{name}:</div>
      <CharacteristicRating
        char={char}
        setChar={setChar}
        name={name}
        descr={descr}
        postableObj={postableObj}
        charId={charId}/>
    </div>

  );
};

export default Characteristic;
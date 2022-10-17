import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';

const QuestionEntry = (props) => {

  var yesCount = "(count to go here)";

  return (
    <div>
      <span>I'm a question Entry!</span>
      <span>Helpful? <a src="http://localhost:3001">Yes</a> {yesCount}</span>
      <span>|</span>
      <span><a>Add Answer</a></span>
      {[1, 2].map((answer, i) => {
        return <Answers key={i}/>;
      })}
    </div>
  );
};

export default QuestionEntry;
import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';

const QuestionEntry = (props) => {
  const answers = Object.keys(props.question.answers).map((key) => {
    return props.question.answers[key];
  });

  return (
    <div>
      <span>Q: {props.question.question_body}</span>
      <span>Helpful? <a>Yes</a> {`(${props.question.question_helpfulness})`}</span>
      <span>|</span>
      <span><a>Add Answer</a></span>
      {answers.map((answer, i) => {
        return <Answers key={i} answer={answer} />;
      })}
    </div>
  );
};

export default QuestionEntry;
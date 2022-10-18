import React, { useState, useEffect } from 'react';
import AnswerFeed from './AnswerFeed.jsx';

const QuestionEntry = (props) => {
  const answers = Object.keys(props.question.answers).map((key) => {
    return props.question.answers[key];
  });


  return (
    <div className="question-entry">
      <span>Q: {props.question.question_body}</span>
      <span>Helpful? <a>Yes</a> {`(${props.question.question_helpfulness})`}</span>
      <span>|</span>
      <span><a>Add Answer</a></span>
      <br/>
      <span>A: </span>
      <AnswerFeed answers={answers} />
    </div>
  );
};

export default QuestionEntry;
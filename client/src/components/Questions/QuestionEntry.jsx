import React, { useState, useEffect } from 'react';
import AnswerFeed from './AnswerFeed.jsx';

const QuestionEntry = (props) => {
  const answers = Object.keys(props.question.answers).map((key) => {
    // props.question.answers[key].answerId = key;
    return props.question.answers[key];
  });

  if (answers.length > 2) {
    var firstAnswers = answers.slice(0, 2);
  }

  const [loadMoreAnswers, setLoadMoreAnswers] = useState(false);

  const loadAnswers = () => {
    setLoadMoreAnswers(!loadMoreAnswers);
  };

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
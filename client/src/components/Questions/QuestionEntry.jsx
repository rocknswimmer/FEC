import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';

const QuestionEntry = (props) => {
  const answers = Object.keys(props.question.answers).map((key) => {
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
    <div>
      <span>Q: {props.question.question_body}</span>
      <span>Helpful? <a>Yes</a> {`(${props.question.question_helpfulness})`}</span>
      <span>|</span>
      <span><a>Add Answer</a></span>
      {answers.length > 2 && !loadMoreAnswers && firstAnswers.map((answer, i) => {
        return <Answers key={i} answer={answer} />;
      })}
      {answers.length > 2 && !loadMoreAnswers && <a onClick={loadAnswers}>Load More Answers</a>}
      {answers.length > 2 && loadMoreAnswers && answers.map((answer, i) => {
        return <Answers key={i} answer={answer} />;
      })}
      {answers.length > 2 && loadMoreAnswers && <a onClick={loadAnswers}>Collapse answers</a>}
      {answers.length <= 2 && answers.map((answer, i) => {
        return <Answers key={i} answer={answer} />;
      })}
    </div>
  );
};

export default QuestionEntry;
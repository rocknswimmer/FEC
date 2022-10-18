import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';

const AnswerFeed = (props) => {

  if (props.answers.length > 2) {
    var firstAnswers = props.answers.slice(0, 2);
  }

  const [loadMoreAnswers, setLoadMoreAnswers] = useState(false);

  const loadAnswers = () => {
    setLoadMoreAnswers(!loadMoreAnswers);
  };

  console.log(props.answers);


  return (
    <span>
      {props.answers.length > 2 && !loadMoreAnswers && firstAnswers.map((answer, i) => {
        return <Answers key={i} answer={answer} />;
      })}
      {props.answers.length > 2 && !loadMoreAnswers && <a onClick={loadAnswers}>Load More Answers</a>}
      {props.answers.length > 2 && loadMoreAnswers && props.answers.map((answer, i) => {
        return <Answers key={i} answer={answer} />;
      })}
      {props.answers.length > 2 && loadMoreAnswers && <a onClick={loadAnswers}>Collapse answers</a>}
      {props.answers.length <= 2 && props.answers.map((answer, i) => {
        return <Answers key={i} answer={answer} />;
      })}
    </span>
  );
};

export default AnswerFeed;
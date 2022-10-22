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

  return (
    <div >
      <div className='answer-tag'>
        <strong>A: </strong>
        {loadMoreAnswers && <a onClick={loadAnswers}>Collapse answers</a>}
      </div>
      <div className='answer-feed'>
        {props.answers.length > 2 && !loadMoreAnswers && firstAnswers.map((answer, i) => {
          return <Answers key={i} answer={answer} />;
        })}
        {props.answers.length > 2 && !loadMoreAnswers && <div className='answer-loader'><a onClick={loadAnswers}>Load More Answers</a></div>}
        {props.answers.length > 2 && loadMoreAnswers && props.answers.map((answer, i) => {
          return <Answers key={i} answer={answer} />;
        })}
        {props.answers.length > 2 && loadMoreAnswers && <div className='answer-loader'><a onClick={loadAnswers}>Collapse answers</a></div>}
        {props.answers.length <= 2 && props.answers.map((answer, i) => {
          return <Answers key={i} answer={answer} />;
        })}
      </div>
    </div>
  );
};

export default AnswerFeed;
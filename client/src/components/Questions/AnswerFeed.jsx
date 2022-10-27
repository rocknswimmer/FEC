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
      <div className='answer-container'>
        <div className='answer-tag'>
          <strong>A: </strong>
        </div>
        <div className='answer-feed'>
          {props.answers.length > 2 && !loadMoreAnswers && firstAnswers.map((answer, i) => {
            return <Answers key={i} answer={answer} interact={props.interact} />;
          })}
          {props.answers.length > 2 && loadMoreAnswers && props.answers.map((answer, i) => {
            return <Answers key={i} answer={answer} interact={props.interact} />;
          })}
          {props.answers.length <= 2 && props.answers.map((answer, i) => {
            return <Answers key={i} answer={answer} interact={props.interact} />;
          })}
        </div>
      </div>
      <div>
        {props.answers.length > 2 && !loadMoreAnswers && <div className='answer-loader'><a onClick={() => { loadAnswers(); props.interact('load more answers', 'Q&A'); }}>Load More Answers</a></div>}
        {props.answers.length > 2 && loadMoreAnswers && <div className='answer-loader'><a className='acollapse' onClick={() => { loadAnswers(); props.interact('collapse answers', 'Q&A'); }}>Collapse answers</a></div>}
      </div>
    </div>
  );
};

export default AnswerFeed;
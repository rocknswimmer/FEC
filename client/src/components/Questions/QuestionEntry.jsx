import React, { useState, useEffect } from 'react';
import AnswerFeed from './AnswerFeed.jsx';
import AnswerModal from './AnswerModal.jsx';
import axios from 'axios';

const QuestionEntry = (props) => {
  const [addAnswer, setAddAnswer] = useState(false);
  const [answerScrollable, setAnswerScrollable] = useState(true);
  const [clickedBefore, setClickedBefore] = useState(false);

  const answers = Object.keys(props.question.answers).map((key) => {
    return props.question.answers[key];
  });

  const yesClicked = () => {
    if (!clickedBefore) {
      setClickedBefore(!clickedBefore);
      //axios put request
      axios.put('/qa/questions/:question_id/helpful', {question: props.question.question_id})
        .then((res) => {
          console.log('successfully put question helpful');
          //maybe get req, but dont want to refresh page or allow to mark helpful again
        })
        .catch((err) => {
          console.log('error putting question helpful: ', err);
        });
    }
  };

  const addAnswerModal = () => {
    setAddAnswer(!addAnswer);
    setAnswerScrollable(!answerScrollable);
    answerScrollable ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
  };


  return (
    <div className="question-entry">
      <span>Q: {props.question.question_body}</span>
      <span>Helpful? {!clickedBefore && <a onClick={yesClicked}>Yes</a>}
        {!clickedBefore && `(${props.question.question_helpfulness})`}
        {clickedBefore && `(${props.question.question_helpfulness + 1})`}
      </span>
      <span>|</span>
      <span><a onClick={addAnswerModal}>Add Answer</a></span>
      <br/>
      <span>A: </span>
      <AnswerFeed answers={answers} search={props.searchQuery} searchable={props.searchable}/>
      {addAnswer && <AnswerModal question={props.question.question_id} close={addAnswerModal}/>}
    </div>
  );
};

export default QuestionEntry;
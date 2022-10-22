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
  }).sort((a, b) => {
    if (a.helpfulness > b.helpfulness) {
      return -1;
    }
    if (a.helpfulness < b.helpfulness) {
      return 1;
    }
    return 0;
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
      <div className='question-line'>
        <div>
          <span><strong>Q: {props.question.question_body}</strong></span>
        </div>
        <div>
          <span>Helpful?   {!clickedBefore && <a className='qyes' onClick={yesClicked}>  Yes </a>}
            {!clickedBefore && `(${props.question.question_helpfulness})`}
            {clickedBefore && `(${props.question.question_helpfulness + 1})`}
          </span>
          <span className='qspacer'> | </span>
          <span><a onClick={addAnswerModal}>  Add Answer</a></span>
        </div>
      </div>
      <AnswerFeed answers={answers} />
      {addAnswer && <AnswerModal question={props.question.question_id} get={props.get} close={addAnswerModal}/>}
    </div>
  );
};

export default QuestionEntry;
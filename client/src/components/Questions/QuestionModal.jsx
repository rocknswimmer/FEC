import React, { useState, useEffect } from 'react';

const QuestionModal = (props) => {
  const [question, setQuestion] = useState('');
  const [questionUser, setQuestionUser] = useState('');
  const [questionEmail, setQuestionEmail] = useState('');

  const onQ = (e) => {
    setQuestion(e.target.value);
  };

  const onQUser = (e) => {
    setQuestionUser(e.target.value);
  };

  const onQEmail = (e) => {
    setQuestionEmail(e.target.value);
  };

  const onSumbitQ = () => {
    console.log(`submiting question: ${question} email: ${questionEmail} user: ${questionUser}`);
  };


  return (
    <div className="modal">
      <div className="modal-pop">
        <button onClick={props.close}>x</button>
        <br />
        <lable for="question">Your Question*</lable>
        <input type="text" name="question" onChange={onQ} />
        <br />
        <lable for="username">What is your nickname*</lable>
        <input type="text" placeholder="Example: jackson11!" name="username" onChange={onQUser}/>
        <br />
        <lable for="email">Your email*</lable>
        <input type="text" placeholder="Why did you like the product or not?" name="email" onChange={onQEmail}/>
        <br />
        <button onClick={onSumbitQ}>Submit Question</button>
      </div>
      <div className="modal-overlay"></div>
    </div>
  );
};

export default QuestionModal;
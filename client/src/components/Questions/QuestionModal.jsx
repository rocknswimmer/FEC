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

    let alertQ = false;
    let alertQUser = false;
    let alertQEmail = false;

    if (question === '') {
      alertQ = true;
    }
    if (questionUser === '') {
      alertQUser = true;
    }
    if (questionEmail === '') {
      alertQEmail = true;
    }
    if (alertQ || alertQUser || alertQEmail) {
      let alertString = [{field: question, lable: 'Your Question'}, {field: questionUser, lable: 'Your nickname'}, {field: questionEmail, lable: 'Your Email'}].map((form) => {
        if (form.field === '') {
          return form.lable;
        }
        return false;
      }).filter((empty) => { if (empty !== false) { return true; } }).join('\n');
      alert(`You must enter the following: \n ${alertString}`);
      return;
    }
    if (questionEmail.indexOf('@') === -1 || questionEmail.slice(questionEmail.indexOf('@')).indexOf('.') === -1) {
      alert('email missing @ or . after @, please reformatting to be able to submit');
      return;
    }

    console.log('running rest of function after alert');

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
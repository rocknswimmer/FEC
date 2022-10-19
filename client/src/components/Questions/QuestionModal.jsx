import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const submitQuestion = () => {
    axios.post('/qa/questions/', {
      body: question,
      name: questionUser,
      email: questionEmail,
      // eslint-disable-next-line camelcase
      product_id: props.product
    })
      .then((res) => {
        // console.log('response posting question to server', res.data);
        props.close();
      })
      .catch((err) => {
        console.log('error posting question:', err );
      });
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
      let alertString = [{field: question, label: 'Your Question'}, {field: questionUser, label: 'Your nickname'}, {field: questionEmail, label: 'Your Email'}].map((form) => {
        if (form.field === '') {
          return form.label;
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

    submitQuestion();

  };


  return (
    <div className="modal">
      <div className="modal-pop">
        <button onClick={props.close}>x</button>
        <br />
        <label >Your Question*</label>
        <input type="text" name="question" onChange={onQ} />
        <br />
        <label >What is your nickname*</label>
        <input type="text" placeholder="Example: jackson11!" name="username" onChange={onQUser}/>
        <br />
        <label >Your email*</label>
        <input type="text" placeholder="Why did you like the product or not?" name="email" onChange={onQEmail}/>
        <br />
        <button onClick={onSumbitQ}>Submit Question</button>
      </div>
      <div className="modal-overlay"></div>
    </div>
  );
};

export default QuestionModal;
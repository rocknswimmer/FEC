import React, { useState, useEffect } from 'react';

const QuestionModal = (props) => {
  return (
    <div className="modal">
      <div className="modal-pop">
        <button onClick={props.close}>x</button>
        <br />
        <lable for="question">Your Question*</lable>
        <input type="text" name="question" />
        <br />
        <lable for="username">What is your nickname*</lable>
        <input type="text" placeholder="Example: jackson11!" name="username" />
        <br />
        <lable for="email">Your email*</lable>
        <input type="text" placeholder="Why did you like the product or not?" name="email" />
        <br />
        <button>Submit Question</button>
      </div>
      <div className="modal-overlay"></div>
    </div>
  );
};

export default QuestionModal;
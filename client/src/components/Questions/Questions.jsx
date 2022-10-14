import React, { useState, useEffect } from 'react';
import QuestionFeed from './QuestionFeed.jsx';

const Questions = (props) => {

  return (
    <div>
      <div>Q&A Widget to go here!</div>
      <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS... and figure out how to have magnifine glass at end" />
      <QuestionFeed />
      <button>MORE ANSWERED QUESTIONS</button>
      <button>ADD A QUESTION +</button>
    </div>
  );
};

export default Questions;
import React, { useState, useEffect } from 'react';
import QuestionFeed from './QuestionFeed.jsx';

const Questions = (props) => {

  return (
    <div>
      <div>Q&A Widget to go here!</div>
      <form class="question-search-form">
        <input class="questions-search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <button class="question-search-button" type="submit">
          <img src="search.png"/>
        </button>
      </form>
      <QuestionFeed />
      <button>MORE ANSWERED QUESTIONS</button>
      <button>ADD A QUESTION +</button>
    </div>
  );
};

export default Questions;
import React, { useState, useEffect } from 'react';
import QuestionFeed from './QuestionFeed.jsx';
import axios from 'axios';

const Questions = (props) => {

  const getCurrentQuestions = () => {
    axios.get('/qa/questions/', {
      params: {
        'id': props.productId
      }
    })
      .then(results => {
        console.log('questions: ', results.data.results);
      })
      .catch(err => {
        console.log('There is an error getting questions from server ', err);
      });
  };

  const getCurrentAnswers = () => {
    axios.get('/qa/questions/:question_id/answers', {
      params: {
        'id': props.productId
      }
    })
      .then(results => {
        console.log('questions: ', results.data.results);
      })
      .catch(err => {
        console.log('There is an error getting questions from server ', err);
      });
  };

  useEffect(() => {
    getCurrentQuestions();
  }, []);

  return (
    <div>
      <div>Q&A Widget to go here!</div>
      <form className="question-search-form">
        <input className="questions-search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <button className="question-search-button" type="submit">
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
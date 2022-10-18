import React, { useState, useEffect } from 'react';
import QuestionFeed from './QuestionFeed.jsx';
import axios from 'axios';
import {FaSearch} from 'react-icons/fa';

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [moreQuestions, setMoreQuestions] = useState(false);

  const getCurrentQuestions = () => {
    axios.get('/qa/questions/', {
      params: {
        'id': props.productId
      }
    })
      .then(results => {
        // console.log('questions: ', results.data.results);
        setQuestions(results.data.results);
      })
      .catch(err => {
        console.log('There is an error getting questions from server ', err);
      });
  };

  useEffect(() => {
    getCurrentQuestions();
  }, []);

  const loadMoreQuestions = () => {
    setMoreQuestions(!moreQuestions);
  };

  return (
    <div id="questions">
      <div>QUESTIONS & ANSWERS</div>
      <form className="question-search-form">
        <input className="questions-search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <button className="question-search-button" type="submit">
          <FaSearch />
        </button>
      </form>
      <QuestionFeed questions={questions} moreQuestions={moreQuestions} />
      {(questions[0] && questions.length > 2) && !moreQuestions && <button onClick={loadMoreQuestions}>MORE ANSWERED QUESTIONS</button>}
      {(questions[0] && questions.length > 2) && moreQuestions && <button onClick={loadMoreQuestions}>LESS ANSWERED QUESTIONS</button>}
      <button>ADD A QUESTION +</button>
    </div>
  );
};

export default Questions;
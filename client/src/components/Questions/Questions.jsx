import React, { useState, useEffect } from 'react';
import QuestionFeed from './QuestionFeed.jsx';
import QuestionModal from './QuestionModal.jsx';
import axios from 'axios';
import {FaSearch} from 'react-icons/fa';

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [moreQuestions, setMoreQuestions] = useState(false);
  const [addQuestion, setAddQuestion] = useState(false);
  const [scrollable, setScrollable] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchable, setSearchable] = useState(false);
  const [searchedQuestions, setSearchedQuestions] = useState([]);

  const getCurrentQuestions = () => {
    console.log('button pushed or initial load');
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

  const addQuestionModal = () => {
    setAddQuestion(!addQuestion);
    setScrollable(!scrollable);
    scrollable ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
  };

  const searchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchedQuestionsMaker = () => {
    let searchedHolder = [];
    let questionDenied = [];


    questions.forEach((q) => {
      if (q.question_body.toUpperCase().includes(searchQuery.toUpperCase())) {
        searchedHolder.push(q);
      } else {
        questionDenied.push(q);
      }
    });

    questionDenied.forEach((quest) => {
      let questAns = {};
      Object.keys(quest.answers).forEach((anKey) => {
        if (quest.answers[anKey].body.toUpperCase().includes(searchQuery.toUpperCase())) {
          questAns[anKey] = quest.answers[anKey];
        }
      });

      if (Object.keys(questAns).length > 0) {
        let qWithSearchedAns = {
          'question_id': quest.question_id,
          'question_body': quest.question_body,
          'question_date': quest.question_date,
          'asker_name': quest.asker_name,
          'question_helpfulness': quest.question_helpfulness,
          'reported': quest.reported,
          'answers': questAns// all that work to change the answer property
        };
        searchedHolder.push(qWithSearchedAns);
      }
    });

    setSearchedQuestions(searchedHolder);
  };

  useEffect(() => {
    if (searchQuery.length !== 2) {
      if (searchQuery.length === 3 && !searchable) {
        setSearchable(!searchable);
      }
      searchedQuestionsMaker();
    } else {
      setSearchable(!searchable);
    }
    //turn search filter off when searchQuery.length === 2 ?/ how to turn on
  }, [((searchQuery.length > 2) && (searchQuery))]);

  return (
    <div id="questions">
      <div>QUESTIONS & ANSWERS</div>
      <form className="question-search-form">
        <input className="questions-search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={searchChange} />
        <button className="question-search-button" type="submit">
          <FaSearch />
        </button>
      </form>
      <div className='question-feed'>
        <QuestionFeed questions={questions} moreQuestions={moreQuestions} get={() => { getCurrentQuestions(); }} searchable={searchable} searchedQuestions={searchedQuestions} />
      </div>
      {(questions[0] && questions.length > 2) && !moreQuestions && <button onClick={loadMoreQuestions}>MORE ANSWERED QUESTIONS</button>}
      {(questions[0] && questions.length > 2) && moreQuestions && <button onClick={loadMoreQuestions}>LESS ANSWERED QUESTIONS</button>}
      <button onClick={addQuestionModal}>ADD A QUESTION +</button>
      {addQuestion && <QuestionModal close={addQuestionModal} product={props.productId}/>}
    </div>
  );
};

export default Questions;
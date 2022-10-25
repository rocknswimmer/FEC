import React, { useState, useEffect } from 'react';
import QuestionFeed from './QuestionFeed.jsx';
import QuestionModal from './QuestionModal.jsx';
import axios from 'axios';
import {FaSearch} from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.button`
  background: inherit;
  color: grey;
  font-size: .75em;
  margin: 10px 10px  0 0;
  padding: 0.5em 1em;
  border: 2px solid grey;
  border-radius: 3px;
`;

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [moreQuestions, setMoreQuestions] = useState(false);
  const [addQuestion, setAddQuestion] = useState(false);
  const [scrollable, setScrollable] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchable, setSearchable] = useState(false);
  const [searchedQuestions, setSearchedQuestions] = useState([]);

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
      <h1 className='qa-title'>QUESTIONS & ANSWERS</h1>
      <form className="question-search-form">
        <input className="questions-search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={searchChange} />
        <button className="question-search-button" type="submit">
          <FaSearch />
        </button>
      </form>
      <div className='question-feed'>
        <QuestionFeed questions={questions} moreQuestions={moreQuestions} get={() => { getCurrentQuestions(); }} searchable={searchable} searchedQuestions={searchedQuestions} currentProduct={props.currentProduct} />
      </div>
      <div className='question-buttons'>
        {(questions[0] && questions.length > 2) && !moreQuestions && <Button onClick={() => { loadMoreQuestions(); props.interact('more questions button', 'Q&A'); }}>MORE ANSWERED QUESTIONS</Button>}
        {(questions[0] && questions.length > 2) && moreQuestions && <Button onClick={loadMoreQuestions}>LESS ANSWERED QUESTIONS</Button>}
        <Button onClick={addQuestionModal}>ADD A QUESTION +</Button>
        {addQuestion && <QuestionModal close={addQuestionModal} product={props.productId} currentProduct={props.currentProduct} />}
      </div>
    </div>
  );
};

export default Questions;


/*
add to all on clicks annoyingly
const clickTracker = (element, widget) => {
  post request to interactions api post url
  make sure every click passes the widget and element names as strings
  generate date in the function before adding to post request
}
*/
import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionFeed = (props) => {
  const [searchedAnswers, setSearchedAnswers] = useState([]);
  const [searchedQuestions, setSearchedQuestions] = useState([]);

  const getFirstQuestions = () => {
    let results = [];
    for (let i = 0; i < 2; i++) {
      if (props.questions[i] !== undefined) {
        results[i] = props.questions[i];
      }
    }
    return results;
  };

  const firstQuestions = getFirstQuestions();

  const searchedQuestionsMaker = () => {

  };


  return (
    <div>
      {!props.searchable && props.moreQuestions && props.questions.map((question, i) => {
        return <QuestionEntry key={i} question={question} search={props.searchQuery} searchable={props.searchable} />;
      })}
      {!props.searchable && !props.moreQuestions && firstQuestions.map((question, i) => {
        return <QuestionEntry key={i} question={question} search={props.searchQuery} searchable={props.searchable} />;
      })}
      {!props.searchable && props.questions.length === 0 && <p><strong>NO ANSWERED QUESTIONS FOUND</strong></p>}
      {/* searchable */}
      {props.searchable && searchedQuestions.length === 0 && <p> <em>no search results found</em></p>}
      {props.searchable && searchedQuestions.length > 0 && searchedQuestions.map((question, i) => {
        return <QuestionEntry key={i} question={question} search={props.searchQuery} searchable={props.searchable} />;
      })}
    </div>
  );
};

export default QuestionFeed;
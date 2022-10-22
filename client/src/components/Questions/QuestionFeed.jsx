import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionFeed = (props) => {

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


  return (
    <div>
      {!props.searchable && props.moreQuestions && props.questions.map((question, i) => {
        return <QuestionEntry key={i} question={question} get={props.get} searchable={props.searchable} />;
      })}
      {!props.searchable && !props.moreQuestions && firstQuestions.map((question, i) => {
        return <QuestionEntry key={i} question={question} get={props.get} searchable={props.searchable} />;
      })}
      {!props.searchable && props.questions.length === 0 && <p><strong>NO ANSWERED QUESTIONS FOUND</strong></p>}
      {/* searchable */}
      {props.searchable && props.searchedQuestions.length === 0 && <p> <em>no search results found</em></p>}
      {props.searchable && props.searchedQuestions.length > 0 && props.searchedQuestions.map((question, i) => {
        return <QuestionEntry key={i} question={question} get={props.get} />;
      })}
    </div>
  );
};

export default QuestionFeed;
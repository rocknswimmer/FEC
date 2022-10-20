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
      {props.moreQuestions && props.questions.map((question, i) => {
        return <QuestionEntry key={i} question={question} search={props.searchQuery} searchable={props.searchable} />;
      })}
      {!props.moreQuestions && firstQuestions.map((question, i) => {
        return <QuestionEntry key={i} question={question} search={props.searchQuery} searchable={props.searchable} />;
      })}
    </div>
  );
};

export default QuestionFeed;
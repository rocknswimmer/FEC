import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionFeed = (props) => {

  return (
    <div>
      {props.questions.map((question, i) => {
        return <QuestionEntry key={i} question={question} />;
      })}
    </div>
  );
};

export default QuestionFeed;
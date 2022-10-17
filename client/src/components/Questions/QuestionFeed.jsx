import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionFeed = (props) => {

  return (
    <div>
      <div>Questions Displayed below</div>
      {props.questions.map((question, i) => {
        if (i === 0) {
          console.log('first question', question);
          console.log('first answers', Object.keys(question.answers));
        }
        return <QuestionEntry key={i} question={question} />;
      })}
      <a>Load More Answers</a>
    </div>
  );
};

export default QuestionFeed;
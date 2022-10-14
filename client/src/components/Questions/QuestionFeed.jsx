import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionFeed = (props) => {

  return (
    <div>
      <div>Questions Displayed below</div>
      {[1, 1, 1].map(() => {
        return <QuestionEntry />;
      })}
      <a>Load More Answers</a>
    </div>
  );
};

export default QuestionFeed;
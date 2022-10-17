import React, { useState, useEffect } from 'react';


const Answers = (props) => {

  const helpCount = 'count';

  return (
    <div>
      <div>A: {props.answer.body}</div>
      <span>by {props.answer.answerer_name}, {props.answer.date}</span>
      <span> | </span>
      <span>Helpful? <a>Yes</a> {`(${props.answer.helpfulness})`} </span>
      <span> | </span>
      <span><a>Report</a></span>
    </div>
  );
};

export default Answers;
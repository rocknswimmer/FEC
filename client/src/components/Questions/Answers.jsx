import React, { useState, useEffect } from 'react';
import formattedDate from '../../HelperFunctions/formattedDate.js';


const Answers = (props) => {

  return (
    <div>
      <div>A: {props.answer.body}</div>
      <span>by {props.answer.answerer_name}, {formattedDate(props.answer.date)}</span>
      <span> | </span>
      <span>Helpful? <a>Yes</a> {`(${props.answer.helpfulness})`} </span>
      <span> | </span>
      <span><a>Report</a></span>
    </div>
  );
};

export default Answers;
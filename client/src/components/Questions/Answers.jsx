import React, { useState, useEffect } from 'react';
import formattedDate from '../../HelperFunctions/formattedDate.js';
import axios from 'axios';


const Answers = (props) => {
  const [clickedYesBefore, setClickedYesBefore] = useState(false);
  const [clickedReportBefore, setClickedReportBefore] = useState(false);

  const helpfulClicked = () => {
    if (!clickedYesBefore) {
      setClickedYesBefore(!clickedYesBefore);
      //axios put request
    }
  };

  const reportClicked = () => {
    if (!clickedReportBefore) {
      setClickedReportBefore(!clickedReportBefore);
      //axios put request
    }
  };

  return (
    <span className="answer" data-testid="answer">
      <span>{props.answer.body}</span>
      <br/>
      <span>by {props.answer.answerer_name}, {formattedDate(props.answer.date)}</span>
      <span> | </span>
      <span>Helpful? {!clickedYesBefore && <a onClick={helpfulClicked}>Yes</a>}
        {!clickedYesBefore && `(${props.answer.helpfulness})`}
        {clickedYesBefore && `(${props.answer.helpfulness + 1})`}
      </span>
      <span> | </span>
      <span>{!clickedReportBefore && <a onClick={reportClicked}>Report</a>}{clickedReportBefore && <span>Reported</span>}</span>
      <br/>
    </span>
  );
};

export default Answers;
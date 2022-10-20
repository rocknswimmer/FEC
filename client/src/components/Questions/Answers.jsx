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
      axios.put('/qa/answers/:answer_id/helpful', {answer: props.answer.id})
        .then((res) => {
          console.log('successfully put answer helpful', res);
          //maybe get req, but dont want to refresh page or allow to mark helpful again
        })
        .catch((err) => {
          console.log('error putting answer helpful: ', err);
        });
    }
  };

  const reportClicked = () => {
    if (!clickedReportBefore) {
      setClickedReportBefore(!clickedReportBefore);
      //axios put request
      axios.put('/qa/answers/:answer_id/report', {answer: props.answer.id})
        .then((res) => {
          console.log('successfully reported answer', res);
          //maybe get req, but dont want to refresh page or allow to mark helpful again
        })
        .catch((err) => {
          console.log('error putting answer helpful: ', err);
        });
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
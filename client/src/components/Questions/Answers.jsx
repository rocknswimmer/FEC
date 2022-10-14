import React, { useState, useEffect } from 'react';


const Answers = (props) => {

  const helpCount = 'count';

  return (
    <div>
      <div>Answers Here</div>
      <span>username and timestamp</span>
      <span>|</span>
      <span>Helpful? <a>Yes</a> {helpCount} </span>
      <span>|</span>
      <span><a>Report</a></span>
    </div>
  );
};

export default Answers;
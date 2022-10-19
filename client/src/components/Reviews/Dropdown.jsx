import React, { useState, useEffect } from 'react';


const Dropdown = ({reviewsList, getReviews}) => {

  const [currentSelection, setCurrentSelection] = useState('relevance');


  return (
    <div>
      <div>{reviewsList.length} reviews, sorted by
        <form className="rev-sort-form">
          {/* <label for="sort" className="rev-sort-label">relevance</label> */}
          <select onChange={(e)=>{ getReviews(null, e.target.value); }} className="rev-form-select" value="relevant" name={currentSelection}>
            {/* <option></option> */}
            <option value="relevant">relevance</option>
            <option onClick={() => setCurrentSelection('helpfulness')}value="helpful">helpfulness</option>
            <option value="newest">newest</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Dropdown;
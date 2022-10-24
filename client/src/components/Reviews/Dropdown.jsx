import React, { useState, useEffect } from 'react';


const Dropdown = ({reviewsList, getReviews, currentSort}) => {

  const [sortSelection, setSortSelection] = useState('');
  return (
    <div>
      <div>{reviewsList.length} reviews, sorted by
        <form className="rev-sort-form">
          <select onChange={(e)=>{ getReviews(null, e.target.value); }} className="rev-form-select" name={`${currentSort}`}>
            <option value="relevant">relevance</option>
            <option value="helpful">helpfulness</option>
            <option value="newest">newest</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Dropdown;
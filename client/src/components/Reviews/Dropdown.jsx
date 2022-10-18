import React, { useState, useEffect } from 'react';



const Dropdown = ({reviewsList}) => {
  return (
    <div>
      <div>{reviewsList.length} reviews, sorted by
        <form className="rev-sort-form">
          {/* <label for="sort" className="rev-sort-label">relevance</label> */}
          <select className="rev-form-select" name="relevance">
            {/* <option></option> */}
            <option value="relevant">Relevance</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Dropdown;
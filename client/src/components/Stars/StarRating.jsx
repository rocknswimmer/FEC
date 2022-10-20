import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
{/* <FontAwesomeIcon icon="fa-duotone fa-star-half" />; */}


const StarRating = (props) => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [displayRec, setDisplayRec] = useState(null);
  const ratingsOutcome = ['Poor', 'Fair', 'Average', 'Good', 'Great'];


  const hoverDisplay = (val) => {
    setHover(val);
    setDisplayRec(val);
  };


  if (props.rating) {
    return (
      <div className="stars-container">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <FaStar
              className="star"
              color={ratingValue <= props.rating ? '#ffc107' : 'grey'}
              size={15}
              key={i}/>
          );
        })}
      </div>
    );
  } else {

    return (
      <div className="stars-container">
        {displayRec ?
          <div><small>{ratingsOutcome[displayRec - 1]}</small></div>
          : <br/>}
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => { setRating(ratingValue); props.selectStars(ratingValue); }}
              />
              <FaStar
                className="star"
                color={ratingValue <= ( hover || rating) ? '#ffc107' : 'grey'}
                size={15}
                onMouseEnter={() => hoverDisplay(ratingValue)}
                onMouseLeave={() => { setHover(null); setDisplayRec(rating); }}
                key={i}/>
            </label>
          );
        })}
      </div>
    );
  }
};

export default StarRating;
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';



const StarRating = (props) => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [displayRec, setDisplayRec] = useState(null);
  const ratingsOutcome = ['Poor', 'Fair', 'Average', 'Good', 'Great'];


  const hoverDisplay = (val) => {
    setHover(val);
    setDisplayRec(val);
  };

  let value = Math.ceil(props.rating);

  let countDown = props.rating;

  if (props.rating) {
    return (
      <div className="stars-container">
        <svg className="linear-gradient-template">
          <linearGradient id="fifty" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" style={{'stopColor': 'rgb(255, 193, 7)'}}></stop>
            <stop offset="50%" style={{'stopColor': 'rgb(228, 229, 233)'}}></stop>
          </linearGradient>
          <linearGradient id="seventy-five" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="67%" style={{'stopColor': 'rgb(255, 193, 7)'}}></stop>
            <stop offset="67%" style={{'stopColor': 'rgb(228, 229, 233)'}}></stop>
          </linearGradient>
          <linearGradient id="twenty-five" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="32%" style={{'stopColor': 'rgb(255, 193, 7)'}}></stop>
            <stop offset="32%" style={{'stopColor': 'rgb(228, 229, 233)'}}></stop>
          </linearGradient>
          <linearGradient id="one-hundred" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="100%" style={{'stopColor': 'rgb(255, 193, 7)'}}></stop>
            <stop offset="100%" style={{'stopColor': 'rgb(228, 229, 233)'}}></stop>
          </linearGradient>
          <linearGradient id="zero" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{'stopColor': 'rgb(255, 193, 7)'}}></stop>
            <stop offset="0%" style={{'stopColor': 'rgb(228, 229, 233)'}}></stop>
          </linearGradient>
        </svg>


        {[...Array(5)].map((star, i) => {
          const ratingValue = i;
          if (countDown - ratingValue >= .875) {
            return (
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{'color': 'rgb(255, 193, 7)'}}>
                <path style={{'fill': 'url(#one-hundred)'}} d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>

            // <FaStar
            //   className="star"
            //   border="1px solid black"
            //   color={ratingValue <= value ? '#ffc107' : 'grey'}
            //   size={15}
            //   key={i}/>
            );
          } else if (countDown - ratingValue <= .124) {
            return (
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{'color': 'rgb(255, 193, 7)'}}>
                <path style={{'fill': 'url(#zero)'}} d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            );
          } else if (countDown - ratingValue >= .125 && countDown - ratingValue <= .375) {
            return (
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{'color': 'rgb(255, 193, 7)'}}>
                <path style={{'fill': 'url(#twenty-five)'}} d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            );
          } else if (countDown - ratingValue >= .376 && countDown - ratingValue <= .625) {
            return (
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{'color': 'rgb(255, 193, 7)'}}>
                <path style={{'fill': 'url(#fifty)'}} d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            );
          } else {
            return (
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="one,star" color="#ffc107" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{'color': 'rgb(255, 193, 7)'}}>
                <path style={{'fill': 'url(#seventy-five)'}} d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            );
          }


          console.log('RatngValue', ratingValue);
          console.log('countDowm', countDown);
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
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                required
                onClick={() => { setRating(ratingValue); props.selectStars(ratingValue); }}
              />
              <FaStar
                icon="fa-duotone fa-star-half"
                className="star"
                color={ratingValue <= ( hover || rating) ? 'rgb(255, 193, 7)' : 'rgb(228, 229, 233)'}
                size={20}
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
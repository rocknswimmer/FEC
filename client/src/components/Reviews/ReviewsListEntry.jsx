import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotosModal from './PhotosModal.jsx';
import formattedDate from '../../HelperFunctions/formattedDate.js';
import {FaCheckCircle} from 'react-icons/fa';
import StarRating from '../Stars/StarRating.jsx';

const ReviewEntry = styled.div`
border-bottom: solid grey 1px;
padding: 20px;
display: flex-column;
align-items: space-between;
height: auto;
`;

const ReviewTitle = styled.div`
  font-weight: bold;
  padding: 15px 0 15px 0;
`;

const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  padding: 15px 0 15px 0;
`;

const Button = styled.button`
background: white;
color: grey;
font-size: .75em;
margin: 15px 0 15px 0;
padding: 0.25em 1em;
border: 2px solid grey;
border-radius: 3px;
`;


const ReviewsListEntry = ({review}) => {

  const [over250, setOver250] = useState(review.body.length > 50);
  const [showModal, setShowModal] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);
  const [photoClicked, setPhotoClicked] = useState(true);


  const togglePhotoClicked = (photo) => {
    photo.clicked = photoClicked;
    setPhotoClicked(!photoClicked);
  };


  const toggleShowMore = () => {
    setOver250(!over250);

  };

  const togglePhoto = (img) => {
    setShowModal(!showModal);
    setIsScrollable(!isScrollable);
    isScrollable ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
  };

  let starTest = (int) => {
    let rating = '';
    for (let i = 0; i < int; i++) {
      rating += '*';
    }
    return rating;
  };

  return (
    <ReviewEntry>
      <div className="rev-star-date">
        <StarRating rating={review.rating}/>
        <small><div>{review.reviewer_name}, {formattedDate(review.date)}</div></small>
      </div>
      {review.summary.length > 60 ?
        <>
          <ReviewTitle>{review.summary.substring(0, 60)}...</ReviewTitle>
          <div>...{review.summary.substring(60, review.summary.length)}</div>
        </> : <ReviewTitle>{review.summary}</ReviewTitle>}
      <div>
        {over250 ?
          <div>
            {review.body.substring(0, 50)}... <div>
              <Button onClick={() => (toggleShowMore())}>Show More</Button>
            </div>
          </div> : review.body}
      </div>
      <div>
        {review.photos.length > 0 ?
          <div className="thumbnails-container">
            {review.photos.map((photo, i) => (
              <div className="thumbnail">
                <Thumbnail src={photo.url} onClick={() => { togglePhoto(photo.url); togglePhotoClicked(photo); }} key={i} ></Thumbnail>
                {showModal ? <PhotosModal key={i + 1000} toggle={togglePhoto} visible={showModal} photo={photo} togglePhotoClicked={togglePhotoClicked}/> : null}
              </div>
            ))}
          </div>
          : null}
      </div>
      <div>
        {review.recommend ?
          <div className="rev-rec"><FaCheckCircle style={{color: 'red'}}/> I recommend this product</div> : null}
      </div>
      <div>
        {review.response ?
          <div>
            <h3>Response:</h3>
            <div>{review.response}</div>
          </div>
          : null}
      </div>
      {/* <input type="range"></input> */}
      <small><span>Was this review helpful? <a>Yes</a> {`(${review.helpfulness})`} | <a>No</a> (0) </span></small>
    </ReviewEntry>
  );
};

export default ReviewsListEntry;
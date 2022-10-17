import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotosModal from './PhotosModal.jsx';

const ReviewEntry = styled.div`
border-bottom: solid grey 1px;
padding: 30px;
display: flex-column;
align-items: space-between;
`;

const ReviewTitle = styled.div`
  font-weight: bold;
`;

const Thumbnail = styled.img `
  width: 40px;
  height: 40px;
`;


const ReviewsListEntry = ({review}) => {

  const [over250, setOver250] = useState(review.body.length > 50);
  const [showModal, setShowModal] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);
  const [photoClicked, setPhotoClicked] = useState(true);


  const togglePhotoClicked = (photo) => {
    setPhotoClicked(!photoClicked);
    photo.clicked = photoClicked;
    console.log(photo.clicked);
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
        <div>{starTest(review.rating)}</div>
        <small><div>{review.reviewer_name}, {review.date}</div></small>
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
              <button onClick={() => (toggleShowMore())}>Show More</button>
            </div>
          </div> : review.body}
      </div>
      {/* <div>PUT RECOMMENDED HERE</div> */}
      <div>
        {review.photos.length > 0 ?
          <div>
            {review.photos.map((photo, i) => (
              <div>

                <Thumbnail src={photo.url} onClick={() => { togglePhoto(photo.url); togglePhotoClicked(photo); }} key={i} ></Thumbnail>
                {showModal ? <PhotosModal toggle={togglePhoto} visible={showModal} photo={photo} togglePhotoClicked={togglePhotoClicked}/> : null}
              </div>
            ))}
          </div>
          : null}
      </div>
      <div>

      </div>
    </ReviewEntry>
  );
};

export default ReviewsListEntry;
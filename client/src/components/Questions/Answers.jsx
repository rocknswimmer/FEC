import React, { useState, useEffect } from 'react';
import formattedDate from '../../HelperFunctions/formattedDate.js';
import axios from 'axios';
import styled from 'styled-components';
import PhotosModal from '../Reviews/PhotosModal.jsx';

const QAThumbnail = styled.img`
  width: 40px;
  height: 40px;
  padding: 15px 0 15px 0;
`;


const Answers = (props) => {
  const formattedPhotosList = () => {
    return (props.answer.photos.map((pho) => {
      return { url: pho, clicked: false };
    }));
  };

  const [clickedYesBefore, setClickedYesBefore] = useState(false);
  const [clickedReportBefore, setClickedReportBefore] = useState(false);
  const [showPhoModal, setShowPhoModal] = useState(false);
  const [AnsPhotoClicked, setAnsPhotoClicked] = useState(true);
  const [formattedPhotos, setFormattedPhotos] = useState(formattedPhotosList());




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

  const toggleAnsPhoto = () => {
    setShowPhoModal(!showPhoModal);
  };

  const toggleAnsPhotoClicked = (ansPho) => {
    console.log(ansPho);
    ansPho.clicked = AnsPhotoClicked;
    console.log(ansPho);
    setAnsPhotoClicked(!AnsPhotoClicked);
  };

  return (
    <span className="answer" data-testid="answer">
      <span>{props.answer.body}</span>
      <br/>
      {/* {formattedPhotos.map((photo, i) => (
        <div className="thumbnail">
          <QAThumbnail src={photo.photoURL} onClick={() => { toggleAnsPhoto(); toggleAnsPhotoClicked(photo); }} key={i} />
          {showPhoModal && <AnsPhotosModal key={i + 1000} toggle={() =>{ toggleAnsPhoto(); }} visible={showPhoModal} photo={photo} toggleAnsPhotoClicked={(p) => { toggleAnsPhotoClicked(p); }} />}
        </div>
      ))} */}
      {props.answer.photos.length > 0 && <div>
        {formattedPhotos.map((photo, i) => (
          <div className="thumbnail" key={i}>
            <QAThumbnail src={photo.url} onClick={() => { toggleAnsPhoto(); toggleAnsPhotoClicked(photo); }} />
            {showPhoModal ? <PhotosModal toggle={toggleAnsPhoto} visible={showPhoModal} photo={photo} togglePhotoClicked={toggleAnsPhotoClicked} /> : null}
          </div>
        ))}
      </div>}
      {props.answer.photos.length > 0 && <br/>}
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
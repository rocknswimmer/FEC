import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {CloudinaryContext, Image} from 'cloudinary-react';
import { fetchPhotos, openUploadWidget } from '../../HelperFunctions/CloudinaryService.js';

const Button = styled.button`
  background: white;
  color: grey;
  font-size: .75em;
  margin: 15px 0 15px 0;
  padding: 0.25em 1em;
  border: 2px solid grey;
  border-radius: 3px;
`;

const AnswerModal = (props) => {
  const [answer, setAnswer] = useState('');
  const [answerUser, setAnswerUser] = useState('');
  const [answerEmail, setAnswerEmail] = useState('');

  const [images, setImages] = useState([]);
  const photosUrls = [];

  const onA = (e) => {
    setAnswer(e.target.value);
  };

  const onAUser = (e) => {
    setAnswerUser(e.target.value);
  };

  const onAEmail = (e) => {
    setAnswerEmail(e.target.value);
  };

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: 'dqmnjwd2c',
      tags: [tag, 'image'],
      uploadPreset: 'greyjoy_cloud'
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        // console.log(photos);
        if (photos.event === 'success') {

          setImages([...images, photos.info.url]);
        }
      } else {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    fetchPhotos('image', setImages);
  }, []);

  const submitAnswer = () => {
    axios.post('/qa/questions/:question_id/ansers', {
      body: answer,
      name: answerUser,
      email: answerEmail,
      photos: images,
      // eslint-disable-next-line camelcase
      question_id: props.question //need to add question to props once I know where this goes
    })
      .then((res) => {
        // console.log('response posting answer to server', res.data);
        props.get();

        console.log('after submit get');
        props.close();
      })
      .catch((err) => {
        console.log('error posting answer:', err );
      });

    // console.log(images);

  };

  const onSumbitA = () => {

    let alertA = false;
    let alertAUser = false;
    let alertAEmail = false;

    if (answer === '') {
      alertA = true;
    }
    if (answerUser === '') {
      alertAUser = true;
    }
    if (answerEmail === '') {
      alertAEmail = true;
    }
    if (alertA || alertAUser || alertAEmail) {
      let alertString = [{field: answer, label: 'Your answer'}, {field: answerUser, label: 'Your nickname'}, {field: answerEmail, label: 'Your Email'}].map((form) => {
        if (form.field === '') {
          return form.label;
        }
        return false;
      }).filter((empty) => { if (empty !== false) { return true; } }).join('\n');
      alert(`You must enter the following: \n ${alertString}`);
      return;
    }
    if (answerEmail.indexOf('@') === -1 || answerEmail.slice(answerEmail.indexOf('@')).indexOf('.') === -1) {
      alert('email missing @ or . after @, please reformatting to be able to submit');
      return;
    }

    submitAnswer();

  };


  return (
    <div className="modal">
      <div className="modal-pop">
        <button onClick={props.close}>x</button>
        <br />
        <label >Your Answer*</label>
        <input type="text" name="answer" onChange={onA} />
        <br />
        <label >What is your nickname*</label>
        <input type="text" placeholder="Example: jack543!" name="username" onChange={onAUser}/>
        <br />
        For privacy reasons, do not use your full name or email address
        <br />
        <label >Your email*</label>
        <input type="text" placeholder="Example: jack@email.com" name="email" onChange={onAEmail}/>
        <br />
        For authentication reasons, you will not be emailed
        <br />
        <CloudinaryContext cloudName="dqmnjwd2c">
          <div>
            <Button type="button" onClick={() => beginUpload('image')}>Upload Photos</Button>
            <section>
              {images.map(i => <Image
                key={i}
                publicId={i}
                fetch-format="auto"
                quality="auto"
                height="80px"
                width="80px"
              />)}
            </section>
          </div>
        </CloudinaryContext>
        <button onClick={onSumbitA}>Submit Answer</button>
      </div>
      <div className="modal-overlay"></div>
    </div>
  );
};

export default AnswerModal;
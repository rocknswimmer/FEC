import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from '../Stars/StarRating.jsx';
import Characteristic from './Characteristic.jsx';

const ReviewModal = ({toggle, productId}) => {
  let name;
  if (productId === 37311) {
    name = 'Camo Onesie';
  } else if (productId === 37312) {
    name = 'Bright Future Sunglasses';
  } else if (productId === 37313) {
    name = 'Morning Joggers';
  } else if (productId === 37314) {
    name = 'Slacker\'s Slacks';
  }

  const [recommend, setRecommend] = useState(false);
  const [stars, setStars] = useState(0);

  const [size, setSize] = useState(0);
  const sizeDescr = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'];

  const [width, setWidth] = useState(0);
  const widthDescr = ['Too narow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];

  const [comfort, setComfort] = useState(0);
  const comfortDescr = ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'];

  const [quality, setQuality] = useState(0);
  const qualityDescr = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];

  const [length, setLength] = useState(0);
  const lengthDescr = ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];

  const [fit, setFit] = useState(0);
  const fitDescr = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];

  const selectStars = (int) => {
    setStars(int);
  };

  const metaData = {
    product_id: '37315',
    ratings: {
      1: '33',
      2: '7',
      3: '20',
      4: '14',
      5: '20',
    },
    recommended: {
      false: '40',
      true: '54',
    },
    characteristics: {
      Size: {
        id: 125044,
        value: '2.7454545454545455',
      },
      Width: {
        id: 125045,
        value: '2.9642857142857143',
      },
      Comfort: {
        id: 125046,
        value: '3.1960784313725490',
      },
      Quality: {
        id: 125047,
        value: '3.0784313725490196',
      },
    },
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-pop" role="dialog" aria-modal="true">
          <button className="photo-modal-close" type="button" onClick={() => toggle()}>Close</button>
          <h2>Write Your Review</h2>
          <h3>About the {name}</h3>
          <br/>
          <div>
            <div>
              <div>Overall Rating <small>*</small></div>
              <StarRating selectStars={selectStars} stars={stars}/>
            </div>
            <div>
              <form>
                <div>Do you recommend this product? <small>*</small></div>
                <input type="radio" id="yes" name="rec" onClick={() => setRecommend(true)}/>
                <label for="yes">Yes</label>
                <input type="radio" id="no" name="rec" onClick={() => setRecommend(false)}/>
                <label for="no">No</label>
              </form>
            </div>
          </div>
        </div>
        <div className="modal-overlay" ></div>
      </div>
    </div>
  );
};

export default ReviewModal;
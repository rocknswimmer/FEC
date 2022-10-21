import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewsList from './ReviewsList.jsx';
import Dropdown from './Dropdown.jsx';
import Summary from './Summary.jsx';
import Buttons from './Buttons.jsx';

const ReviewsContainer = styled.div`
padding: 10px;
margin: 32px;
display: flex;
flex-direction: column;
flex-shrink: 0;

`;

const SummaryListDivider = styled.div`
width: 100%;
display: flex;
flex-shrink: 0;
`;

let visibleReviewsIndex = 2;

const Reviews = ({productId}) => {

  const [reviewsList, setReviewsList] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [currentSort, setCurrentSort] = useState('relevance');

  const [metaData, setMetaData] = useState({});

  const getReviews = (id = productId, sortSelection = 'relevant') => {

    axios({
      url: '/reviews/',
      method: 'get',
      params: {
        id: productId,
        sort: sortSelection
      }
    })
      .then((response) => {
        setReviewsList(response.data.results);
        setVisibleReviews(response.data.results.slice(0, visibleReviewsIndex));
        if (sortSelection === 'helpful') {
          setCurrentSort('helpfulness');
        } else if (sortSelection === 'relevant') {
          setCurrentSort('relevance');
        } else {
          setCurrentSort(sortSelection);
        }
      })
      .catch((err) => {
        console.log('error in client request', err);
      });
  };


  const handleMoreReviews = () => {
    visibleReviewsIndex += 2;
    setVisibleReviews(reviewsList.slice(0, visibleReviewsIndex));
  };

  const getMetaData = (id) => {
    axios({
      method: 'get',
      url: 'reviews/meta',
      params: {
        'product_id': id
      }
    })
      .then((response) => {
        setMetaData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getReviews(productId);
    getMetaData(productId);
    console.log('i fire once');
  }, []);
  return (
    <ReviewsContainer>

      <div>
        <div>
          <h3 id="rev-header">RATINGS AND REVIEWS</h3>
        </div>
        <SummaryListDivider>
          <div className="summary">
            <Summary />
          </div>
          <div className="list">
            <Dropdown reviewsList={reviewsList}
              getReviews={getReviews}
              currentSort={currentSort}/>
            <div className="rev-list-container">
              <ReviewsList
                reviewsList={reviewsList}
                visibleReviews={visibleReviews}/>
            </div>
            <Buttons handleMoreReviews={handleMoreReviews}
              reviewsList={reviewsList}
              visibleReviews={visibleReviews}
              productId={productId}
              getReviews={getReviews}
              metaData={metaData}/>
          </div>
        </SummaryListDivider>
      </div>
    </ReviewsContainer>
  );
};

export default Reviews;
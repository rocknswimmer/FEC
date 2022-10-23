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
max-width:80%;
`;

const SummaryListDivider = styled.div`
width: 100%;
display: flex;
flex-shrink: 0;
`;

let visibleReviewsIndex = 2;

const Reviews = ({productId, metaData, currentProduct}) => {

  const [reviewsList, setReviewsList] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [currentSort, setCurrentSort] = useState('relevance');
  const [starsFilter, setStarsFilter] = useState([]);

  console.log('STARS RATING IN HIGHEST COMPONENT', starsFilter);

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

  const [toggleObj, setToggleObj] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });
  console.log(Object.values(toggleObj));

  const fiveStars = reviewsList.filter(rev => rev.rating === 5);
  const fourStars = reviewsList.filter(rev => rev.rating === 4);
  const threeStars = reviewsList.filter(rev => rev.rating === 3);
  const twoStars = reviewsList.filter(rev => rev.rating === 2);
  const oneStars = reviewsList.filter(rev => rev.rating === 1);

  const ratingsArray = [null, oneStars, twoStars, threeStars, fourStars, fiveStars];

  const handleClick = (number) => {

    console.log('IN HANDLE CLICK', toggleObj[number]);
    toggleObj[number] = !toggleObj[number];
    let temp = JSON.parse(JSON.stringify(toggleObj));
    console.log(toggleObj);
    setToggleObj(temp);
  };

  const handleSort = () => {

    // setStarsFilter([]);
    // setVisibleReviews([]);
    const uniqueIds = [];
    if (Object.values(toggleObj).includes(true)) {

      for (let key in toggleObj) {
        if (toggleObj[key]) {
          let currentFilter = [...ratingsArray[key]];
          console.log('currentFilter, ', currentFilter);

          console.log(uniqueIds);
          const uniqueReviews = currentFilter.filter(rev => {
            const isDuplicate = uniqueIds.includes(rev.review_id);
            console.log('rev, ', rev);
            if (!isDuplicate) {
              uniqueIds.push(rev);

            }
          });

        }

      }
      setStarsFilter([...uniqueIds]);

    } else {
      setStarsFilter(reviewsList.slice(0, visibleReviewsIndex));
    }



    //     if (toggleObj[key]) {
    //       console.log('starsFilter spread: ', [...starsFilter]);
    //       console.log('ratigns array spread: ', ...ratingsArray[key]);

    //       if (!starsFilter.includes(ratingsArray[key][0].review_id)) {
    //         setStarsFilter([...starsFilter, ...ratingsArray[key]]);
    //       } else {
    //         setStarsFilter(...starsFilter);
    //         return;
    //       }
    //     }
    //   }
    // } else {
    //   setStarsFilter(reviewsList.slice(0, 2));
    // }

    // for (let key in toggleObj) {
    //   if (toggleObj[key]) {
    //     toggleObj[key] = false;
    //   }
    // }

    // setToggleObj({
    //   1: false,
    //   2: false,
    //   3: false,
    //   4: false,
    //   5: false
    // });


    // if (toggleObj[5]) {
    //   setStarsFilter([...starsFilter, ...fiveStars]);
    // } else if (toggleObj[4]) {
    //   setStarsFilter([...starsFilter, ...fourStars]);
    // } else if (toggleObj[3]) {
    //   setStarsFilter([...starsFilter, ...threeStars]);
    // } else if (toggleObj[2]) {
    //   setStarsFilter([...starsFilter, ...twoStars]);
    // } else if (toggleObj[1]) {
    //   setStarsFilter([...starsFilter, ...oneStars]);
    // } else {
    //

    // }
  };



  useEffect(() => {
    handleSort();
    setVisibleReviews(starsFilter);
  }, Object.values(toggleObj));


  console.log('VISIBLE REVIEWS', visibleReviews);
  useEffect(() => {
    getReviews(productId);
  }, []);
  return (
    <ReviewsContainer>

      <div>
        <div>
          <h3 id="rev-header">RATINGS AND REVIEWS</h3>
        </div>
        <SummaryListDivider>
          <div className="summary">
            <Summary
              metaData={metaData}
              reviewsList={reviewsList}
              setReviewsList={setReviewsList}
              visibleReviews={visibleReviews}
              setVisibleReviews={setVisibleReviews}
              starsFilter={starsFilter}
              setStarsFilter={setStarsFilter}
              toggleObj={toggleObj}
              setToggleObj={setToggleObj}
              handleClick={handleClick}
              handleSort={handleSort}/>
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
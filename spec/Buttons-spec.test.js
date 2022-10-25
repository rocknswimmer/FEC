import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../client/src/components/App.jsx';
import Reviews from '../client/src/components/Reviews/Reviews.jsx';
import Buttons from '../client/src/components/Reviews/Buttons.jsx';
import ReviewsListEntry from '../client/src/components/Reviews/ReviewsListEntry.jsx';

const toggleObj = {1: true, 2: false};
const visibleReviews = [1, 2, 3];
const reviewsList = [1, 2, 3];


let reviews = [];

const clickTest = () => {
  const element = document.createElement('div');
  reviews.push(element);
  reviews.push(element);
};

describe('Testing new config', () => {


  it('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });



  it('should render Buttons component and recognize buttons within it', () => {
    render(<Buttons visibleReviews={visibleReviews} reviewsList={reviewsList} toggleObj={toggleObj}/>);


    expect(screen.getByTestId('add-button')).toHaveTextContent('ADD A REVIEW +');
  });
});
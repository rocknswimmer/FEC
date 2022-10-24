import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// import Reviews from '../client/src/components/Reviews/Reviews.jsx';
import Buttons from '../client/src/components/Reviews/Buttons.jsx';
// import ReviewsListEntry from '../client/src/components/Reviews/ReviewsListEntry.jsx';



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


    expect(screen.getByTestId('add-button')).toHaveTextContent('ADD A REVIEW +');
  });
});
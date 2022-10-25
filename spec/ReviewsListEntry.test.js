import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ReviewsListEntry from '../client/src/components/Reviews/ReviewsListEntry.jsx';



describe('should render a reviews list entry with multiple different properties', () => {


  const review = {
    'review_id': 1277038,
    'rating': 1,
    'summary': 'There and back again',
    'recommend': false,
    'response': null,
    'body': 'A "no" on recommendation should change the metadata I get back',
    'date': '2022-10-22T00:00:00.000Z',
    'reviewer_name': 'frodo',
    'helpfulness': 9,
    'photos': [1, 2, 3]
  };

  it('should render a review entry and identify the summary container element', () => {
    render(<ReviewsListEntry review={review}/>);

    expect(screen.getByTestId('photo-thumb')).toHaveClass('thumbnails-container');

  });

  it('should render a review entry and identify the thubnails container element', () => {
    render(<ReviewsListEntry review={review}/>);

    expect(screen.getByTestId('photo-thumb')).toHaveClass('thumbnails-container');

  });

});
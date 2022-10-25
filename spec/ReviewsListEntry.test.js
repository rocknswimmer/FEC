import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ReviewsListEntry from '../client/src/components/Reviews/ReviewsListEntry.jsx';



describe('should render a reviews list entry with multiple different properties', () => {



  it('should render Buttons component and recognize buttons within it', () => {
    render(<Buttons visibleReviews={visibleReviews} reviewsList={reviewsList} toggleObj={toggleObj}/>);


    expect(screen.getByTestId('add-button')).toHaveTextContent('ADD A REVIEW +');
  });
});
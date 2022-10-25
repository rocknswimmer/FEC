import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import RatingBar from '../client/src/components/Reviews/RatingBar.jsx';

let descr = [0, 1, 'Perfect', 3, 4];

describe('should render a characteristics rating bar average to the screen', () => {

  it('should render a rating bar component with the class char-range', () => {
    render(<RatingBar descr={descr}/>);
    expect(screen.getByTestId('range-bar')).toHaveClass('char-range');
  });

  it('should render an arrow signifying the characteristic score', () => {
    render(<RatingBar descr={descr}/>);
    expect(screen.getByTestId('arrow')).toHaveClass('arrow-down');
  });

});
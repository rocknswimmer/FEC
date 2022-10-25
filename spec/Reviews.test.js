import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Reviews from '../client/src/components/Reviews/Reviews.jsx';

let id = 37311;
let metaData = {
  'product_id': '37311',
  'ratings': {
    '1': '50',
    '2': '28',
    '3': '79',
    '4': '113',
    '5': '282'
  },
  'recommended': {
    'false': '92',
    'true': '460'
  },
  'characteristics': {
    'Fit': {
      'id': 125031,
      'value': '3.0751445086705202'
    },
    'Length': {
      'id': 125032,
      'value': '3.1448467966573816'
    },
    'Comfort': {
      'id': 125033,
      'value': '3.2379518072289157'
    },
    'Quality': {
      'id': 125034,
      'value': '3.2848297213622291'
    }
  }
};

describe('should render the parent reviews widget', () => {

  it('should render a rating bar component with the class char-range', () => {
    render(<Reviews id={id} metaData={metaData}/>);
    expect(screen.getByTestId('rev-container')).toHaveStyle('padding: 10px');
  });

  it('should render the Reviews widget header', () => {
    render(<Reviews id={id} metaData={metaData}/>);
    expect(screen.getByTestId('rev-header')).toHaveClass('rev-header');
  });

});
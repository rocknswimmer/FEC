import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CharacteristicRating from '../client/src/components/Reviews/CharacteristicRating.jsx';




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
    'Size': {
      'id': 125030,
      'value': '1.0751445086705202'
    },
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
let postableObj = {};
const size = 2;
const sizeDescr = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'];

describe('should render a characteristics rating bar average to the screen', () => {

  it('should render a radio buttons to select the rating for the given characteristic', () => {
    render(<CharacteristicRating
      metaData={metaData}
      char={size}
      descr={sizeDescr}
      postableObj={postableObj}
      charId={metaData.characteristics.Size.id}
      postableObj={postableObj}/>);

    expect(screen.getByTestId('radio-box')).toHaveClass('radio-box');

  });

  it('should render form in the review modal', () => {
    render(<CharacteristicRating
      metaData={metaData}
      char={size}
      descr={sizeDescr}
      postableObj={postableObj}
      charId={metaData.characteristics.Size.id}
      postableObj={postableObj}/>);

    expect(screen.getByTestId('modal')).toHaveClass('rev-modal-form');

  });


});
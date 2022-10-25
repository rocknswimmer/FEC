import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AnswerFeed from '../client/src/components/Questions/AnswerModal.jsx';

const answers = [{
  id: 1,
  body: 'first',
  date: '2022-09-06T00:00:00.000Z',
  // eslint-disable-next-line camelcase
  answerer_name: 'u',
  helpfulness: 1,
  photos: []
}];


describe('Testing new config', () => {

  it('should render Buttons component and recognize buttons within it', () => {
    render(<AnswerFeed answers={answers} />);

    expect(screen.getByTestId('answer')).toBeDefined();
  });
});
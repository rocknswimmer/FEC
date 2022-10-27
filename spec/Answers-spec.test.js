import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Answers from '../client/src/components/Questions/Answers.jsx';


describe('Testing new config', () => {

  it('should render Buttons component and recognize buttons within it', () => {
    render(<Answers answer={{
      id: 1,
      body: 'first',
      date: '2022-09-06T00:00:00.000Z',
      // eslint-disable-next-line camelcase
      answerer_name: 'u',
      helpfulness: 1,
      photos: []
    }} />);

    expect(screen.getByTestId('answer')).toBeDefined();
  });
});
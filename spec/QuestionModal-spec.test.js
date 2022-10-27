import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import QuestionModal from '../client/src/components/Questions/QuestionModal.jsx';


describe('Testing new config', () => {

  it('should render Buttons component and recognize buttons within it', () => {
    render(<QuestionModal product={37311} currentProduct={{ name: 'test' }} />);

    expect(screen.getByTestId('qmodal')).toBeDefined();
  });
});
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Questions from '../client/src/components/Questions/Questions.jsx';


describe('Testing new config', () => {

  it('should render Buttons component and recognize buttons within it', () => {
    render(<Questions productId={37311} currentProduct={{ name: 'test' }} interact={(element, widget) => { submitInteraction(element, widget); }}/>);

    expect(screen.getByTestId('questions')).toBeDefined();
  });
});
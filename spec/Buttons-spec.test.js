import React, { useState, useEffect } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import Reviews from '../Reviews/Reviews.jsx';
import Buttons from '../client/src/components/Reviews/Buttons.jsx';


let reviews = [];

const clickTest = () => {
  const element = document.createElement('div');
  reviews.push(element);
  reviews.push(element);
};

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});



test('should render Buttons component and recognize buttons within it', () => {
  render(<Buttons />);
  const buttons = screen.getAllByText('ADD A REVIEW +');
  expect(buttons).not.toBeNull();
});
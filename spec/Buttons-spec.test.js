import React, { useState, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
/**
 * @jest-environment jsdom
 */
// import Buttons from '../client/src/components/Reviews/Buttons.jsx';
// import handleMoreReviews from '../client/src/components/Reviews/Reviews.jsx';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

// test('clicking on the button will show two additional reviews', () => {
//   root.render(<Buttons handleMoreReviews={handleMoreReviews}/>);

//   fireEvent.click(button);

//   expect(reviewsList).toBeInTheDocument();
// });
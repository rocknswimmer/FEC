import React, { useState, useEffect } from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import ProductName from '../client/src/components/View/ProductName.jsx';

const dummyProductInfo = {
  'id': 37311,
  'name': 'Tux',
  'category': 'Penguin',
};

it('ProductName Category displays proper category', () => {
  const {getByText} = render(
    <ProductName productInfo = {dummyProductInfo} />
  );

  expect(getByText('Penguin', { exact: false })).toBeTruthy();
});
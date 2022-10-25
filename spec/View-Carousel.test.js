import React, { useState, useEffect } from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Carousel from '../client/src/components/View/Carousel.jsx';


import App from '../client/src/components/App.jsx';

const dummyProductInfo = {
  'id': 37311,
  'campus': 'hr-rfe',
  'name': 'Camo Onesie',
  'slogan': 'Blend in to your crowd',
  'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  'category': 'Jackets',
  'default_price': '140.00',
  'created_at': '2021-08-13T14:37:33.145Z',
  'updated_at': '2021-08-13T14:37:33.145Z',
  'features': [
    {
      'feature': 'Fabric',
      'value': 'Canvas'
    },
    {
      'feature': 'Buttons',
      'value': 'Brass'
    }
  ]
};

const dummyCurrentDisplayedStyle = {
  'style_id': 221002,
  'name': 'NyanCat',
  'original_price': '140.00',
  'sale_price': '100.00',
  'default?': false,
  'photos': [
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
    },
    {
      'thumbnail_url': 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      'url': 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    }
  ],
  'skus': {
    '1281056': {
      'quantity': 8,
      'size': 'XS'
    },
    '1281057': {
      'quantity': 16,
      'size': 'S'
    },
    '1281058': {
      'quantity': 17,
      'size': 'M'
    },
    '1281059': {
      'quantity': 10,
      'size': 'L'
    },
    '1281060': {
      'quantity': 15,
      'size': 'XL'
    },
    '1281061': {
      'quantity': 6,
      'size': 'XXL'
    }
  }
};

const dummyImageArray = [

  {
    'thumbnail_url': 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    'url': 'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
    'originalIndex': 0
  },
  {
    'thumbnail_url': 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    'url': 'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
    'originalIndex': 1
  },
  {
    'thumbnail_url': 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    'url': 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
    'originalIndex': 2
  },
  {
    'thumbnail_url': 'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    'url': 'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    'originalIndex': 3
  },
  {
    'thumbnail_url': 'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    'url': 'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    'originalIndex': 4
  },
  {
    'thumbnail_url': 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
    'url': 'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'originalIndex': 5

  }
];




// const Carousel = ({ imageArray, photoIndex, changePhotoToSelectedThumbnail, sendThumbnailUp, thumbnailArray, sendThumbnailDown, interact })

describe('Carousel exists and renders 5 images at a time', () => {



  it('it should have a container div', () => {
    render(
      <Carousel
        thumbnailArray={dummyImageArray}
        photoIndex={0}
        lengthOfImageArray={6}
        imageArray={dummyCurrentDisplayedStyle.photos}
      />
    );

    expect(screen.getByTestId('photoColumn')).toBeTruthy();
  });

  it('should render correct number of thumbnails', () => {
    render(
      <Carousel
        thumbnailArray={dummyImageArray}
        photoIndex={0}
        lengthOfImageArray={6}
        imageArray={dummyCurrentDisplayedStyle.photos}
      />
    );

    expect(screen.getAllByTestId('thumbnail_pic')).toHaveLength(5);
  });
});



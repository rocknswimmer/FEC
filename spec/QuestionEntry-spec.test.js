/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import QuestionEntry from '../client/src/components/Questions/QuestionEntry.jsx';

//make fake question entries with different number of answers to test answer feed conditonaly rendering on info passed to question entry

const question1 = {answers: {
  1: {
    id: 1,
    body: 'a',
    date: '2022-09-06T00:00:00.000Z',
    answerer_name: 'u',
    helpfulness: 0,
    photos: []
  }
},
question_body: 'testing',
question_helpfulness: 0
};

const question2 = {answers: {
  1: {
    id: 1,
    body: 'a',
    date: '2022-09-06T00:00:00.000Z',
    answerer_name: 'u',
    helpfulness: 0,
    photos: []
  },
  2: {
    id: 2,
    body: 'a',
    date: '2022-09-06T00:00:00.000Z',
    answerer_name: 'u',
    helpfulness: 0,
    photos: []
  }
},
question_body: 'testing',
question_helpfulness: 0
};

const question3 = {answers: {
  1: {
    id: 1,
    body: 'a',
    date: '2022-09-06T00:00:00.000Z',
    answerer_name: 'u',
    helpfulness: 0,
    photos: []
  },
  2: {
    id: 2,
    body: 'a',
    date: '2022-09-06T00:00:00.000Z',
    answerer_name: 'u',
    helpfulness: 0,
    photos: []
  },
  3: {
    id: 3,
    body: 'a',
    date: '2022-09-06T00:00:00.000Z',
    answerer_name: 'u',
    helpfulness: 0,
    photos: []
  }
},
question_body: 'testing',
question_helpfulness: 0
};

test('renders one answer component when question has one answer', async () => {
  render(<QuestionEntry question={question1} />)

  expect(screen.getByRole('answer').length).toEqual(1);
});

/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import QuestionEntry from '../client/src/components/Questions/QuestionEntry.jsx';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/react';


//make fake question entries with different number of answers to it answer feed conditonaly rendering on info passed to question entry

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
    body: 'first',
    date: '2022-09-06T00:00:00.000Z',
    answerer_name: 'u',
    helpfulness: 1,
    photos: []
  },
  2: {
    id: 2,
    body: 'second',
    date: '2022-09-06T00:00:00.000Z',
    answerer_name: 'u',
    helpfulness: 2,
    photos: []
  },
  3: {
    id: 3,
    body: 'third',
    date: '2022-09-06T00:00:00.000Z',
    answerer_name: 'u',
    helpfulness: 3,
    photos: []
  }
},
question_body: 'testing',
question_helpfulness: 0
};

describe( 'Question Entry tests', function() {
  it('renders one answer component when question has one answer', async () => {
    render(<QuestionEntry question={question1} />);

    await screen.findByTestId('answer');

    expect(screen.getByTestId('answer')).toBeDefined();
  });

  it('renders two answer component when question has two answers', async () => {
    render(<QuestionEntry question={question2} />);

    await screen.findAllByTestId('answer');


    expect(screen.getAllByTestId('answer').length).toEqual(2);
  });

  it('renders two answer component when question has three answers', async () => {
    render(<QuestionEntry question={question3} />);

    await screen.findAllByTestId('answer');


    expect(screen.getAllByTestId('answer').length).toEqual(2);
  });

  //test sort

  // test yes put

  // test answer modal function

});

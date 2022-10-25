// /* eslint-disable camelcase */
// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
// import AnswerModal from '../client/src/components/Questions/AnswerModal.jsx';
// import 'whatwg-fetch';

// const question3 = {answers: {
//   1: {
//     id: 1,
//     body: 'first',
//     date: '2022-09-06T00:00:00.000Z',
//     answerer_name: 'u',
//     helpfulness: 1,
//     photos: []
//   },
//   2: {
//     id: 2,
//     body: 'second',
//     date: '2022-09-06T00:00:00.000Z',
//     answerer_name: 'u',
//     helpfulness: 2,
//     photos: []
//   },
//   3: {
//     id: 3,
//     body: 'third',
//     date: '2022-09-06T00:00:00.000Z',
//     answerer_name: 'u',
//     helpfulness: 3,
//     photos: []
//   }
// },
// question_body: 'testing',
// question_helpfulness: 0
// };


// describe('Testing new config', () => {

//   it('should render Buttons component and recognize buttons within it', () => {
//     render(<AnswerModal question={question3} currentProduct={{ name: 'test' }} />);

//     expect(screen.getByTestId('amodal')).toBeDefined();
//   });
// });
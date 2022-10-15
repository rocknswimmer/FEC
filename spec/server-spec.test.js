const axios = require('axios');
const {api} = require('../client/src/config/config.js');
// const sum = (a, b) => {
//   return a + b;
// };

// research how to test API responses
// const response = (apiResponse) => {
//   return apiResponse.status === '201'
// }

// test('should receive a 201 status code', {
//   expect(response()).toBe(true)
// })

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

//test for view api calls
// test('api responds to a product id search', ()=> {
//   expect(() => {
//     axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/1137', {
//       "headers": {
//         "Authorization": api
//       }
//     });
//   });
// });
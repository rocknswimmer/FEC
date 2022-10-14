const sum = (a, b) => {
  return a + b;
};

// research how to test API responses
// const response = (apiResponse) => {
//   return apiResponse.status === '201'
// }

// test('should receive a 201 status code', {
//   expect(response()).toBe(true)
// })

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
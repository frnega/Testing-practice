const capitalizeFL = require('./capitilized');
test('free', () => {
  expect(capitalizeFL('free')).toBe('Free');
});
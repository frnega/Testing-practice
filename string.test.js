const stringLength = require('./length');
test('free', () => {
  expect(stringLength('free')).toBe(true);
});

test('freeeeeeeee', () => {
  expect(stringLength('freeeeeeeee')).toBe(false);
});

test('f', () => {
  expect(stringLength('f')).toBe(true);
});

import Validator from '../app';

test('validateUsername method four or more digits in a row', () => {
  // const result = new Validator();
  expect(Validator.validateUsername('Iron-Man_1111a')).toBeFalsy();
});

test('validateUsername method', () => {
  // const result = new Validator();
  expect(Validator.validateUsername('Iron-Man_111a')).toBeTruthy();
});

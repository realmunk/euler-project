const generateTriangleNumbers = require('./generate-triangle-numbers');

describe('generateTriangleNumbers Validator', () => {
  it('should be able to generate the first ten triangle numbers', () => {
    expect(generateTriangleNumbers(10)).toEqual([
      1,
      3,
      6,
      10,
      15,
      21,
      28,
      36,
      45,
      55,
    ]);
  });
});

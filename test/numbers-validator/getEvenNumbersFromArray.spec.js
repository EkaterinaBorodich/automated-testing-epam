const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return an array of even numbbers', () => {
    expect(validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
      .to.deep.equal([2, 4, 6, 8, 10]);
  });

  it('should throw an error If the input is not an array of numbers', () => {
    const input = 'four';

    expect(() => {
      validator.getEvenNumbersFromArray(input);
    }).to.throw('');
  });
});

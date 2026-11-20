const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if every element in the array is of type number', () => {
    expect(validator.isAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
      .to.be.equal(true);
  });

  it('should throw an error if the input is not an array of numbers', () => {
    const input = 'four';

    expect(() => {
      validator.isAllNumbers(input);
    }).to.throw('');
  });
});

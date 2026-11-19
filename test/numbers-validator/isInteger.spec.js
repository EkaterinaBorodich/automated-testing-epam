/* eslint-disable no-undef */
const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if n is an integer', () => {
    expect(validator.isInteger(4)).to.be.equal(true);
  });

  it('should throw an error if input is not a number', () => {
    const input = 'four';

    expect(() => {
      validator.isInteger(input);
    }).to.throw('');
  });
});

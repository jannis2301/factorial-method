var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 when you pass in 5', () => {
      //Setup
      const inputNumber = 5;
      const expected = 120;
      //Exercise
      const result = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(result, expected);
    });

    it('returns 6 when you pass in 3', () => {
      //Setup
      const inputNumber = 3;
      const expected = 6;
      //Exercise
      const result = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(result, expected);
    });

    it('returns 1 when you pass in 0', () => {
      //Setup
      const inputNumber = 0;
      const expected = 1;
      //Exercise
      const result = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(result, expected);
    });
  });
});
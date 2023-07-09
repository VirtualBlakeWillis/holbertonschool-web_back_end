// testing calculateNumber function

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return 5 when adding 1 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('should return 5 when adding 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('should return 6 when adding 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should return 0 when adding 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
  });
  it('should return -5 when adding -1.2 and -3.7', () => {
    assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5);
  });
  it('should return 3 when subtracting 1 from 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
  });
  it('should return 5 when subtracting 1.2 from 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
  });
  it('should return 1 when subtracting 1.5 from 3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
  });
  it('should return 0 when subtracting 0.1 from 0.3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.3, 0.1), 0);
  });
  it('should return -3 when subtracting -1.2 from -3.7', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -3.7, -1.2), -3);
  });
  it('should return 1.25 when dividing 4.5 by 3.7', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 3.7), 1.25);
  });
  it('should return Error when dividing 4.5 by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 0), 'Error');
  });
});

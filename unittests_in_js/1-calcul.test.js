var assert = require('assert');
var calculateNumber = require('./1-calcul.js');

describe('calculateNumber SUM', function() {
  it('should return 4', function() {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('should return 4, rounding 1st number', function() {
    assert.equal(calculateNumber('SUM', 1.4, 3), 4);
  });
  it('should return 4, rounding 2nd number', function() {
    assert.equal(calculateNumber('SUM', 1, 3.4), 4);
  });
  it('should return 5, rounding both numbers', function() {
    assert.equal(calculateNumber('SUM', 1.4, 3.4), 4);
  });
});

describe('calculateNumber SUBTRACT', function() {
  it('should return -2', function() {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('should return -2, rounding 1st number', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 3), -2);
  });
  it('should return -2, rounding 2nd number', function() {
    assert.equal(calculateNumber('SUBTRACT', 1, 3.4), -2);
  });
  it('should return -2, rounding both numbers', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 3.4), -2);
  });
});

describe('calculateNumber DIVIDE', function() {
  it('should return 0.3333333333333333', function() {
    assert.equal(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
  });
  it('should return 0.3333333333333333, rounding 1st number', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 3), 0.3333333333333333);
  });
  it('should return 0.3333333333333333, rounding 2nd number', function() {
    assert.equal(calculateNumber('DIVIDE', 1, 3.4), 0.3333333333333333);
  });
  it('should return 0.3333333333333333, rounding both numbers', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 3.4), 0.3333333333333333);
  });
  it('should return Error', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});

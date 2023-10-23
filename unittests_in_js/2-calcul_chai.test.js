var assert = require('chai').expect;
const { expect } = require('chai');
var calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber SUM', function() {
  it('should return 4', function() {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return 4, rounding 1st number', function() {
    expect(calculateNumber('SUM', 1.4, 3)).to.equal(4);
  });
  it('should return 4, rounding 2nd number', function() {
    expect(calculateNumber('SUM', 1, 3.4)).to.equal(4);
  });
  it('should return 5, rounding both numbers', function() {
    expect(calculateNumber('SUM', 1.4, 3.4)).to.equal(4);
  });
});

describe('calculateNumber SUBTRACT', function() {
  it('should return -2', function() {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('should return -2, rounding 1st number', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 3)).to.equal(-2);
  });
  it('should return -2, rounding 2nd number', function() {
    expect(calculateNumber('SUBTRACT', 1, 3.4)).to.equal(-2);
  });
  it('should return -2, rounding both numbers', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 3.4)).to.equal(-2);
  });
});

describe('calculateNumber DIVIDE', function() {
  it('should return 0.3333333333333333', function() {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
  });
  it('should return 0.3333333333333333, rounding 1st number', function() {
    expect(calculateNumber('DIVIDE', 1.4, 3)).to.equal(0.3333333333333333);
  });
  it('should return 0.3333333333333333, rounding 2nd number', function() {
    expect(calculateNumber('DIVIDE', 1, 3.4)).to.equal(0.3333333333333333);
  });
  it('should return 0.3333333333333333, rounding both numbers', function() {
    expect(calculateNumber('DIVIDE', 1.4, 3.4)).to.equal(0.3333333333333333);
  });
  it('should return Error', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});

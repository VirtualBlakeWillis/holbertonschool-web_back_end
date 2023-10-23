var assert = require('assert');
var calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should return 4', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should return 5', function() {
    assert.equal(calculateNumber(1.6, 3), 5);
  });
  it('should return 5', function() {
    assert.equal(calculateNumber(1.2, 3.8), 5);
  });
  it('should return 5', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 5', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
});



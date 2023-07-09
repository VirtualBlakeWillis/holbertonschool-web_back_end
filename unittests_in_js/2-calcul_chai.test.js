// testing calculateNumber function using chai

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul.js');


expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
expect(calculateNumber('SUBTRACT', 0.3, 0.1)).to.equal(0);
expect(calculateNumber('SUBTRACT', -3.7, -1.2)).to.equal(-3);
expect(calculateNumber('DIVIDE', 4.5, 3.7)).to.equal(1.25);
expect(calculateNumber('DIVIDE', 4.5, 0)).to.equal('Error');


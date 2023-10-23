const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');


describe('sendPaymentRequestToApi', function() {
  it('validate the usage of utils function?', function() {
    const spy = sinon.spy(console, 'log');
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
  
    const apiRequest = sendPaymentRequestToApi(100, 20);

    expect(utilsSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(apiRequest);

    spy.restore();
    utilsSpy.restore();
  });
});

const sendPaymentRequestToApi = require('./3-payment');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');


describe('sendPaymentRequestToApi', function() {
  it('validate the usage of utils function?', function() {
    const spy = sinon.spy(console, 'log');
    const apiRequest = sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
    spy.restore();
  });
});

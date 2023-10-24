const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');


describe('sendPaymentRequestToApi', function() {
  it('validate the usage of utils function?', function() {
    const spy = sinon.spy(console, 'log');
    const utilsSpy = sinon.stub(Utils, 'calculateNumber');
    utilsSpy.returns(10);
    
    const apiRequest = sendPaymentRequestToApi(100, 20);

    expect(utilsSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;

    spy.restore();
    utilsSpy.restore();
  });
});

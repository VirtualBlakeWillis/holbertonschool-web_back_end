// test using sinon and stubs

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('...', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');;
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(console.log.calledOnceWithExactly('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});

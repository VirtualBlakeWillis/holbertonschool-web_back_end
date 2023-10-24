const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spy.restore();
  });

  it('validate correct output', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('validate correct output #2', function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

});
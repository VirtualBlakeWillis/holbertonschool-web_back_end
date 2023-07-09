// test using sinon

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('...', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    spy.restore();
    spyConsole.restore();
  });
});

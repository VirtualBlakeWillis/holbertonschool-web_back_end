const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('sendPaymentRequestToApi', function() {
    it('learning async testing', function(done) {
        const spy = sinon.spy(console, 'log');
        console.log(getPaymentTokenFromAPI(true).data);
        done();
        expect(spy.calledOnceWithExactly('Successful response from the API')).to.be.true;
    });
    
});
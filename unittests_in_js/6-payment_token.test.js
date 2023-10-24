const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('sendPaymentRequestToApi', function() {
    it('learning async testing', function(done) {
        getPaymentTokenFromAPI(true);
        done();
    });
    
});
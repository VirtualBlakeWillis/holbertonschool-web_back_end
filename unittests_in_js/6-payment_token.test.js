const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('sendPaymentRequestToApi', function() {
    it('learning async testing', function(done) {
        const apiRequest = getPaymentTokenFromAPI(true);
        expect(apiRequest).to.be.a('promise');
        apiRequest.then((res) => {
            expect(res).to.equal('Successful response from the API');
            done();
        }).catch((err) => {
            done(err);
        });
    });    
});
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('sendPaymentRequestToApi', function() {
    it('learning async testing', function(done) {
        const spy = sinon.spy(console, 'log');
        const apiRequest = getPaymentTokenFromAPI(true);
        expect(apiRequest).to.be.a('promise');
        apiRequest.then((res) => {
            expect(res.data).to.equal('Successful response from the API');
            expect(spy.calledOnceWithExactly('Successful response from the API')).to.be.true;
            spy.restore();
            done();
        }).catch((err) => {
            done(err);
        });
    });    
});
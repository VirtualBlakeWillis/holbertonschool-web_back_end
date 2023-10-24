const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('GET /', () => {
    it('endpoint response', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('GET /cart/:id', () => {
    it('endpoint response', (done) => {
        request('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });
    it('endpoint response fail', (done) => {
        request('http://localhost:7865/cart/hello', (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});

describe('GET /available_payments', () => {
    it('endpoint response', (done) => {
        request('http://localhost:7865/available_payments', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
            done();
        });
    });
});

describe('POST /login', () => {
    it('endpoint response', (done) => {
        const options = {
            url: 'http://localhost:7865/login',
            method: 'POST',
            json: {
                userName: 'Betty'
            }
        };
        request(options, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});

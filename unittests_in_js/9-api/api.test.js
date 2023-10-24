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
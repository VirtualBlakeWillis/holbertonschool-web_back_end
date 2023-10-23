const calculateNumber = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const res = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${res}`);
  return res;
}

module.exports = sendPaymentRequestToApi;

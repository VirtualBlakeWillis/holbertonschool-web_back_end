function getPaymentTokenFromAPI(success) {
    if (success) return new Promise((resolve, reject) => {
        const data = {
            data: 'Successful response from the API'
        };
        resolve(data);
    });
}

module.exports = getPaymentTokenFromAPI;

const express = require('express');
const app = express();

app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the payment system');
    });

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.status(404).send('Invalid cart ID');
    } else {
        res.status(200).send(`Payment methods for cart ${req.params.id}`);
    }
});

app.get('/available_payments', (req, res) => {
    res.status(200).send({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.post('/login', (req, res) => {
    console.log(req.body)
    const userName = req.body.userName;
    res.status(200).send(`Welcome ${userName}`);
});

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
    });

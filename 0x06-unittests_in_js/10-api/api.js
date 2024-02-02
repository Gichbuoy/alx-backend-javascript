const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7865;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for /cart/:id
app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// New endpoint for /available_payments
app.get('/available_payments', (req, res) => {
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(availablePayments);
});

// New endpoint for /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

module.exports = app;

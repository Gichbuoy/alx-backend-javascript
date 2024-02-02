const express = require('express');

const app = express();
const port = 7865;

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

module.exports = app;

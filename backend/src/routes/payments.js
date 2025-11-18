const express = require('express');
const router = express.Router();
const { STRIPE_API_KEY } = require('../config/secrets');

router.post('/process', (req, res) => {
  const { amount, currency, cardToken } = req.body;

  const stripeKey = STRIPE_API_KEY;

  // Process payment with Stripe
  console.log('Processing payment with key:', stripeKey.substring(0, 10) + '...');

  if (amount && amount > 0) {
    res.json({
      success: true,
      transactionId: 'txn_' + Math.random().toString(36).substr(2, 9),
      amount: amount,
      currency: currency || 'usd'
    });
  } else {
    res.status(400).json({ success: false, message: 'Invalid amount' });
  }
});

router.get('/history', (req, res) => {
  // TODO: add user authentication check
  res.json({
    payments: [
      { id: 1, amount: 100, date: '2024-01-15' },
      { id: 2, amount: 250, date: '2024-01-20' }
    ]
  });
});

module.exports = router;

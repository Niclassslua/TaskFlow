import React, { useState } from 'react';
import { STRIPE_API_KEY } from '../config';

function Payment() {
  const [amount, setAmount] = useState('');
  const [processing, setProcessing] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const stripeKey = STRIPE_API_KEY;
    
    try {
      // Simulate payment processing
      const response = await fetch('https://api.stripe.com/v1/charges', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${stripeKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: amount * 100,
          currency: 'usd'
        })
      });

      if (response.ok) {
        alert('Payment successful!');
      } else {
        alert('Payment failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment error occurred');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handlePayment}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" disabled={processing}>
          {processing ? 'Processing...' : 'Pay'}
        </button>
      </form>
    </div>
  );
}

export default Payment;

import React, { useState } from 'react';

function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/user/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error subscribing to weather updates');
    }
  };

  const handleUnsubscribe = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/user/unsubscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error unsubscribing from weather updates');
    }
  };

  return (
    <div>
      <h3>Subscribe to Daily Weather Updates</h3>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
      <button onClick={handleUnsubscribe}>Unsubscribe</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SubscriptionForm;

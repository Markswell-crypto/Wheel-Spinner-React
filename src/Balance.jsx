// Balance.js
import React, { useState } from 'react';

const Balance = ({ balance, onAddBalance }) => {
  const [amount, setAmount] = useState('');

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddBalance = () => {
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      onAddBalance(parsedAmount);
      setAmount('');
    } else {
      alert('Invalid amount!');
    }
  };

  return (
    <div className="balance">
      <p>Balance: ${balance}</p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleChange}
      />
      <button onClick={handleAddBalance}>Add Balance</button>
    </div>
  );
};

export default Balance;

// App.js
import React, { useState } from 'react';
import Wheel from './Wheel';
import Balance from './Balance';

const App = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedSlice, setSelectedSlice] = useState(null);
  const [balance, setBalance] = useState(100); // Initial balance

  const handleSpin = () => {
    // Check if the user has enough balance to spin
    if (balance <= 0) {
      alert('Insufficient balance to spin!');
      return;
    }

    setIsSpinning(true);
    // Simulating spinning for 1.5 seconds
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 20);
      setSelectedSlice(randomIndex);
      setIsSpinning(false);
      const winAmount = calculateWinAmount(randomIndex);
      setBalance(balance + winAmount);
    }, 1500);
  };

  const calculateWinAmount = (index) => {
    // Placeholder win/loss logic, adjust as needed
    if (index % 2 === 0) {
      return 10; // User wins $10
    } else {
      return -5; // User loses $5
    }
  };

  const handleAddBalance = (amount) => {
    setBalance(balance + amount);
  };

  return (
    <div className="app">
      <Wheel />
      <Balance balance={balance} onAddBalance={handleAddBalance} />
      <button onClick={handleSpin} disabled={isSpinning}>
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
      {selectedSlice !== null && (
        <p className={selectedSlice % 2 === 0 ? 'win' : 'loss'}>
          {selectedSlice + 1}: {selectedSlice % 2 === 0 ? 'Win' : 'Loss'}
        </p>
      )}
      {/* Close button */}
      <button className="close-button">Close</button>
    </div>
  );
};

export default App;

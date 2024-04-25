// Wheel.js
import React from 'react';
import Slice from './Slice';

const Wheel = () => {
  const slices = Array.from({ length: 20 }, (_, index) => ({
    color: index % 2 === 0 ? 'red' : 'blue',
    price: Math.floor(Math.random() * 100) + 1, // Generate random price
  }));

  return (
    <div className="wheel-container">
      <svg viewBox="0 0 600 600">
        {slices.map((slice, index) => (
          <Slice key={index} fill={slice.color} index={index} price={slice.price} />
        ))}
      </svg>
    </div>
  );
};

export default Wheel;

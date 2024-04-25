// Slice.js
import React from 'react';

const Slice = ({ fill, index, price }) => {
  const totalSlices = 20; // Total number of slices
  const radians = (Math.PI * 2) / totalSlices;
  const startAngle = radians * index;
  const endAngle = startAngle + radians;

  const x1 = Math.cos(startAngle) * 300 + 300;
  const y1 = Math.sin(startAngle) * 300 + 300;
  const x2 = Math.cos(endAngle) * 300 + 300;
  const y2 = Math.sin(endAngle) * 300 + 300;

  const largeArcFlag = radians <= Math.PI ? 0 : 1;

  const path = `
    M 300 300
    L ${x1} ${y1}
    A 300 300 0 ${largeArcFlag} 1 ${x2} ${y2}
    Z
  `;

  return (
    <>
      <path fill={fill} d={path} />
      <text
        x={300 + Math.cos(startAngle + radians / 2) * 200}
        y={300 + Math.sin(startAngle + radians / 2) * 200}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="16"
      >
        ${price}
      </text>
    </>
  );
};

export default Slice;

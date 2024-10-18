import React, { useEffect, useState } from 'react';

const CircularProgress = ({ percentage, Icon }) => {
  const radius = 45; // Radius of the circle
  const strokeWidth = 8; // Stroke width of the circle
  const circumference = 2 * Math.PI * radius;

  // State to control the initial offset
  const [offset, setOffset] = useState(circumference); // Start with full offset

  // Calculate the progress based on the percentage prop
  const progress = (percentage / 100) * circumference; 

  // Determine color based on percentage
  const getColor = (percentage) => {
    if (percentage > 65) return '#4caf50'; // Green
    else if (percentage >= 40) return '#ffeb3b'; // Yellow
    return '#f44336'; // Red
  };

  useEffect(() => {
    // Trigger animation after component mounts
    setOffset(circumference - progress);
  }, [percentage, circumference, progress]);

  return (
    <div className='ml-4' style={{ position: 'relative', width: '100px', height: '100px' }}>
      <svg width="100" height="100">
        <circle
          stroke="rgb(55 65 81 / var(--tw-bg-opacity))" // Background color of the circle
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          stroke={getColor(percentage)} // Use the color determined by the percentage
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: 'stroke-dashoffset 2.5s ease-in-out',
          }}
        />
      </svg>
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        fontSize: '45px' 
      }}>
        <Icon />
      </div>
    </div>
  );
};

export default CircularProgress;
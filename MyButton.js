import React, { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Button Clicker</h1>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4caf50',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleClick}> Clicked {count} times </button>
    </div>
  );
}

export default MyButton;
import React from 'react';
import './App.module.css'

export default function App() {
  const handleClick = () => {
  
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our
        service by selecting one of the options below.
      </p>
      <button onClick={handleClick}>Good</button>
      <button onClick={handleClick}>Neutral</button>
      <button onClick={handleClick}>Bad</button>
      </div>
  );
}



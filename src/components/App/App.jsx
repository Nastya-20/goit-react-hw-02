import 'react';
import 'react-dom';
import 'modern-normalize';
import './App.module.css';

export default function App() {
  const handleClick = () => {
  
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our
        service by selecting one of the options below.
      </p>
      <button type='button' onClick={handleClick}>Good</button>
      <button type='button' onClick={handleClick}>Neutral</button>
      <button type='button' onClick={handleClick}>Bad</button>
      </div>
  );
}



import 'react';
import 'react-dom';
import 'modern-normalize';
import css from './App.module.css';

export default function App() {
  const handleClick = () => {
  
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.text}>Please leave your feedback about our
        service by selecting one of the options below.
      </p>
      <button className={css.btn} onClick={handleClick}>Good</button>
      <button className={css.btn} onClick={handleClick}>Neutral</button>
      <button className={css.btn} onClick={handleClick}>Bad</button>
      </div>
  );
}



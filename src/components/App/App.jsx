import { useState, useEffect } from 'react';
import 'react-dom';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import 'modern-normalize';
import css from './App.module.css';


export default function App(){
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    const storedFeedback = localStorage.getItem('feedback');
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    const resetFeedback = {
      good: 0,
      neutral: 0,
      bad: 0
    };
    setFeedback(resetFeedback);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={css.wrap}>
      <Description />
      <Options onLeaveFeedback={updateFeedback} onResetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
      <Feedback feedback={feedback} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
      ) : (
      <Notification message="No feedback yet" />
      )}
    </div>
  );
};









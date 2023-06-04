import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const incrementValue = option => {
    setFeedbacks(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedbacks.good + feedbacks.neutral + feedbacks.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return Math.round((feedbacks.good / totalFeedback) * 100);
  };

  const { good, neutral, bad } = feedbacks;

  return (
    <Section title="Please leave your feedback:">
      <Feedback
        options={Object.keys(feedbacks)}
        onIncrement={incrementValue}
      ></Feedback>
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}

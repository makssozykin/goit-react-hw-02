import { useState } from 'react';

import './App.css';
import { Description } from './components/Description/Description';
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';
import { Notification } from './components/Notification/Notification';

function App() {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = values;

  const options = Object.keys(values);

  const totalFeedback = good + neutral + bad;

  totalFeedback > 0 && options.push('reset');

  const percentage = (
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100)
  ).toFixed(0);

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const reset = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        options={options}
        updateFeedback={updateFeedback}
        onReset={reset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          percentage={percentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;

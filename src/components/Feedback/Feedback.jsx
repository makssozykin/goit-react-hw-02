import css from './Feedback.module.css';
export const Feedback = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div className={css['feedback-cont']}>
      <ul className={css['feedback-list']}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Percentage: {percentage}%</li>
      </ul>
    </div>
  );
};

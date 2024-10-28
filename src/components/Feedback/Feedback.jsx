export const Feedback = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Percentage: {percentage}%</li>
      </ul>
    </div>
  );
};

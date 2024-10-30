import css from './Options.module.css';

export const Options = ({ options, updateFeedback, onReset }) => {
  return (
    <div className={css['option-container']}>
      {options.map(option => (
        // Update state when button is clicked and pass the option name as a parameter to updateFeedback function.

        <button
          key={option}
          type="button"
          onClick={() =>
            option !== 'reset' ? updateFeedback(option) : onReset()
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};

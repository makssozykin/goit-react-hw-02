export const Options = ({ options, updateFeedback, onReset }) => {
  return (
    <div>
      {options.map(option =>
        option !== 'reset' ? (
          // Update state when button is clicked and pass the option name as a parameter to updateFeedback function.
          <button
            key={option}
            type="button"
            onClick={() => updateFeedback(option)}
          >
            {option}
          </button>
        ) : (
          <button key={option} type="button" onClick={() => onReset()}>
            {option}
          </button>
        )
      )}
    </div>
  );
};

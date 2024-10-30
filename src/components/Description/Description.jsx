import css from './Description.module.css';

export const Description = ({ title, text }) => {
  return (
    <div className={css.description}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
};

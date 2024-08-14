import css from './Options.module.css';
import PropTypes from 'prop-types';

export default function Options({ onLeaveFeedback, onResetFeedback, totalFeedback }) {
  return (
    <div>
      <button className={css.btn} onClick={() => onLeaveFeedback('good')}>Good</button>
      <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={onResetFeedback}>Reset</button>
      )}
    </div>
  );
};

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onResetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

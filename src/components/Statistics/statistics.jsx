import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.stat}>
      {stats.map(({ id, label, percentage }) => {
        const backgroundColor = randomColor();
        return (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: backgroundColor }}
          >
            <span className={css.label}>.{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

import React from 'react';
import PropTypes from 'prop-types';

const CountdownDisplayUnit = ({ name, value, hidden }) => {
  return (
    !hidden && (
      <span className="CountdownDisplay__item">
        <span className="CountdownDisplay__number">
          {`${value}`.padStart(2, '0')}
        </span>
        <span className="CountdownDisplay__label">
          {name.slice(0, -1)}
          {value !== 1 && 's'}
        </span>
      </span>
    )
  );
};

CountdownDisplayUnit.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  hidden: PropTypes.bool,
};

CountdownDisplayUnit.defaultProps = {
  hidden: false,
};

export default CountdownDisplayUnit;

import React from 'react';
import PropTypes from 'prop-types';

const CountdownDisplayUnit = ({ name, value, hideable }) => {
  return hideable && value === 0 ? null : (
    <span className="CountdownDisplay__item">
      <span className="CountdownDisplay__number">
        {`${value}`.padStart(2, '0')}
      </span>
      <span className="CountdownDisplay__label">
        {name.slice(0, -1)}
        {value !== 1 && 's'}
      </span>
    </span>
  );
};

CountdownDisplayUnit.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  hideable: PropTypes.bool.isRequired,
};

export default CountdownDisplayUnit;

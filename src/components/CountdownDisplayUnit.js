import React from 'react';
import PropTypes from 'prop-types';

const CountdownDisplayUnit = ({ name, value }) => {
  return (
    <span>
      <span>{`${value}`.padStart(2, '0')}</span>
      <span>
        {name.slice(0, -1)}
        {value !== 1 && 's'}
      </span>
    </span>
  );
};

CountdownDisplayUnit.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default CountdownDisplayUnit;

import React from 'react';
import PropTypes from 'prop-types';
import CountdownDisplayUnit from './CountdownDisplayUnit';

import './CountdownDisplay.css';

const CountdownDisplay = props => {
  const { datetime, months, days, hours, minutes, seconds, isComplete } = props;
  const units = [
    { name: 'months', value: months, hideable: true },
    { name: 'days', value: days, hideable: months === 0 },
    { name: 'hours', value: hours, hideable: false },
    { name: 'minutes', value: minutes, hideable: false },
    { name: 'seconds', value: seconds, hideable: false },
  ];

  return isComplete ? (
    <div className="Title">Out now!</div>
  ) : (
    <time className="CountdownDisplay" dateTime={datetime}>
      {units.map(({ name, value, hideable }) => (
        <CountdownDisplayUnit
          key={name}
          name={name}
          value={value}
          hideable={hideable}
        />
      ))}
    </time>
  );
};

CountdownDisplay.propTypes = {
  datetime: PropTypes.string.isRequired,
  years: PropTypes.number.isRequired,
  months: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default CountdownDisplay;

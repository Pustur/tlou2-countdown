import React from 'react';
import PropTypes from 'prop-types';
import CountdownDisplayUnit from './CountdownDisplayUnit';

import './CountdownDisplay.css';

const CountdownDisplay = props => {
  const { datetime, months, days, hours, minutes, seconds } = props;
  const units = [
    { name: 'months', value: months },
    { name: 'days', value: days },
    { name: 'hours', value: hours },
    { name: 'minutes', value: minutes },
    { name: 'seconds', value: seconds },
  ];

  return (
    <time className="CountdownDisplay" dateTime={datetime}>
      {units.map(({ name, value }) => (
        <CountdownDisplayUnit key={name} name={name} value={value} />
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
  milliseconds: PropTypes.number.isRequired,
};

export default CountdownDisplay;

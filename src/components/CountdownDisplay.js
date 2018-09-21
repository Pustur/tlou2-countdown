import React from 'react';
import PropTypes from 'prop-types';
import CountdownDisplayUnit from './CountdownDisplayUnit';

import './CountdownDisplay.css';

const CountdownDisplay = props => {
  const { months, days, asDays, hours, minutes, seconds } = props;
  const units = [
    { name: 'months', value: months, hidden: months === 0 },
    { name: 'days', value: days, hidden: months === 0 && days === 0 },
    { name: 'hours', value: hours },
    { name: 'minutes', value: minutes },
    { name: 'seconds', value: seconds },
  ];

  return (
    <time
      className="CountdownDisplay"
      dateTime={`P${asDays}DT${hours}H${minutes}M${seconds}S`}
    >
      {units.map(({ name, value, hidden }) => (
        <CountdownDisplayUnit
          key={name}
          name={name}
          value={value}
          hidden={hidden}
        />
      ))}
    </time>
  );
};

CountdownDisplay.propTypes = {
  months: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
  asDays: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default CountdownDisplay;

import { Component } from 'react';
import PropTypes from 'prop-types';
import { Duration } from 'luxon';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { now: new Date() };
  }

  componentDidMount() {
    if (!this.isComplete()) {
      this.intervalId = setInterval(() => {
        this.setState({ now: new Date() });
      }, this.props.intervalDelay);
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  isComplete = () => this.state.now > this.props.toDate;

  render() {
    const { now } = this.state;
    const { toDate } = this.props;
    const duration = Duration.fromObject({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: toDate - now,
    });

    return this.props.children({
      ...duration.normalize().toObject(),
      asDays: Math.floor(duration.as('days')),
      isComplete: this.isComplete(),
    });
  }
}

Countdown.propTypes = {
  toDate: PropTypes.instanceOf(Date).isRequired,
  intervalDelay: PropTypes.number,
};

Countdown.defaultProps = {
  intervalDelay: 1000,
};

export default Countdown;

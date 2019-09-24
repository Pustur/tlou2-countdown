import { Component } from 'react';
import PropTypes from 'prop-types';

class Countdown extends Component {
  state = { now: new Date() };

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
    const delta = toDate - now;

    return this.props.children({
      years: Math.floor(delta / 1000 / 60 / 60 / 24 / 30 / 12),
      months: Math.floor((delta / 1000 / 60 / 60 / 24 / 30) % 12),
      days: Math.floor((delta / 1000 / 60 / 60 / 24) % 30),
      hours: Math.floor((delta / 1000 / 60 / 60) % 24),
      minutes: Math.floor((delta / 1000 / 60) % 60),
      seconds: Math.floor((delta / 1000) % 60),
      milliseconds: delta,
      asDays: Math.floor(delta / 1000 / 60 / 60 / 24),
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

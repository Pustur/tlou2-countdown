import { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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

  getTimeDifference = diff => ({
    years: diff.years(),
    months: diff.months(),
    days: diff.days(),
    asDays: Math.floor(diff.asDays()),
    hours: diff.hours(),
    minutes: diff.minutes(),
    seconds: diff.seconds(),
    milliseconds: diff.milliseconds(),
  });

  render() {
    const now = moment(this.state.now);
    const toDate = moment(this.props.toDate);
    const diff = moment.duration(toDate.diff(now));

    return this.props.children({
      ...this.getTimeDifference(diff),
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

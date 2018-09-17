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

  getDiffDuration = () => {
    const now = moment(this.state.now);
    const toDate = moment(this.props.toDate);

    return moment.duration(toDate.diff(now));
  };

  render() {
    const diff = this.getDiffDuration();
    const years = diff.years();
    const months = diff.months();
    const days = diff.days();
    const hours = diff.hours();
    const minutes = diff.minutes();
    const seconds = diff.seconds();
    const milliseconds = diff.milliseconds();
    const asDays = Math.floor(diff.asDays());
    const datetime = `P${asDays}DT${hours}H${minutes}M${seconds}.${milliseconds}S`;

    return this.props.children({
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
      datetime,
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

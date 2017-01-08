var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');


class Countdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalSeconds: 0
        }

        this.handleSetCountdown = this.handleSetCountdown.bind(this);
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            totalSeconds: seconds
        });
    }

    render() {
        var {totalSeconds} = this.state;
        return (
            <div>
                <Clock totalSeconds={totalSeconds}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
}

module.exports = Countdown;
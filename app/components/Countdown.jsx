var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');


class Countdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalSeconds: 0,
            countdownStatus: 'stopped'
        };

        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.countdownTimer;
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus){
            switch (this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                default:
                    break;
            }
        }
    }

    startTimer = () => {
        console.log('Count down started');
        this.countdownTimer = setInterval(() => {
            var newTotalSeconds = this.state.totalSeconds - 1;
            this.setState({
                totalSeconds: newTotalSeconds >= 0 ? newTotalSeconds : 0,
            });

            if (newTotalSeconds === 0) {
                this.stopTimer();
            }
        }, 1000);
    }

    stopTimer = () => {
        clearInterval(this.countdownTimer);
        this.setState({
            countdownStatus: 'stopped',
        });
        console.log('Count down stopped');
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            totalSeconds: seconds,
            countdownStatus: 'started'
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
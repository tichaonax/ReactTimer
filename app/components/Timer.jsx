var React = require('react');
var Clock = require('Clock')
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSeconds : 126
        }
    }

    render() {
        var {totalSeconds} = this.state;
        return (
            <div>
                <h1 className="text-center page-title">Timer</h1>
                <Clock totalSeconds={totalSeconds}/>
            </div>
        );
    }
}

module.exports = Timer;
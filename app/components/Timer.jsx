var React = require('react');

class Timer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="text-center page-title">Timer</h1>
            </div>
        );
    }
}

module.exports = Timer;
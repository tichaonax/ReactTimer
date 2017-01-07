var React = require('react');

class Countdown extends React.Component {
    constructor(props) {
        super(props);
     }

    render() {
        return (
            <div>
                <h1 className="text-center page-title">Count Down</h1>
            </div>
        );
    }
}

module.exports = Countdown;
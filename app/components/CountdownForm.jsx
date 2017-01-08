var React = require('react');
var Clock = require('Clock')
class CountdownForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        var strSeconds = this.refs.seconds.value;

        //validate for numbers only
        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }

    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Eenter time in seconds"/>
                    <button type="submit" className="button expanded hollow">Count Down</button>
                </form>
            </div>
        );
    }
}

module.exports = CountdownForm;
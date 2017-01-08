var React = require('react');
var Navigation = require('Navigation');

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className="row">
                    <div className="column small-centered medium-6 large-4" >
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Main;
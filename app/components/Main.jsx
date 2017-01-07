var React = require('react');
var Navigation = require('Navigation');

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Navigation/>
                    <div>
                        <p>Main.jsx Rendered</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Main;
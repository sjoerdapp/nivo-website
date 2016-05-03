import React, { Component, PropTypes } from 'react';


class ChartControls extends Component {
    constructor(props) {
        super(props);

        this.handleToggleClick = this.handleToggleClick.bind(this);

        this.state = { expanded: true };
    }

    handleToggleClick() {
        const { expanded } = this.state;
        this.setState({ expanded: !expanded });
    }

    render() {
        const { chartClass, children } = this.props;
        const { expanded }             = this.state;

        return (
            <div className={`chart-controls ${expanded ? '_is-expanded' : ''}`}>
                <div className="chart-controls_header" onClick={this.handleToggleClick}>
                    <h3>&lt;{chartClass} /&gt;</h3>
                    <span className="chart-controls_toggle" />
                </div>
                {expanded && (
                    <div className="chart-controls_body">
                        {children}
                    </div>
                )}
            </div>
        );
    }
}


export default ChartControls;

import React, { Component, PropTypes } from 'react';


class CollapsibleCard extends Component {
    constructor(props) {
        super(props);

        this.handleToggleClick = this.handleToggleClick.bind(this);

        this.state = {
            expanded: props.expandedByDefault
        };
    }

    handleToggleClick() {
        const { expanded } = this.state;
        this.setState({ expanded: !expanded });
    }

    render() {
        const { title, children } = this.props;
        const { expanded }        = this.state;

        return (
            <div className={`card ${expanded ? '_is-expanded' : ''}`}>
                <div className="card_header" onClick={this.handleToggleClick}>
                    <h3>{title}</h3>
                    <span className="card_toggle" />
                </div>
                {expanded && (
                    <div className="card_body">
                        {children}
                    </div>
                )}
            </div>
        );
    }
}

const { bool } = PropTypes;

CollapsibleCard.propTypes = {
    expandedByDefault: bool.isRequired,
};

CollapsibleCard.defaultProps = {
    expandedByDefault: false
};


export default CollapsibleCard;

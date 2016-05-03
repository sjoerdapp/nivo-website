import React, { Component, PropTypes } from 'react';
import classNames                      from 'classnames'
import Nivo                            from 'nivo';


const offsets = [
    'zero',
    'wiggle',
    'silhouette',
    'expand'
];


class StackOffsetControl extends Component {
    constructor(props) {
        super(props);

        this.handleOffsetChange = this.handleOffsetChange.bind(this);
    }

    handleOffsetChange(e) {
        const { onChange } = this.props;
        onChange(e.target.value);
    }

    render() {
        const { value, onChange } = this.props;

        return (
            <div className="control control-stack-offset">
                <label>
                    offset: <code className="code code-string">"{value}"</code>
                </label>
                <div className="control-help">Stacking offset type.</div>
                <div>
                    <select value={value} onChange={this.handleOffsetChange}>
                        {offsets.map(offset => (
                            <option key={offset} value={offset}>{offset}</option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

const { func, oneOf } = PropTypes;

StackOffsetControl.propTypes = {
    onChange: func.isRequired,
    value:    oneOf(offsets).isRequired
};

StackOffsetControl.defaultProps = {
};


export default StackOffsetControl;

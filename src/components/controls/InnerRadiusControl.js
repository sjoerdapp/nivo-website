import React, { Component, PropTypes } from 'react';


class InnerRadiusControl extends Component {
    constructor(props) {
        super(props);

        this.handleInnerRadiusUpdate = this.handleInnerRadiusUpdate.bind(this);
    }

    handleInnerRadiusUpdate(e) {
        const { onChange } = this.props;
        const innerRadius = e.target.value === '0' ? 0 : parseFloat(e.target.value);
        onChange(innerRadius);
    }

    render() {
        const { radius, help, value } = this.props;

        const outerCircleStyle = {
            position:     'relative',
            background:   '#e25d47',
            width:        radius * 2,
            height:       radius * 2,
            borderRadius: radius
        };

        const innerRadius = radius * value;

        const innerRadiusStyle = {
            position:     'absolute',
            background:   '#ddd',
            top:          radius - innerRadius,
            left:         radius - innerRadius,
            width:        innerRadius * 2,
            height:       innerRadius * 2,
            borderRadius: innerRadius
        };

        /*
        <div>
            <div style={outerCircleStyle}>
                <div style={innerRadiusStyle} />
            </div>
        </div>
        */

        return (
            <div className="control control-inner-radius">
                <label>
                    innerRadius: <code className="code code-number">{value}</code>
                </label>
                <div className="control-help">{help}</div>
                <input
                    type="range"
                    min="0" max="0.9" step="0.1"
                    value={value}
                    onChange={this.handleInnerRadiusUpdate}
                />
            </div>
        );
    }
}

const { number, node } = PropTypes;

InnerRadiusControl.propTypes = {
    radius: number.isRequired,
    help:   node.isRequired
};

InnerRadiusControl.defaultProps = {
    radius: 16,
    help:   'Chart inner radius.'
};


export default InnerRadiusControl;

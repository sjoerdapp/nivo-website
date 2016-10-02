import React, { Component, PropTypes } from 'react';


const getModifierGamma = directive => {
    let gamma = 1;

    const inheritMatches = directive.match(/inherit:(darker|brighter)\(([0-9.]+)\)/);
    if (inheritMatches) {
        gamma = parseFloat(inheritMatches[2]);
    }

    return gamma;
};


class ColorControl extends Component {
    constructor(props) {
        super(props);

        this.handleColorChange = this.handleColorChange.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value;
    }

    handleColorChange() {
        let value;
        let directive = this.refs.directive.value;

        if (directive.indexOf('inherit:darker') === 0 || directive.indexOf('inherit:brighter') === 0) {
            const gamma = this.refs.gamma ? this.refs.gamma.value : 1;
            value = `${directive}(${gamma})`;
        } else {
            value = directive;
        }

        const { onChange } = this.props;
        onChange(value);
    }

    render() {
        const { value, label, help } = this.props;

        let requireAmount = false;
        let selectValue   = value;
        let gamma         = 1;

        if (value.indexOf('inherit:darker') === 0) {
            selectValue   = 'inherit:darker';
            requireAmount = true;
            gamma         = getModifierGamma(value);

        } else if (value.indexOf('inherit:brighter') === 0) {
            selectValue   = 'inherit:brighter';
            requireAmount = true;
            gamma         = getModifierGamma(value);
        }

        return (
            <div className="control control-color">
                <label>
                    {label}: <code className="code code-string">"{value}"</code>
                </label>
                <div className="control-help">{help}</div>
                <div>
                    <select ref="directive" value={selectValue} onChange={this.handleColorChange}>
                        <option value="none">none</option>
                        <option value="inherit">inherit</option>
                        <option value="inherit:darker">inherit:darker</option>
                        <option value="inherit:brighter">inherit:brighter</option>
                    </select>
                </div>
                {requireAmount && (
                    <div>
                        <div className="control-help">Adjust gamma.</div>
                        <input
                            ref="gamma"
                            type="range"
                            min="0" max="4" step="0.1"
                            value={gamma}
                            onChange={this.handleColorChange}
                        />
                    </div>
                )}
            </div>
        )
    }
}

const { string, func, node } = PropTypes

ColorControl.propTypes = {
    label:    string.isRequired,
    help:     node.isRequired,
    onChange: func.isRequired,
};

ColorControl.defaultProps = {
    label: 'color',
    help:  'Color directive.',
}


export default ColorControl

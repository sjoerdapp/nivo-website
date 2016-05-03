import React, { Component, PropTypes } from 'react';
import classNames                      from 'classnames'
import Nivo                            from 'nivo';


class ColorControl extends Component {
    constructor(props) {
        super(props);

        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleColorChange(e) {
        const { onChange } = this.props;

        let value = e.target.value;
        if (value.indexOf('inherit:darker') === 0 || value.indexOf('inherit:brighter') === 0) {
            value = `${value}(.8)`;
        }

        onChange(value);
    }

    render() {
        const { value, label, help, onChange } = this.props;

        let requireAmount = false;
        let selectValue   = value;

        if (value.indexOf('inherit:darker') === 0) {
            selectValue   = 'inherit:darker';
            requireAmount = true;
        } else if (value.indexOf('inherit:brighter') === 0) {
            selectValue   = 'inherit:brighter';
            requireAmount = true;
        }

        return (
            <div className="control control-color">
                <label>
                    {label}: <code className="code code-string">"{value}"</code>
                </label>
                <div className="control-help">{help}</div>
                <div>
                    <select value={selectValue} onChange={this.handleColorChange}>
                        <option value="none">none</option>
                        <option value="inherit">inherit</option>
                        <option value="inherit:darker">inherit:darker</option>
                        <option value="inherit:brighter">inherit:brighter</option>
                    </select>
                    {requireAmount && (
                        <input type="text" />
                    )}
                </div>
            </div>
        );
    }
}

const { string, func, node } = PropTypes;

ColorControl.propTypes = {
    label:    string.isRequired,
    help:     node.isRequired,
    onChange: func.isRequired
};

ColorControl.defaultProps = {
    label: 'color',
    help:  'Color directive.'
};


export default ColorControl;

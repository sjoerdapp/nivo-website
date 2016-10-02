import React, { Component, PropTypes } from 'react'
import _                               from 'lodash'


class SliderControl extends Component {
    render() {
        const {
            id,
            label,
            value,
            onChange,
            help,
        } = this.props

        return (
            <div className="chart-controls_item">
                <label htmlFor={id}>
                    {label}: <code className="code code-number">{value}</code>
                </label><br />
                <input
                    id={id}
                    type="range"
                    value={value}
                    onChange={onChange}
                    {..._.pick(this.props, ['min', 'max', 'step'])}
                />
                <div className="control-help">{help}</div>
            </div>
        )
    }
}

SliderControl.propTypes = {
    id:       PropTypes.string.isRequired,
    label:    PropTypes.string.isRequired,
    value:    PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    help:     PropTypes.string.isRequired,
    min:      PropTypes.number.isRequired,
    max:      PropTypes.number.isRequired,
    step:     PropTypes.number,
}


export default SliderControl
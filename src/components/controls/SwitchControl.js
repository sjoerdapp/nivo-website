import React, { Component, PropTypes } from 'react'


class SwitchControl extends Component {
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
                <span className="control-switch">
                    <input
                        className="cmn-toggle"
                        id={id}
                        type="checkbox"
                        checked={value}
                        onChange={onChange}
                    />
                    <label htmlFor={id} />
                </span>
                &nbsp;
                <label htmlFor={id}>{label}</label>
                <div className="control-help">{help}</div>
            </div>
        )
    }
}

SwitchControl.propTypes = {
    id:       PropTypes.string.isRequired,
    label:    PropTypes.string.isRequired,
    value:    PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    help:     PropTypes.string.isRequired,
}


export default SwitchControl
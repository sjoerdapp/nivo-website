import React, { Component, PropTypes } from 'react';
import classNames                      from 'classnames'
import Nivo                            from 'nivo';


const colors = [
    { id: 'nivo',  colors: Nivo.colors.nivoCategoricalColors().range() },
    { id: 'd310',  colors: d3.scale.category10().range() },
    { id: 'd320',  colors: d3.scale.category20().range() },
    { id: 'd320b', colors: d3.scale.category20b().range() },
    { id: 'd320c', colors: d3.scale.category20c().range() }
];


class ColorsControl extends Component {
    constructor(props) {
        super(props);

        this.handleColorsChange = this.handleColorsChange.bind(this);
    }

    handleColorsChange(e) {
        const { onChange } = this.props;
        onChange(e.target.value);
    }

    render() {
        const { value, onChange } = this.props;

        return (
            <div className="control control-colors">
                <label>
                    colors: <code className="code code-string">"{value}"</code>
                </label>
                <div className="control-help">Chart color range.</div>
                <div>
                    {colors.map(({ id, colors }) => (
                        <div
                            key={id}
                            className={classNames('control-colors_colors', {
                                '_is-current': value === id
                            })}
                            onClick={() => onChange(id)}
                        >
                            {colors.map(color => (
                                <span
                                    key={color}
                                    className="control-colors_colors_item"
                                    style={{ background: color }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const { func, oneOf } = PropTypes;

ColorsControl.propTypes = {
    onChange: func.isRequired
};

ColorsControl.defaultProps = {
};


export default ColorsControl;

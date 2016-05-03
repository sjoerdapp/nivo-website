import React, { Component, PropTypes } from 'react';
import Nivo                            from 'nivo';
import ColorsControlItem               from './ColorsControlItem';


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

    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value;
    }

    handleColorsChange(id) {
        const { onChange } = this.props;
        onChange(id);
    }

    render() {
        const { value } = this.props;

        return (
            <div className="control control-colors">
                <label>
                    colors: <code className="code code-string">"{value}"</code>
                </label>
                <div className="control-help">Chart color range.</div>
                <div>
                    {colors.map(({ id, colors }) => (
                        <ColorsControlItem
                            key={id} id={id}
                            colors={colors}
                            isCurrent={value === id}
                            onClick={this.handleColorsChange}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

const { func, string } = PropTypes;

ColorsControl.propTypes = {
    onChange: func.isRequired,
    value:    string.isRequired
};


export default ColorsControl;

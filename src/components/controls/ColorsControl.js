import React, { Component, PropTypes } from 'react'
import Nivo                            from 'nivo'
import ColorsControlItem               from './ColorsControlItem'
import {
    schemeCategory10,
    schemeCategory20,
    schemeCategory20b,
    schemeCategory20c,
} from 'd3'
import {
    schemeAccent,
    schemeDark2,
    schemePaired,
    schemePastel1,
    schemePastel2,
    schemeSet1,
    schemeSet2,
    schemeSet3,
} from 'd3-scale-chromatic'


const colors = [
    { id: 'nivo',    colors: Nivo.colors.nivoCategoricalColors().range() },
    { id: 'd310',    colors: schemeCategory10 },
    { id: 'd320',    colors: schemeCategory20 },
    { id: 'd320b',   colors: schemeCategory20b },
    { id: 'd320c',   colors: schemeCategory20c },
    { id: 'accent',  colors: schemeAccent },
    { id: 'dark2',   colors: schemeDark2 },
    { id: 'paired',  colors: schemePaired },
    { id: 'pastel1', colors: schemePastel1 },
    { id: 'pastel2', colors: schemePastel2 },
    { id: 'set1',    colors: schemeSet1 },
    { id: 'set2',    colors: schemeSet2 },
    { id: 'set3',    colors: schemeSet3 },
]


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

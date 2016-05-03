import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import ChartControls                   from '../ChartControls';
import ColorsControl                   from '../controls/ColorsControl';
import StackOffsetControl              from '../controls/StackOffsetControl';


class StackControls extends Component {
    constructor(props) {
        super(props);

        this.handleOffsetUpdate = this.handleOffsetUpdate.bind(this);
        this.handleColorsUpdate = this.handleColorsUpdate.bind(this);
    }

    handleColorsUpdate(colors) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { colors }));
    }

    handleOffsetUpdate(offset) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { offset }));
    }

    render() {
        const { settings } = this.props;

        return (
            <div>
                <ChartControls chartClass="Stack">
                    <div className="chart-controls_item">
                        <StackOffsetControl
                            value={settings.offset}
                            onChange={this.handleOffsetUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <ColorsControl
                            value={settings.colors}
                            onChange={this.handleColorsUpdate}
                        />
                    </div>
                </ChartControls>
            </div>
        );
    }
}

const { func } = PropTypes;

StackControls.propTypes = {
    onSettingsUpdate: func.isRequired
};

StackControls.defaultProps = {
};


export default StackControls;

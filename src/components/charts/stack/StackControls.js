import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import CollapsibleCard                 from '../../CollapsibleCard';
import ColorsControl                   from '../../controls/ColorsControl';
import ColorControl                    from '../../controls/ColorControl';
import StackOffsetControl              from '../../controls/StackOffsetControl';


class StackControls extends Component {
    constructor(props) {
        super(props);

        this.handleOffsetUpdate          = this.handleOffsetUpdate.bind(this);
        this.handleColorsUpdate          = this.handleColorsUpdate.bind(this);
        this.handleOverColorUpdate       = this.handleOverColorUpdate.bind(this);
        this.handleControlsSpacingUpdate = this.handleControlsSpacingUpdate.bind(this);
    }

    handleOffsetUpdate(offset) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { offset }));
    }

    handleColorsUpdate(colors) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { colors }));
    }

    handleOverColorUpdate(overColor) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { overColor }));
    }

    handleControlsSpacingUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            controlsSpacing: parseInt(e.target.value, 10)
        }));
    }

    render() {
        const { settings } = this.props;

        return (
            <CollapsibleCard title="<Stack /> settings" expandedByDefault={true}>
                <div className="chart-controls">
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
                    <div className="chart-controls_item">
                        <ColorControl
                            label="overColor"
                            help="Method to compute area color on mouse over."
                            value={settings.overColor}
                            onChange={this.handleOverColorUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            controlsSpacing: <code className="code code-number">{settings.controlsSpacing}</code>
                        </label>
                        <div className="control-help">Define spacing from chart bounding box to layer controls.</div>
                        <input
                            type="range"
                            min="0" max="60" step="1"
                            value={settings.controlsSpacing}
                            onChange={this.handleControlsSpacingUpdate}
                        />
                    </div>
                </div>
            </CollapsibleCard>
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

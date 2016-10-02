import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import CollapsibleCard                 from '../CollapsibleCard';
import InnerRadiusControl              from '../controls/InnerRadiusControl';
import ColorsControl                   from '../controls/ColorsControl';
import LabelPositionControl            from '../controls/LabelPositionControl';
import StackOffsetControl              from '../controls/StackOffsetControl';


/**
 * THis component is used to configure a nivo RadialStack chart.
 */
class RadialStackControls extends Component {
    constructor(props) {
        super(props);

        this.handleOffsetUpdate        = this.handleOffsetUpdate.bind(this);
        this.handleAngleAxisToggle     = this.handleAngleAxisToggle.bind(this);
        this.handleInnerRadiusUpdate   = this.handleInnerRadiusUpdate.bind(this);
        this.handleColorsUpdate        = this.handleColorsUpdate.bind(this);
        this.handleLabelPositionUpdate = this.handleLabelPositionUpdate.bind(this);
        this.handleLabelOffsetUpdate   = this.handleLabelOffsetUpdate.bind(this);
        this.handleLabelRotationUpdate = this.handleLabelRotationUpdate.bind(this);
    }

    handleAngleAxisToggle(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            angleAxis: e.target.checked
        }));
    }

    handleInnerRadiusUpdate(innerRadius) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { innerRadius }));
    }

    handleColorsUpdate(colors) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { colors }));
    }

    handleOffsetUpdate(offset) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { offset }));
    }

    handleLabelPositionUpdate(labelPosition) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { labelPosition }));
    }

    handleLabelOffsetUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            labelOffset: parseInt(e.target.value, 10)
        }));
    }

    handleLabelRotationUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            labelRotation: parseInt(e.target.value, 10)
        }));
    }

    render() {
        const { settings } = this.props;

        return (
            <div>
                <CollapsibleCard title="<RadialStack /> settings" expandedByDefault={true}>
                    <div className="chart-controls">
                        <div className="chart-controls_item">
                            <StackOffsetControl
                                value={settings.offset}
                                onChange={this.handleOffsetUpdate}
                            />
                        </div>
                        <div className="chart-controls_item">
                            <InnerRadiusControl
                                value={settings.innerRadius}
                                onChange={this.handleInnerRadiusUpdate}
                            />
                        </div>
                        <div className="chart-controls_item">
                            <ColorsControl
                                value={settings.colors}
                                onChange={this.handleColorsUpdate}
                            />
                        </div>
                    </div>
                </CollapsibleCard>
                <CollapsibleCard title="<RadialStackAngleAxis /> settings">
                    <div className="chart-controls">
                        <div className="chart-controls_item">
                            labelPosition: <code className="code code-string">"{settings.labelPosition}"</code>
                            <div className="control-help">Define label positioning.</div>
                            <LabelPositionControl
                                value={settings.labelPosition}
                                onChange={this.handleLabelPositionUpdate}
                            />
                        </div>
                        <div className="chart-controls_item">
                            <label>
                                labelRotation: <code className="code code-number">{settings.labelRotation}</code>
                            </label>
                            <div className="control-help">Rotation of labels.</div>
                            <input
                                type="range"
                                min="0" max="360" step="10"
                                value={settings.labelRotation}
                                onChange={this.handleLabelRotationUpdate}
                            />
                        </div>
                        <div className="chart-controls_item">
                            labelOffset: <code className="code code-number">{settings.labelOffset}</code>
                            <div className="control-help">Label offset from line end.</div>
                            <input
                                type="range"
                                min="0" max="30" step="1"
                                value={settings.labelOffset}
                                onChange={this.handleLabelOffsetUpdate}
                            />
                        </div>
                    </div>
                </CollapsibleCard>
            </div>
        );
    }
}

const { func } = PropTypes;

RadialStackControls.propTypes = {
    onSettingsUpdate: func.isRequired
};

RadialStackControls.defaultProps = {
};


export default RadialStackControls;

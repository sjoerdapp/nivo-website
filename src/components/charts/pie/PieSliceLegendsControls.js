import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import CollapsibleCard                 from '../../CollapsibleCard';
import ColorControl                    from '../../controls/ColorControl';


/**
 * This component is used to configure a nivo PieSliceLegends component.
 */
class PieSliceLegendsControls extends Component {
    constructor(props) {
        super(props);

        this.handleRadiusUpdate     = this.handleRadiusUpdate.bind(this);
        this.handleBadgeColorUpdate = this.handleBadgeColorUpdate.bind(this);
        this.handleTextColorUpdate  = this.handleTextColorUpdate.bind(this);
    }

    handleRadiusUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            radius: parseInt(e.target.value, 10)
        }));
    }

    handleBadgeColorUpdate(badgeColor) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { badgeColor }));
    }

    handleTextColorUpdate(textColor) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { textColor }));
    }

    render() {
        const { settings } = this.props;

        /*
         labelFn:            func,
         orient:             bool.isRequired,
         */

        return (
            <CollapsibleCard title="<PieSliceLegends /> settings" expandedByDefault={true}>
                <div className="chart-controls">
                    <div className="chart-controls_item">
                        <label>
                            radius: <code className="code code-number">{settings.radius}</code>
                        </label>
                        <div className="control-help">Badge radius.</div>
                        <input
                            type="range"
                            min="0" max="60" step="1"
                            value={settings.radius}
                            onChange={this.handleRadiusUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <ColorControl
                            label="badgeColor"
                            help="Method to compute badge color."
                            value={settings.badgeColor}
                            onChange={this.handleBadgeColorUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <ColorControl
                            label="textColor"
                            help="Method to compute text color."
                            value={settings.textColor}
                            onChange={this.handleTextColorUpdate}
                        />
                    </div>
                </div>
            </CollapsibleCard>
        );
    }
}

const { object, func } = PropTypes;

PieSliceLegendsControls.propTypes = {
    settings:         object.isRequired,
    onSettingsUpdate: func.isRequired
};


export default PieSliceLegendsControls;

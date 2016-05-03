import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import ChartControls                   from '../ChartControls';
import LabelPositionControl            from '../controls/LabelPositionControl';
import ColorsControl                   from '../controls/ColorsControl';


class TreeControls extends Component {
    constructor(props) {
        super(props);

        this.handleDirectionUpdate                 = this.handleDirectionUpdate.bind(this);
        this.handleColorsUpdate                    = this.handleColorsUpdate.bind(this);
        this.handleRootLabelPositionUpdate         = this.handleRootLabelPositionUpdate.bind(this);
        this.handleIntermediateLabelPositionUpdate = this.handleIntermediateLabelPositionUpdate.bind(this);
        this.handleLeafLabelPositionUpdate         = this.handleLeafLabelPositionUpdate.bind(this);
    }

    handleColorsUpdate(colors) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { colors }));
    }

    handleDirectionUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            direction: e.target.value
        }));
    }

    handleRootLabelPositionUpdate(rootLabelPosition) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { rootLabelPosition }));
    }

    handleIntermediateLabelPositionUpdate(intermediateLabelPosition) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { intermediateLabelPosition }));
    }

    handleLeafLabelPositionUpdate(leafLabelPosition) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { leafLabelPosition }));
    }

    render() {
        const { settings } = this.props;

        return (
            <div>
                <ChartControls chartClass="Tree">
                    <div className="grid_item grid_item-1_2">
                        direction&nbsp;
                        <div className="control-help">Tree direction.</div>
                        <select value={settings.direction} onChange={this.handleDirectionUpdate}>
                            <option value="horizontal">horizontal</option>
                            <option value="horizontal-reverse">horizontal-reverse</option>
                            <option value="vertical">vertical</option>
                            <option value="vertical-reverse">vertical-reverse</option>
                        </select>
                    </div>
                    <div className="grid_item grid_item-1_2">
                        <ColorsControl
                            value={settings.colors}
                            onChange={this.handleColorsUpdate}
                        />
                    </div>
                    <div className="grid_item grid_item-full">
                        root label
                    </div>
                    <div className="grid_item grid_item-1_2">
                        position&nbsp;
                        <LabelPositionControl
                            value={settings.rootLabelPosition}
                            onChange={this.handleRootLabelPositionUpdate}
                        />
                    </div>
                    <div className="grid_item grid_item-full">
                        intermediate label
                    </div>
                    <div className="grid_item grid_item-1_2">
                        position&nbsp;
                        <LabelPositionControl
                            value={settings.intermediateLabelPosition}
                            onChange={this.handleIntermediateLabelPositionUpdate}
                        />
                    </div>
                    <div className="grid_item grid_item-full">
                        leaf label
                    </div>
                    <div className="grid_item grid_item-1_2">
                        position&nbsp;
                        <LabelPositionControl
                            value={settings.leafLabelPosition}
                            onChange={this.handleLeafLabelPositionUpdate}
                        />
                    </div>
                </ChartControls>
            </div>
        );
    }
}

const { func } = PropTypes;

TreeControls.propTypes = {
    onSettingsUpdate: func.isRequired
};

TreeControls.defaultProps = {
};


export default TreeControls;

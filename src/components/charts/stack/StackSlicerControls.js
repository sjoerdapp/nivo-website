import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import ChartControls                   from '../../ChartControls';
import ColorControl                    from '../../controls/ColorControl';


class StackSlicerControls extends Component {
    constructor(props) {
        super(props);

        this.handleShowOnOverUpdate     = this.handleShowOnOverUpdate.bind(this);
        this.handleRadiusUpdate         = this.handleRadiusUpdate.bind(this);
        this.handleColorUpdate          = this.handleColorUpdate.bind(this);
        this.handleDotBorderWidthUpdate = this.handleDotBorderWidthUpdate.bind(this);
        this.handleDotBorderColorUpdate = this.handleDotBorderColorUpdate.bind(this);
        this.handleLineWidthUpdate      = this.handleLineWidthUpdate.bind(this);
        this.handleLineColorUpdate      = this.handleLineColorUpdate.bind(this);
    }

    handleShowOnOverUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            showOnOver: e.target.checked
        }));
    }

    handleRadiusUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            radius: parseInt(e.target.value, 10)
        }));
    }

    handleColorUpdate(color) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { color }));
    }

    handleDotBorderWidthUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            dotBorderWidth: parseInt(e.target.value, 10)
        }));
    }

    handleDotBorderColorUpdate(dotBorderColor) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { dotBorderColor }));
    }

    handleLineWidthUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            lineWidth: parseInt(e.target.value, 10)
        }));
    }

    handleLineColorUpdate(lineColor) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { lineColor }));
    }

    render() {
        const { settings } = this.props;

        return (
            <div>
                <ChartControls chartClass="StackSlicer">
                    <div className="chart-controls_item">
                        <span className="control-switch">
                            <input
                                className="cmn-toggle"
                                id="stack-dots-show-on-over"
                                type="checkbox"
                                checked={settings.showOnOver}
                                onChange={this.handleShowOnOverUpdate}
                            />
                            <label htmlFor="stack-dots-show-on-over" />
                        </span>
                        &nbsp;
                        <label htmlFor="stack-dots-show-on-over">showOnOver</label>
                        <div className="control-help">Only show dots on mouseover.</div>
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            radius: <code className="code code-number">{settings.radius}</code>
                        </label>
                        <div className="control-help">Define dots radius.</div>
                        <input
                            type="range"
                            min="2" max="20" step="1"
                            value={settings.radius}
                            onChange={this.handleRadiusUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <ColorControl
                            label="color"
                            help="Method to compute dot color."
                            value={settings.color}
                            onChange={this.handleColorUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            dotBorderWidth: <code className="code code-number">{settings.dotBorderWidth}</code>
                        </label>
                        <div className="control-help">Define dots border width.</div>
                        <input
                            type="range"
                            min="0" max="10" step="1"
                            value={settings.dotBorderWidth}
                            onChange={this.handleDotBorderWidthUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <ColorControl
                            label="dotBorderColor"
                            help="Method to compute dot border color."
                            value={settings.dotBorderColor}
                            onChange={this.handleDotBorderColorUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            lineWidth: <code className="code code-number">{settings.lineWidth}</code>
                        </label>
                        <div className="control-help">Define line width.</div>
                        <input
                            type="range"
                            min="0" max="10" step="1"
                            value={settings.lineWidth}
                            onChange={this.handleLineWidthUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <ColorControl
                            label="lineColor"
                            help="Method to compute line color."
                            value={settings.lineColor}
                            onChange={this.handleLineColorUpdate}
                        />
                    </div>
                </ChartControls>
            </div>
        );
    }
}

const { object, func } = PropTypes;

StackSlicerControls.propTypes = {
    settings:         object.isRequired,
    onSettingsUpdate: func.isRequired
};


export default StackSlicerControls;

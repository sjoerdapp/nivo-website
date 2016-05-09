import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import ChartControls                   from '../../ChartControls';
import ColorsControl                   from '../../controls/ColorsControl';
import ColorControl                    from '../../controls/ColorControl';


/**
 * This component is used to configure a nivo Bubble chart.
 */
class BubbleControls extends Component {
    constructor(props) {
        super(props);

        this.handlePaddingUpdate         = this.handlePaddingUpdate.bind(this);
        this.handleColorsUpdate          = this.handleColorsUpdate.bind(this);
        this.handleBorderColorUpdate     = this.handleBorderColorUpdate.bind(this);
        this.handleBorderWidthUpdate     = this.handleBorderWidthUpdate.bind(this);
        this.handleLabelTextColorUpdate  = this.handleLabelTextColorUpdate.bind(this);
        this.handleLabelTextDYUpdate     = this.handleLabelTextDYUpdate.bind(this);
        this.handleLabelSkipRadiusUpdate = this.handleLabelSkipRadiusUpdate.bind(this);
        this.handleStiffnessUpdate       = this.handleStiffnessUpdate.bind(this);
        this.handleDampingUpdate         = this.handleDampingUpdate.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.settings !== this.props.settings;
    }

    handlePaddingUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            padding: parseInt(e.target.value, 10)
        }));
    }

    handleColorsUpdate(colors) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, { colors }));
    }

    handleLabelSkipRadiusUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            labelSkipRadius: parseInt(e.target.value, 10)
        }));
    }

    handleBorderWidthUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            borderWidth: parseInt(e.target.value, 10)
        }));
    }

    handleBorderColorUpdate(borderColor) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, { borderColor }));
    }

    handleLabelTextColorUpdate(labelTextColor) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, { labelTextColor }));
    }

    handleLabelTextDYUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            labelTextDY: parseInt(e.target.value, 10)
        }));
    }

    handleStiffnessUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            stiffness: parseInt(e.target.value, 10)
        }));
    }

    handleDampingUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            damping: parseInt(e.target.value, 10)
        }));
    }

    render() {
        const { settings } = this.props;

        return (
            <div>
                <ChartControls chartClass="Bubble">
                    <div className="chart-controls_item">
                        <label>
                            padding: <code className="code code-number">{settings.padding}</code>
                        </label>
                        <div className="control-help">Padding between each circle.</div>
                        <input
                            type="range"
                            min="0" max="32" step="1"
                            value={settings.padding}
                            onChange={this.handlePaddingUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <ColorsControl
                            value={settings.colors}
                            onChange={this.handleColorsUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            borderWidth: <code className="code code-number">{settings.borderWidth}</code>
                        </label>
                        <div className="control-help">Width of circle border.</div>
                        <input
                            type="range"
                            min="0" max="10" step="1"
                            value={settings.borderWidth}
                            onChange={this.handleBorderWidthUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <ColorControl
                            label="borderColor"
                            help="Method to compute border color."
                            value={settings.borderColor}
                            onChange={this.handleBorderColorUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <ColorControl
                            label="labelTextColor"
                            help="Method to compute legend text color."
                            value={settings.labelTextColor}
                            onChange={this.handleLabelTextColorUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            labelTextDY: <code className="code code-number">{settings.labelTextDY}</code>
                        </label>
                        <div className="control-help">Label y offset, used to vertically center text.</div>
                        <input
                            type="range"
                            min="-12" max="12" step="1"
                            value={settings.labelTextDY}
                            onChange={this.handleLabelTextDYUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            labelSkipRadius: <code className="code code-number">{settings.labelSkipRadius}</code>
                        </label>
                        <div className="control-help">Skip label rendering if node radius is lower than given value, 0 to disable.</div>
                        <input
                            type="range"
                            min="0" max="32" step="1"
                            value={settings.labelSkipRadius}
                            onChange={this.handleLabelSkipRadiusUpdate}
                        />
                    </div>
                </ChartControls>
            </div>
        );
    }
}

const { object, func } = PropTypes;

BubbleControls.propTypes = {
    onChange: func.isRequired,
    settings: object.isRequired
};


export default BubbleControls;

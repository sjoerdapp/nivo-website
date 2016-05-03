import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import ChartControls                   from '../../ChartControls';
import ColorsControl                   from '../../controls/ColorsControl';
import ColorControl                    from '../../controls/ColorControl';


/**
 * THis component is used to configure a nivo Bubble chart.
 */
class BubbleControls extends Component {
    constructor(props) {
        super(props);

        this.handlePaddingUpdate       = this.handlePaddingUpdate.bind(this);
        this.handleEnableFisheyeUpdate = this.handleEnableFisheyeUpdate.bind(this);
        this.handleColorsUpdate        = this.handleColorsUpdate.bind(this);
        this.handleSkipRadiusUpdate    = this.handleSkipRadiusUpdate.bind(this);
        this.handleTextColorUpdate     = this.handleTextColorUpdate.bind(this);
        this.handleStiffnessUpdate     = this.handleStiffnessUpdate.bind(this);
        this.handleDampingUpdate       = this.handleDampingUpdate.bind(this);
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

    handleSkipRadiusUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            skipRadius: parseInt(e.target.value, 10)
        }));
    }

    handleEnableFisheyeUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            enableFisheye: e.target.checked
        }));
    }

    handleTextColorUpdate(textColor) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, { textColor }));
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

        /*
        <div className="chart-controls_item">
            <span className="control-switch">
                <input
                    className="cmn-toggle"
                    id="bubble-fisheye"
                    type="checkbox"
                    checked={settings.enableFisheye}
                    onChange={this.handleEnableFisheyeUpdate}
                />
                <label htmlFor="bubble-fisheye" />
            </span>
            &nbsp;
            <label htmlFor="bubble-fisheye">enableFisheye</label>
            <div className="control-help">Enable fisheye.</div>
        </div>
        */

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
                </ChartControls>
                <ChartControls chartClass="BubbleLegends">
                    <div className="chart-controls_item">
                        <label>
                            skipRadius: <code className="code code-number">{settings.skipRadius}</code>
                        </label>
                        <div className="control-help">Skip label rendering if node radius is lower than given value, 0 to disable.</div>
                        <input
                            type="range"
                            min="0" max="32" step="1"
                            value={settings.skipRadius}
                            onChange={this.handleSkipRadiusUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <ColorControl
                            label="textColor"
                            help="Method to compute legend text color."
                            value={settings.textColor}
                            onChange={this.handleTextColorUpdate}
                        />
                    </div>
                </ChartControls>
            </div>
        );
    }
}

const { func } = PropTypes;

BubbleControls.propTypes = {
    onChange: func.isRequired
};

BubbleControls.defaultProps = {
};


export default BubbleControls;

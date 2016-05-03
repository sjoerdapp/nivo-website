import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import ChartControls                   from '../ChartControls';
import InnerRadiusControl              from '../controls/InnerRadiusControl';
import ColorsControl                   from '../controls/ColorsControl';


/**
 * This component is used to configure a nivo Pie chart.
 */
class PieControls extends Component {
    constructor(props) {
        super(props);

        this.handleInnerRadiusUpdate  = this.handleInnerRadiusUpdate.bind(this);
        this.handleColorsUpdate       = this.handleColorsUpdate.bind(this);
        this.handlePadAngleUpdate     = this.handlePadAngleUpdate.bind(this);
        this.handleCornerRadiusUpdate = this.handleCornerRadiusUpdate.bind(this);
    }

    handleInnerRadiusUpdate(innerRadius) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, { innerRadius }));
    }

    handleColorsUpdate(colors) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, { colors }));
    }

    handlePadAngleUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            padAngle: parseInt(e.target.value, 10)
        }));
    }

    handleCornerRadiusUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            cornerRadius: parseInt(e.target.value, 10)
        }));
    }

    render() {
        const { settings } = this.props;

        return (
            <div>
                <ChartControls chartClass="Pie">
                    <div className="chart-controls_item">
                        <InnerRadiusControl
                            value={settings.innerRadius}
                            onChange={this.handleInnerRadiusUpdate}
                            help='Donut chart if greater than 0.'
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
                            padAngle: <code className="code code-number">{settings.padAngle}</code>
                        </label>
                        <div className="control-help">Padding (deg.) between each pie slice.</div>
                        <input
                            type="range"
                            min="0" max="45" step="1"
                            value={settings.padAngle}
                            onChange={this.handlePadAngleUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            cornerRadius: <code className="code code-number">{settings.cornerRadius}</code>
                        </label>
                        <div className="control-help">Rounded slices.</div>
                        <input
                            type="range"
                            min="0" max="45" step="1"
                            value={settings.cornerRadius}
                            onChange={this.handleCornerRadiusUpdate}
                        />
                    </div>
                </ChartControls>
            </div>
        );
    }
}

const { func } = PropTypes;

PieControls.propTypes = {
    onChange: func.isRequired
};

PieControls.defaultProps = {
};


export default PieControls;

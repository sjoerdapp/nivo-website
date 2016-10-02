import React, { Component, PropTypes } from 'react'
import _                               from 'lodash'
import ColorsControl                   from '../../controls/ColorsControl'
import SwitchControl                   from '../../controls/SwitchControl'
import SliderControl                   from '../../controls/SliderControl'
import CollapsibleCard                 from '../../CollapsibleCard'


/**
 * This component is used to configure a nivo BarsD3 chart.
 */
class BarsD3Controls extends Component {
    constructor(props) {
        super(props)

        this.handleGroupModeUpdate        = this.handleGroupModeUpdate.bind(this)
        this.handleSpacingUpdate          = this.handleSpacingUpdate.bind(this)
        this.handleColorsUpdate           = this.handleColorsUpdate.bind(this)
        this.handleXAxisUpdate            = this.handleXAxisUpdate.bind(this)
        this.handleXAxisOrientationUpdate = this.handleXAxisOrientationUpdate.bind(this)
        this.handleXAxisTickSizeUpdate    = this.handleXAxisTickSizeUpdate.bind(this)
        this.handleXAxisTickPaddingUpdate = this.handleXAxisTickPaddingUpdate.bind(this)
        this.handleYAxisUpdate            = this.handleYAxisUpdate.bind(this)
        this.handleYAxisOrientationUpdate = this.handleYAxisOrientationUpdate.bind(this)
        this.handleYAxisTickSizeUpdate    = this.handleYAxisTickSizeUpdate.bind(this)
        this.handleYAxisTickPaddingUpdate = this.handleYAxisTickPaddingUpdate.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.settings !== this.props.settings
    }

    handleGroupModeUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { groupMode: e.target.value }))
    }

    handleSpacingUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { spacing: parseFloat(e.target.value) }))
    }

    handleColorsUpdate(colors) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { colors }))
    }

    handleXAxisUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { xAxis: e.target.checked }))
    }

    handleXAxisOrientationUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { xAxisOrientation: e.target.value }))
    }

    handleXAxisTickSizeUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { xAxisTickSize: parseInt(e.target.value, 10) }))
    }

    handleXAxisTickPaddingUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { xAxisTickPadding: parseInt(e.target.value, 10) }))
    }

    handleYAxisUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { yAxis: e.target.checked }))
    }

    handleYAxisOrientationUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { yAxisOrientation: e.target.value }))
    }

    handleYAxisTickSizeUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { yAxisTickSize: parseInt(e.target.value, 10) }))
    }

    handleYAxisTickPaddingUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { yAxisTickPadding: parseInt(e.target.value, 10) }))
    }

    render() {
        const { target, settings } = this.props

        return (
            <CollapsibleCard title={`<${target} /> settings`} expandedByDefault={true}>
                <div className="chart-controls">
                    <div className="chart-controls_item">
                        <label>
                            groupMode: <code className="code code-string">"{settings.groupMode}"</code>
                        </label><br />
                        <select
                            value={settings.groupMode}
                            onChange={this.handleGroupModeUpdate}
                        >
                            <option value="stacked">stacked</option>
                            <option value="grouped">grouped</option>
                        </select>
                        <div className="control-help">How to group bars.</div>
                    </div>
                    <SliderControl
                        id="bars-spacing" label="spacing"
                        value={settings.spacing}
                        onChange={this.handleSpacingUpdate}
                        help="Spacing between each group."
                        min={0} max={0.8} step={0.1}
                    />
                    <div style={{ width: '100%' }} />
                    <SwitchControl
                        id="bars-xaxis" label="xAxis"
                        value={settings.xAxis}
                        onChange={this.handleXAxisUpdate}
                        help="Enable/disable x axis."
                    />
                    <div className="chart-controls_item">
                        <label>
                            xAxisOrientation: <code className="code code-string">"{settings.xAxisOrientation}"</code>
                        </label><br />
                        <select
                            value={settings.xAxisOrientation}
                            onChange={this.handleXAxisOrientationUpdate}
                        >
                            <option value="top">top</option>
                            <option value="bottom">bottom</option>
                        </select>
                        <div className="control-help">X axis orientation.</div>
                    </div>
                    <SliderControl
                        id="bars-xaxis-tick-size" label="xAxisTickSize"
                        value={settings.xAxisTickSize}
                        onChange={this.handleXAxisTickSizeUpdate}
                        help="X axis tick size."
                        min={0} max={20}
                    />
                    <SliderControl
                        id="bars-xaxis-tick-padding" label="xAxisTickPadding"
                        value={settings.xAxisTickPadding}
                        onChange={this.handleXAxisTickPaddingUpdate}
                        help="X axis tick padding."
                        min={0} max={20}
                    />
                    <div style={{ width: '100%' }} />
                    <SwitchControl
                        id="bars-yaxis" label="yAxis"
                        value={settings.yAxis}
                        onChange={this.handleYAxisUpdate}
                        help="Enable/disable y axis."
                    />
                    <div className="chart-controls_item">
                        <label>
                            yAxisOrientation: <code className="code code-string">"{settings.yAxisOrientation}"</code>
                        </label><br />
                        <select
                            value={settings.yAxisOrientation}
                            onChange={this.handleYAxisOrientationUpdate}
                        >
                            <option value="left">left</option>
                            <option value="right">right</option>
                        </select>
                        <div className="control-help">Y axis orientation.</div>
                    </div>
                    <SliderControl
                        id="bars-yaxis-tick-size" label="yAxisTickSize"
                        value={settings.yAxisTickSize}
                        onChange={this.handleYAxisTickSizeUpdate}
                        help="Y axis tick size."
                        min={0} max={20}
                    />
                    <SliderControl
                        id="bars-yaxis-tick-padding" label="yAxisTickPadding"
                        value={settings.yAxisTickPadding}
                        onChange={this.handleYAxisTickPaddingUpdate}
                        help="Y axis tick padding."
                        min={0} max={20}
                    />
                    <div style={{ width: '100%' }} />
                    <div className="chart-controls_item">
                        <ColorsControl
                            value={settings.colors}
                            onChange={this.handleColorsUpdate}
                        />
                    </div>
                </div>
            </CollapsibleCard>
        )
    }
}

const { object, oneOf, func } = PropTypes

BarsD3Controls.propTypes = {
    settings: object.isRequired,
    onChange: func.isRequired,
    target:   oneOf([
        'Bars',
        'BarsPlaceholders',
    ]).isRequired,
}


export default BarsD3Controls

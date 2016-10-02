/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

import React, { Component, PropTypes } from 'react'
import _                               from 'lodash'
import ColorsControl                   from '../../controls/ColorsControl'
import SwitchControl                   from '../../controls/SwitchControl'
import SliderControl                   from '../../controls/SliderControl'
import CollapsibleCard                 from '../../CollapsibleCard'


class ChordControls extends Component {
    constructor(props) {
        super(props)

        this.handlePadAngleUpdate          = this.handlePadAngleUpdate.bind(this)
        this.handleInnerRadiusRatioUpdate  = this.handleInnerRadiusRatioUpdate.bind(this)
        this.handleInnerRadiusOffsetUpdate = this.handleInnerRadiusOffsetUpdate.bind(this)
        this.handleColorsUpdate            = this.handleColorsUpdate.bind(this)
        this.handleRibbonBorderWidthUpdate = this.handleRibbonBorderWidthUpdate.bind(this)
        this.handleRibbonOpacityUpdate     = this.handleRibbonOpacityUpdate.bind(this)
        this.handleArcBorderWidthUpdate    = this.handleArcBorderWidthUpdate.bind(this)
        this.handleArcOpacityUpdate        = this.handleArcOpacityUpdate.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.settings !== this.props.settings
    }

    handlePadAngleUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { padAngle: parseFloat(e.target.value) }))
    }

    handleInnerRadiusRatioUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { innerRadiusRatio: parseFloat(e.target.value) }))
    }

    handleInnerRadiusOffsetUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { innerRadiusOffset: parseFloat(e.target.value) }))
    }

    handleColorsUpdate(colors) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { colors }))
    }

    handleRibbonBorderWidthUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { ribbonBorderWidth: parseInt(e.target.value, 10) }))
    }

    handleRibbonOpacityUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { ribbonOpacity: parseFloat(e.target.value) }))
    }

    handleArcBorderWidthUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { arcBorderWidth: parseInt(e.target.value, 10) }))
    }

    handleArcOpacityUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { arcOpacity: parseFloat(e.target.value) }))
    }

    render() {
        const { target, settings } = this.props

        return (
            <CollapsibleCard title="Settings" expandedByDefault={true}>
                <div className="chart-controls">
                    <SliderControl
                        id="chord-pad-angle" label="padAngle"
                        value={settings.padAngle}
                        onChange={this.handlePadAngleUpdate}
                        help="Padding angle."
                        min={0} max={1} step={0.01}
                    />
                    <SliderControl
                        id="chord-inner-radius-ratio" label="innerRadiusRatio"
                        value={settings.innerRadiusRatio}
                        onChange={this.handleInnerRadiusRatioUpdate}
                        help="Inner radius ratio."
                        min={0} max={1} step={0.01}
                    />
                    <SliderControl
                        id="chord-inner-radius-offset" label="innerRadiusOffset"
                        value={settings.innerRadiusOffset}
                        onChange={this.handleInnerRadiusOffsetUpdate}
                        help="Inner radius offset."
                        min={0} max={1} step={0.01}
                    />
                    <div style={{ width: '100%' }} />
                    <SliderControl
                        id="chord-ribbon-opacity" label="ribbonOpacity"
                        value={settings.ribbonOpacity}
                        onChange={this.handleRibbonOpacityUpdate}
                        help="Ribbons opacity."
                        min={0} max={1} step={0.05}
                    />
                    <SliderControl
                        id="chord-ribbon-border-width" label="ribbonBorderWidth"
                        value={settings.ribbonBorderWidth}
                        onChange={this.handleRibbonBorderWidthUpdate}
                        help="Ribbons border width."
                        min={0} max={12} step={1}
                    />
                    <div style={{ width: '100%' }} />
                    <SliderControl
                        id="chord-arc-opacity" label="arcOpacity"
                        value={settings.arcOpacity}
                        onChange={this.handleArcOpacityUpdate}
                        help="Arcs opacity."
                        min={0} max={1} step={0.05}
                    />
                    <SliderControl
                        id="chord-arc-border-width" label="arcBorderWidth"
                        value={settings.arcBorderWidth}
                        onChange={this.handleArcBorderWidthUpdate}
                        help="Arcs border width."
                        min={0} max={12} step={1}
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

ChordControls.propTypes = {
    settings: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    target:   PropTypes.oneOf([
        'Chord',
    ]).isRequired,
}


export default ChordControls

import React, { Component, PropTypes } from 'react'
import _                               from 'lodash'
import ColorsControl                   from '../../controls/ColorsControl'
import ColorControl                    from '../../controls/ColorControl'
import SwitchControl                   from '../../controls/SwitchControl'
import SliderControl                   from '../../controls/SliderControl'
import CollapsibleCard                 from '../../CollapsibleCard'


/**
 * This component is used to configure a nivo Bubble chart.
 */
class BubbleControls extends Component {
    constructor(props) {
        super(props);

        this.handleLeavesOnlyUpdate      = this.handleLeavesOnlyUpdate.bind(this)
        this.handlePaddingUpdate         = this.handlePaddingUpdate.bind(this)
        this.handleColorsUpdate          = this.handleColorsUpdate.bind(this)
        this.handleBorderColorUpdate     = this.handleBorderColorUpdate.bind(this)
        this.handleBorderWidthUpdate     = this.handleBorderWidthUpdate.bind(this)
        this.handleEnableLabelUpdate     = this.handleEnableLabelUpdate.bind(this)
        this.handleLabelTextColorUpdate  = this.handleLabelTextColorUpdate.bind(this)
        this.handleLabelTextDYUpdate     = this.handleLabelTextDYUpdate.bind(this)
        this.handleLabelSkipRadiusUpdate = this.handleLabelSkipRadiusUpdate.bind(this)
        this.handleStiffnessUpdate       = this.handleStiffnessUpdate.bind(this)
        this.handleDampingUpdate         = this.handleDampingUpdate.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.settings !== this.props.settings
    }

    handleLeavesOnlyUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            leavesOnly: e.target.checked
        }))
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

    handleEnableLabelUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            enableLabel: e.target.checked,
        }))
    }

    handleLabelSkipRadiusUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            labelSkipRadius: parseInt(e.target.value, 10),
        }))
    }

    handleBorderWidthUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            borderWidth: parseInt(e.target.value, 10)
        }))
    }

    handleBorderColorUpdate(borderColor) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { borderColor }))
    }

    handleLabelTextColorUpdate(labelTextColor) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { labelTextColor }))
    }

    handleLabelTextDYUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            labelTextDY: parseInt(e.target.value, 10)
        }))
    }

    handleStiffnessUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            stiffness: parseInt(e.target.value, 10)
        }))
    }

    handleDampingUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            damping: parseInt(e.target.value, 10)
        }))
    }

    render() {
        const { settings, target } = this.props

        return (
            <CollapsibleCard title={`<${target} /> settings`} expandedByDefault>
                <div className="chart-controls">
                    <SwitchControl
                        id="bubble-leaves-only"
                        label="leavesOnly"
                        value={settings.leavesOnly}
                        onChange={this.handleLeavesOnlyUpdate}
                        help="Only render leaf nodes (no children)."
                    />
                    <SliderControl
                        id="bubble-padding" label="padding"
                        value={settings.padding}
                        onChange={this.handlePaddingUpdate}
                        help="Padding between each circle."
                        min={0} max={32}
                    />
                    {['Bubble'].includes(target) && (
                        <SliderControl
                            id="bubble-border-width" label="borderWidth"
                            value={settings.borderWidth}
                            onChange={this.handleBorderWidthUpdate}
                            help="Width of circle border."
                            min={0} max={10}
                        />
                    )}
                    {['Bubble'].includes(target) && (
                        <div className="chart-controls_item">
                            <ColorControl
                                label="borderColor"
                                help="Method to compute border color."
                                value={settings.borderColor}
                                onChange={this.handleBorderColorUpdate}
                            />
                        </div>
                    )}
                    {['Bubble'].includes(target) && (
                        <SwitchControl
                            id="bubble-enable-label"
                            label="enableLabel"
                            value={settings.enableLabel}
                            onChange={this.handleEnableLabelUpdate}
                            help="Enable/disable labels."
                        />
                    )}
                    {['Bubble'].includes(target) && (
                        <div className="chart-controls_item">
                            <ColorControl
                                label="labelTextColor"
                                help="Method to compute legend text color."
                                value={settings.labelTextColor}
                                onChange={this.handleLabelTextColorUpdate}
                            />
                        </div>
                    )}
                    {['Bubble'].includes(target) && (
                        <SliderControl
                            id="bubble-label-text-dy" label="labelTextDY"
                            value={settings.labelTextDY}
                            onChange={this.handleLabelTextDYUpdate}
                            help="Label y offset, used to vertically center text."
                            min={-12} max={12}
                        />
                    )}
                    {['Bubble'].includes(target) && (
                        <SliderControl
                            id="bubble-label-skip-radius" label="labelSkipRadius"
                            value={settings.labelSkipRadius}
                            onChange={this.handleLabelSkipRadiusUpdate}
                            help="Skip label rendering if node radius is lower than given value, 0 to disable."
                            min={0} max={32}
                        />
                    )}
                    <div className="chart-controls_item">
                        <ColorsControl
                            value={settings.colors}
                            onChange={this.handleColorsUpdate}
                        />
                    </div>
                </div>
            </CollapsibleCard>
        );
    }
}

const { object, func, oneOf } = PropTypes

BubbleControls.propTypes = {
    onChange: func.isRequired,
    settings: object.isRequired,
    target:   oneOf([
        'Bubble',
        'BubbleD3',
        'BubblePlaceholders',
    ]).isRequired,
}


export default BubbleControls

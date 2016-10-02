import React, { Component, PropTypes } from 'react'
import _                               from 'lodash'
import CollapsibleCard                 from '../../CollapsibleCard'
import ColorsControl                   from '../../controls/ColorsControl'
import ColorControl                    from '../../controls/ColorControl'


class TreeMapControls extends Component {
    constructor(props) {
        super(props)

        this.handleTileUpdate           = this.handleTileUpdate.bind(this)
        this.handleLeavesOnlyUpdate     = this.handleLeavesOnlyUpdate.bind(this)
        this.handleInnerPaddingUpdate   = this.handleInnerPaddingUpdate.bind(this)
        this.handleOuterPaddingUpdate   = this.handleOuterPaddingUpdate.bind(this)
        this.handleEnableLabelsUpdate   = this.handleEnableLabelsUpdate.bind(this)
        this.handleLabelSkipSizeUpdate  = this.handleLabelSkipSizeUpdate.bind(this)
        this.handleOrientLabelsUpdate   = this.handleOrientLabelsUpdate.bind(this)
        this.handleLabelTextColorUpdate = this.handleLabelTextColorUpdate.bind(this)
        this.handleColorsUpdate         = this.handleColorsUpdate.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.settings !== this.props.settings
    }

    handleTileUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            tile: e.target.value,
        }))
    }

    handleLeavesOnlyUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            leavesOnly: e.target.checked,
        }))
    }

    handleInnerPaddingUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            innerPadding: parseInt(e.target.value, 10),
        }))
    }

    handleOuterPaddingUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            outerPadding: parseInt(e.target.value, 10),
        }))
    }

    handleEnableLabelsUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            enableLabels: e.target.checked,
        }))
    }

    handleLabelSkipSizeUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            labelSkipSize: parseInt(e.target.value, 10),
        }))
    }

    handleOrientLabelsUpdate(e) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, {
            orientLabels: e.target.checked,
        }))
    }

    handleLabelTextColorUpdate(labelTextColor) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { labelTextColor }))
    }

    handleColorsUpdate(colors) {
        const { onChange, settings } = this.props
        onChange(_.assign({}, settings, { colors }))
    }

    render() {
        const { settings, target } = this.props

        return (
            <CollapsibleCard title={`<${target} /> settings`} expandedByDefault={true}>
                <div className="chart-controls">
                    <div className="chart-controls_item">
                        <label>
                            tile: <code className="code code-string">"{settings.tile}"</code>
                        </label>
                        <div className="control-help">Strategy used to compute nodes.</div>
                        <select value={settings.tile} onChange={this.handleTileUpdate}>
                            <option value="binary">binary</option>
                            <option value="squarify">squarify</option>
                            <option value="slice">slice</option>
                            <option value="dice">dice</option>
                            <option value="sliceDice">sliceDice</option>
                            <option value="resquarify">resquarify</option>
                        </select>
                    </div>
                    <div className="chart-controls_item">
                        <span className="control-switch">
                            <input
                                className="cmn-toggle"
                                id="treemap-leaves-only"
                                type="checkbox"
                                checked={settings.leavesOnly}
                                onChange={this.handleLeavesOnlyUpdate}
                            />
                            <label htmlFor="treemap-leaves-only" />
                        </span>
                        &nbsp;
                        <label htmlFor="treemap-leaves-only">leavesOnly</label>
                        <div className="control-help">Only render leaf nodes (no children).</div>
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            innerPadding: <code className="code code-number">{settings.innerPadding}</code>
                        </label>
                        <div className="control-help">Padding between parent and child node.</div>
                        <input
                            type="range"
                            min="0" max="32" step="1"
                            value={settings.innerPadding}
                            onChange={this.handleInnerPaddingUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            outerPadding: <code className="code code-number">{settings.outerPadding}</code>
                        </label>
                        <div className="control-help">Padding between parent and child node.</div>
                        <input
                            type="range"
                            min="0" max="32" step="1"
                            value={settings.outerPadding}
                            onChange={this.handleOuterPaddingUpdate}
                        />
                    </div>
                    {['TreeMap'].includes(target) && (
                        <div className="chart-controls_item">
                            <span className="control-switch">
                                <input
                                    className="cmn-toggle"
                                    id="treemap-enable-labels"
                                    type="checkbox"
                                    checked={settings.enableLabels}
                                    onChange={this.handleEnableLabelsUpdate}
                                />
                                <label htmlFor="treemap-enable-labels" />
                            </span>
                            &nbsp;
                            <label htmlFor="treemap-enable-labels">enableLabels</label>
                            <div className="control-help">Enable/disable labels.</div>
                        </div>
                    )}
                    {['TreeMap'].includes(target) && (
                        <div className="chart-controls_item">
                            <label>
                                labelSkipSize: <code className="code code-number">{settings.labelSkipSize}</code>
                            </label>
                            <div className="control-help">Skip label rendering if node minimal side length is lower than given value, 0 to disable.</div>
                            <input
                                type="range"
                                min="0" max="100" step="1"
                                value={settings.labelSkipSize}
                                onChange={this.handleLabelSkipSizeUpdate}
                            />
                        </div>
                    )}
                    {['TreeMap'].includes(target) && (
                        <div className="chart-controls_item">
                            <span className="control-switch">
                                <input
                                    className="cmn-toggle"
                                    id="treemap-orient-labels"
                                    type="checkbox"
                                    checked={settings.orientLabels}
                                    onChange={this.handleOrientLabelsUpdate}
                                />
                                <label htmlFor="treemap-orient-labels" />
                            </span>
                            &nbsp;
                            <label htmlFor="treemap-orient-labels">orientLabels</label>
                            <div className="control-help">Orient labels according to max node width/height.</div>
                        </div>
                    )}
                    {['TreeMap'].includes(target) && (
                        <div className="chart-controls_item">
                            <ColorControl
                                label="labelTextColor"
                                help="Method to compute label text color."
                                value={settings.labelTextColor}
                                onChange={this.handleLabelTextColorUpdate}
                            />
                        </div>
                    )}
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

const { object, func, oneOf } = PropTypes

TreeMapControls.propTypes = {
    settings: object.isRequired,
    onChange: func.isRequired,
    target:   oneOf([
        'TreeMap',
        'TreeMapD3',
        'TreeMapPlaceholders',
    ]).isRequired,
}


export default TreeMapControls

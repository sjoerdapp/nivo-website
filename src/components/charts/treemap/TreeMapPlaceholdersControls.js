import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import ChartControls                   from '../../ChartControls';
import ColorsControl                   from '../../controls/ColorsControl';


class TreeMapControls extends Component {
    constructor(props) {
        super(props);

        this.handleModeUpdate    = this.handleModeUpdate.bind(this);
        this.handlePaddingUpdate = this.handlePaddingUpdate.bind(this);
        this.handleColorsUpdate  = this.handleColorsUpdate.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.settings !== this.props.settings;
    }

    handleModeUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            mode: e.target.value
        }));
    }

    handlePaddingUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            padding: parseInt(e.target.value, 10)
        }));
    }

    handleColorsUpdate(colors) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, { colors }));
    }

    render() {
        const { settings } = this.props;

        return (
            <div>
                <ChartControls chartClass="TreeMapPlaceholders">
                    <div className="chart-controls_item">
                        <label>
                            mode: <code className="code code-string">"{settings.mode}"</code>
                        </label>
                        <div className="control-help">Strategy used to compute nodes.</div>
                        <select value={settings.mode} onChange={this.handleModeUpdate}>
                            <option value="squarify">squarify</option>
                            <option value="slice">slice</option>
                            <option value="dice">dice</option>
                            <option value="slice-dice">slice-dice</option>
                        </select>
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            padding: <code className="code code-number">{settings.padding}</code>
                        </label>
                        <div className="control-help">Padding between parent and child node.</div>
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
            </div>
        );
    }
}

const { func, object } = PropTypes;

TreeMapControls.propTypes = {
    onSettingsUpdate: func.isRequired,
    settings:         object.isRequired
};


export default TreeMapControls;

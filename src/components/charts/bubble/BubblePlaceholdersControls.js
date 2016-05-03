import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import ChartControls                   from '../../ChartControls';


/**
 * This component is used to configure a nivo BubbleHtmlPlaceholders chart.
 */
class BubblePlaceholdersControls extends Component {
    constructor(props) {
        super(props);

        this.handlePaddingUpdate = this.handlePaddingUpdate.bind(this);
    }

    handlePaddingUpdate(e) {
        const { onChange, settings } = this.props;
        onChange(_.assign({}, settings, {
            padding: parseInt(e.target.value, 10)
        }));
    }

    render() {
        const { settings } = this.props;

        return (
            <div>
                <ChartControls chartClass="BubblePlaceholders">
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
                </ChartControls>
            </div>
        );
    }
}

const { func } = PropTypes;

BubblePlaceholdersControls.propTypes = {
    onChange: func.isRequired
};


export default BubblePlaceholdersControls;

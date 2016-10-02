import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import ColorPicker                     from 'react-colors-picker';
import CollapsibleCard                 from '../../CollapsibleCard';


/**
 * This component is used to configure a nivo CalendarD3 chart.
 */
class CalendarD3Controls extends Component {
    constructor(props) {
        super(props);

        this.handleDirectionUpdate            = this.handleDirectionUpdate.bind(this);
        this.handleYearSpacingUpdate          = this.handleYearSpacingUpdate.bind(this);
        this.handleDaySpacingUpdate           = this.handleDaySpacingUpdate.bind(this);
        this.handleDayBorderWidthUpdate       = this.handleDayBorderWidthUpdate.bind(this);
        this.handleDayBorderColorUpdate       = this.handleDayBorderColorUpdate.bind(this);
        this.handleMonthBorderWidthUpdate     = this.handleMonthBorderWidthUpdate.bind(this);
        this.handleMonthBorderColorUpdate     = this.handleMonthBorderColorUpdate.bind(this);
        this.handleTransitionStaggeringUpdate = this.handleTransitionStaggeringUpdate.bind(this);
    }

    handleDirectionUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            direction: e.target.value
        }));
    }

    handleYearSpacingUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            yearSpacing: parseInt(e.target.value, 10)
        }));
    }

    handleDaySpacingUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            daySpacing: parseInt(e.target.value, 10)
        }));
    }

    handleDayBorderWidthUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            dayBorderWidth: parseInt(e.target.value, 10)
        }));
    }

    handleDayBorderColorUpdate(color) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            dayBorderColor: color.color
        }));
    }

    handleMonthBorderWidthUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            monthBorderWidth: parseInt(e.target.value, 10)
        }));
    }

    handleMonthBorderColorUpdate(color) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            monthBorderColor: color.color
        }));
    }

    handleTransitionStaggeringUpdate(e) {
        const { onSettingsUpdate, settings } = this.props;
        onSettingsUpdate(_.assign({}, settings, {
            transitionStaggering: parseInt(e.target.value, 10)
        }));
    }

    render() {
        const { settings } = this.props;

        return (
            <CollapsibleCard title="<CalendarD3 /> settings" expandedByDefault={true}>
                <div className="chart-controls">
                    <div className="chart-controls_item">
                        <label>
                            direction: <code className="code code-string">"{settings.direction}"</code>
                        </label>
                        <div className="control-help">Direction of the calendar.</div>
                        <select
                            value={settings.direction}
                            onChange={this.handleDirectionUpdate}
                        >
                            <option value="horizontal">horizontal</option>
                            <option value="vertical">vertical</option>
                        </select>
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            yearSpacing: <code className="code code-number">{settings.yearSpacing}</code>
                        </label>
                        <div className="control-help">Spacing between each years.</div>
                        <input
                            type="range"
                            min="0" max="160" step="5"
                            value={settings.yearSpacing}
                            onChange={this.handleYearSpacingUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            daySpacing: <code className="code code-number">{settings.daySpacing}</code>
                        </label>
                        <div className="control-help">Spacing between each days.</div>
                        <input
                            type="range"
                            min="0" max="20" step="1"
                            value={settings.daySpacing}
                            onChange={this.handleDaySpacingUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            dayBorderWidth: <code className="code code-number">{settings.dayBorderWidth}</code>
                        </label>
                        <div className="control-help">Width of day squares border.</div>
                        <input
                            type="range"
                            min="0" max="6" step="1"
                            value={settings.dayBorderWidth}
                            onChange={this.handleDayBorderWidthUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <span style={{ display: 'inline-block', marginRight: '10px', verticalAlign: 'middle' }}>
                            <ColorPicker
                                animation="slide-up"
                                color={settings.dayBorderColor}
                                onChange={this.handleDayBorderColorUpdate}
                            />
                        </span>
                        <label>
                            dayBorderColor
                        </label>
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            monthBorderWidth: <code className="code code-number">{settings.monthBorderWidth}</code>
                        </label>
                        <div className="control-help">Width of month delemiter paths border.</div>
                        <input
                            type="range"
                            min="0" max="6" step="1"
                            value={settings.monthBorderWidth}
                            onChange={this.handleMonthBorderWidthUpdate}
                        />
                    </div>
                    <div className="chart-controls_item">
                        <span style={{ display: 'inline-block', marginRight: '10px', verticalAlign: 'middle' }}>
                            <ColorPicker
                                animation="slide-up"
                                color={settings.monthBorderColor}
                                onChange={this.handleMonthBorderColorUpdate}
                            />
                        </span>
                        <label>
                            monthBorderColor
                        </label>
                    </div>
                    <div className="chart-controls_item">
                        <label>
                            transitionStaggering: <code className="code code-number">{settings.transitionStaggering}</code>
                        </label>
                        <div className="control-help">Transition staggering.</div>
                        <input
                            type="range"
                            min="0" max="60" step="1"
                            value={settings.transitionStaggering}
                            onChange={this.handleTransitionStaggeringUpdate}
                        />
                    </div>
                </div>
            </CollapsibleCard>
        );
    }
}

const { object, func } = PropTypes;

CalendarD3Controls.propTypes = {
    settings:         object.isRequired,
    onSettingsUpdate: func.isRequired,
};


export default CalendarD3Controls;

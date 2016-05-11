import React, { Component, PropTypes }      from 'react';
import { Link }                             from 'react-router';
import { generateProgrammingLanguageStats } from '../../../generators';
import ChartHeader                          from '../../ChartHeader';
import ChartCodeAndData                     from '../../ChartCodeAndData';
import Properties                           from '../../Properties';
import generateCalendarCode                 from '../../../code-generators/calendarCodeGenerator';
import CalendarControls                     from './CalendarControls';
import { ResponsiveCalendarCanvas }         from 'nivo';


class CalendarCanvasPage extends Component {
    constructor(props) {
        super(props);

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            data:     [],
            settings: {
                direction:            'horizontal',
                yearSpacing:          20,
                daySpacing:           0,
                dayBorderWidth:       1,
                dayBorderColor:       '#000',
                monthBorderWidth:     2,
                monthBorderColor:     '#000',
                transitionDuration:   400,
                transitionEasing:     'elastic',
                transitionStaggering: 4,
            },
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    render() {
        const { settings } = this.state;

        const code = generateCalendarCode(settings);

        return (
            <div>
                <ChartHeader chartClass="CalendarCanvas" tags={['calendar', 'd3']} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div className="main-chart" style={{ height: '500px' }}>
                                <ResponsiveCalendarCanvas
                                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                    from={new Date(2014, 3, 1)} to={new Date(2016, 9, 12)}
                                    {...settings}
                                >
                                </ResponsiveCalendarCanvas>
                            </div>
                            <CalendarControls
                                settings={settings}
                                onSettingsUpdate={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} data={[]} />
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <p>heavily inspired by <a href="https://bl.ocks.org/mbostock/4063318" target="_blank">this block</a>.</p>
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="CalendarD3"
                                properties={[
                                    ['width', 'number', true, '', ''],
                                    ['height', 'number', true, '', ''],
                                    ['direction', 'string', true, (<code className="code-string">"horizontal"</code>), (
                                        <span>
                                            defines calendar layout direction, must be one of <code className="code-string">"horizontal"</code> or <code className="code-string">"vertical"</code>
                                        </span>
                                    )],
                                    ['dayBorderWidth', 'number', true, (<code className="code-number">1</code>), ''],
                                    ['monthBorderWidth', 'number', true, (<code className="code-number">2</code>), ''],
                                    'transitionDuration',
                                    'transitionEasing',
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default CalendarCanvasPage;

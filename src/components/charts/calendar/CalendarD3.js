import React, { Component, PropTypes }      from 'react';
import { Link }                             from 'react-router';
import ChartHeader                          from '../../ChartHeader';
import ChartCodeAndData                     from '../../ChartCodeAndData';
import Properties                           from '../../Properties';
import { generateCalendarD3Code }           from '../../../code-generators/calendarCodeGenerator';
import CalendarD3Controls                   from './CalendarD3Controls';
import { ResponsiveCalendarD3 }             from 'nivo';


class CalendarD3Page extends Component {
    constructor(props) {
        super(props);

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            data:     [],
            settings: {
                direction:            'horizontal',
                yearSpacing:          40,
                yearLegendOffset:     10,
                daySpacing:           0,
                dayBorderWidth:       1,
                dayBorderColor:       '#fff',
                monthBorderWidth:     2,
                monthBorderColor:     '#fff',
                monthLegendOffset:    6,
                transitionDuration:   1200,
                transitionEasing:     'elastic',
                transitionStaggering: 3,
            },
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    render() {
        const { settings } = this.state;

        const code = generateCalendarD3Code(settings);

        return (
            <div>
                <ChartHeader chartClass="CalendarD3" tags={['calendar', 'd3']} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div className="main-chart" style={{ height: '500px' }}>
                                <ResponsiveCalendarD3
                                    margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                                    from={new Date(2014, 3, 1)} to={new Date(2016, 7, 12)}
                                    {...settings}
                                >
                                </ResponsiveCalendarD3>
                            </div>
                            <CalendarD3Controls
                                settings={settings}
                                onSettingsUpdate={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} data={[]} />
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <p className="description">This component is heavily inspired by <a href="https://bl.ocks.org/mbostock/4063318" target="_blank">this block</a>.</p>
                            <p className="description">This component renders the calendar using d3 for both computing and rendering. DOM mutations being handled by d3, it's not suitable for isomorphic rendering, if you want it or don't care about animation you can use the <Link to="/calendar/react">&lt;Calendar /&gt;</Link> component. However this one deals well enough with transitions, while the <Link to="/calendar/react">&lt;Calendar /&gt;</Link> supports transitions but you cannot have a wide time range and it doesn't allow transition staggering.</p>
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
                                    ['yearSpacing', 'number', true, (<code className="code-number">30</code>), 'define spacing between each year row/column depending on the direction.'],
                                    ['yearLegendOffset', 'number', true, (<code className="code-number">10</code>), 'define offset from year edge to its label.'],
                                    ['daySpacing', 'number', true, (<code className="code-number">0</code>), 'define spacing between each day cell.'],
                                    ['dayBorderWidth', 'number', true, (<code className="code-number">1</code>), 'width of day borders.'],
                                    ['dayBorderColor', 'string', true, (<code className="code-string">"#000"</code>), 'color to use for day borders.'],
                                    ['monthBorderWidth', 'number', true, (<code className="code-number">2</code>), 'width of month borders.'],
                                    ['monthBorderColor', 'string', true, (<code className="code-string">"#000"</code>), 'color to use for month borders.'],
                                    ['monthLegendOffset', 'number', true, (<code className="code-number">6</code>), 'define offset from month edge to its label.'],
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


export default CalendarD3Page;

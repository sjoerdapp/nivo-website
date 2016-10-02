import React, { Component, PropTypes }      from 'react';
import { Link }                             from 'react-router';
import ChartHeader                          from '../../ChartHeader';
import ChartCodeAndData                     from '../../ChartCodeAndData';
import Properties                           from '../../Properties';
import { generateCalendarCode }             from '../../../code-generators/calendarCodeGenerator';
import CalendarReactControls                from './CalendarReactControls';
import { ResponsiveCalendar }               from 'nivo';


class CalendarReactPage extends Component {
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
                dayBorderColor:       '#000',
                monthBorderWidth:     3,
                monthBorderColor:     '#000',
                monthLegendOffset:    10,
                motion:               false,
            },
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    render() {
        const { from, to, data } = this.props;
        const { settings }       = this.state;

        const code = generateCalendarCode(settings);

        return (
            <div>
                <ChartHeader chartClass="Calendar" tags={['calendar', 'react', 'isomorphic']} chartSize={1} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div className="main-chart" style={{ height: '500px' }}>
                                <ResponsiveCalendar
                                    margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                                    from={from} to={to}
                                    data={data}
                                    onDayClick={(d) => console.log(d)}
                                    colorScale={{
                                        type:   'linear',
                                        domain: [0,         80,        160,       240,       320,       400],
                                        range:  ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#61cdbb', '#97e3d5']
                                    }}
                                    {...settings}
                                >
                                </ResponsiveCalendar>
                            </div>
                            <CalendarReactControls
                                settings={settings}
                                onSettingsUpdate={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} data={data} />
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <p className="description">This component is heavily inspired by <a href="https://bl.ocks.org/mbostock/4063318" target="_blank">this block</a>.</p>
                            <p className="description">This component renders the calendar using d3 only for computing positions. DOM mutations are managed by React, you can enable transitions using the <code>motion</code> property, but due to the large amount of nodes, it's barely usable, if you want the fancy animations you should use the <Link to="/calendar/d3">&lt;CalendarD3 /&gt;</Link> component instead which deals better with transitions.</p>
                            <p>This component is suitable for isomorphic rendering  but require to disable transitions (<code>{'motion={false}'}</code>) and use the <code>&lt;Calendar/&gt;</code> component not the <code>&lt;ResponsiveCalendar/&gt;</code> one.</p>
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="Calendar"
                                properties={[
                                    ['width', 'number', true, '', (
                                        <span>not required for <code>&lt;ResponsiveCalendar&nbsp;/&gt;</code>.</span>
                                    )],
                                    ['height', 'number', true, '', (
                                        <span>not required for <code>&lt;ResponsiveCalendar&nbsp;/&gt;</code>.</span>
                                    )],
                                    ['data', 'array', true, '', ''],
                                    ['onDayClick', 'function', true, (<code>() => {}</code>), 'click handler for calendar days.'],
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
                                    ['motion', 'boolean', true, (<code>false</code>), 'enable/disable transitions.'],
                                    'motionStiffness',
                                    'motionDamping',
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default CalendarReactPage;

import React, { Component, PropTypes }      from 'react';
import _                                    from 'lodash';
import { Link }                             from 'react-router';
import { generateProgrammingLanguageStats } from '../../generators';
import ChartHeader                          from '../ChartHeader';
import ChartCode                            from '../ChartCode';
import Properties                           from '../Properties';
import PieControls                          from './PieControls';
import generatePieCode                      from '../../code-generators/generatePieCode';
import {
    Chart,
    Pie,
    PieColumnLegends,
    PieRadialLegends,
    PieSliceLegends
} from 'nivo';


class PiePage extends Component {
    constructor(props) {
        super(props);

        this.handleDiceRoll       = this.handleDiceRoll.bind(this);
        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            data:     [],
            settings: {
                innerRadius:  0,
                colors:       'nivo',
                padAngle:     0,
                cornerRadius: 0
            }
        };
    }

    handleDiceRoll() {
        this.setState({ data: generateProgrammingLanguageStats(false, 4) });
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    componentWillMount() {
        this.handleDiceRoll();
    }

    render() {
        const { data, settings } = this.state;

        const code = generatePieCode(settings);

        return (
            <div>
                <ChartHeader chartClass="Pie" tags={['pie', 'basics', 'radial', 'circle']} />
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <div className="main-chart">
                                <Chart margin={{ top: 80, bottom: 80 }}>
                                    <Pie
                                        data={_.cloneDeep(data)}
                                        transitionDuration={800}
                                        {...settings}
                                    >
                                        <PieColumnLegends
                                            lineColor="inherit:darker(.7)"
                                            badgeColor="inherit:darker(.7)"
                                            textColor="inherit:brighter(.3)"
                                        />
                                    </Pie>
                                </Chart>
                            </div>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <PieControls
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <ChartCode code={code} dataKey="data" data={_.cloneDeep(data)} />
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="Pie"
                                properties={[
                                    ['sort', 'function', false, (<code>null</code>), ''],
                                    ['data', 'array', true, '', ''],
                                    ['keyProp', 'string', true, (<code className="code-string">'label'</code>), ''],
                                    ['valueProp', 'string', true, (<code className="code-string">'value'</code>), ''],
                                    ['startAngle', 'number', true, (<code className="code-number">0</code>), ''],
                                    ['endAngle', 'number', true, (<code className="code-number">360</code>), ''],
                                    ['padAngle', 'number', true, (<code className="code-number">0</code>), 'a padding to add between each slice (deg).'],
                                    ['innerRadius', 'number', true, (<code className="code-number">0</code>), 'if greater than 0, you\'ll have a donut.'],
                                    'colors',
                                    'transitionDuration',
                                    'transitionEasing'
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PiePage;

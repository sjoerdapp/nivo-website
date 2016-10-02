import React, { Component, PropTypes }      from 'react';
import _                                    from 'lodash';
import { Link }                             from 'react-router';
import { generateProgrammingLanguageStats } from 'nivo-generators';
import ChartHeader                          from '../../ChartHeader';
import ChartCodeAndData                     from '../../ChartCodeAndData';
import Properties                           from '../../Properties';
import PieControls                          from './PieControls';
import PieSliceLegendsControls              from './PieSliceLegendsControls';
import generatePieCode                      from '../../../code-generators/generatePieCode';
import {
    ResponsivePie,
    PieColumnLegends,
    PieRadialLegends,
    PieSliceLegends
} from 'nivo';


class PiePage extends Component {
    constructor(props) {
        super(props);

        this.handleDiceRoll                   = this.handleDiceRoll.bind(this);
        this.handleSettingsUpdate             = this.handleSettingsUpdate.bind(this);
        this.handleSliceLegendsSettingsUpdate = this.handleSliceLegendsSettingsUpdate.bind(this);

        this.state = {
            data:     [],
            settings: {
                innerRadius:  0,
                colors:       'nivo',
                padAngle:     0,
                cornerRadius: 0
            },
            sliceLegendsSettings: {
                radius:     16,
                badgeColor: 'inherit:darker(.2)',
                textColor:  'inherit:brighter(2)',
            }
        };
    }

    handleDiceRoll() {
        const data = generateProgrammingLanguageStats(true, 3).map(({ label, value }) => ({
            id: label, label, value
        }));

        this.setState({ data });
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    handleSliceLegendsSettingsUpdate(sliceLegendsSettings) {
        this.setState({ sliceLegendsSettings });
    }

    componentWillMount() {
        this.handleDiceRoll();
    }

    render() {
        const { data, settings, sliceLegendsSettings } = this.state;

        const code = generatePieCode(settings);

        /*
         */

        return (
            <div>
                <ChartHeader chartClass="Pie" tags={['pie', 'basics', 'radial', 'circle']} />
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <div className="main-chart">
                                <ResponsivePie
                                    margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
                                    data={_.cloneDeep(data)}
                                    transitionDuration={2000} transitionEasing="linear"
                                    {...settings}
                                >
                                    <PieColumnLegends
                                        lineColor="inherit:darker(.7)"
                                        badgeColor="inherit:darker(.7)"
                                        textColor="inherit:brighter(.3)"
                                    />
                                    <PieSliceLegends
                                        labelFn={d => d.data.label}
                                        {...sliceLegendsSettings}
                                    />
                                </ResponsivePie>
                            </div>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <PieControls
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <PieSliceLegendsControls
                                settings={sliceLegendsSettings}
                                onSettingsUpdate={this.handleSliceLegendsSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} dataKey="data" data={data} />
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="Pie"
                                properties={[
                                    ['sort', 'function', false, (<code>null</code>), ''],
                                    ['data', 'array', true, '', (
                                        <span>
                                            must be an array of object, each object having <code className="code-string">"id"</code>, <code className="code-string">"label"</code> and <code className="code-string">"value"</code> properties.
                                        </span>
                                    )],
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

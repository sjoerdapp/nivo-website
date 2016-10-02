import React, { Component, PropTypes }          from 'react';
import _                                        from 'lodash';
import { Link }                                 from 'react-router';
import { generateStackData }                    from 'nivo-generators';
import ChartHeader                              from '../ChartHeader';
import ChartCodeAndData                         from '../ChartCodeAndData';
import Properties                               from '../Properties';
import RadialStackControls                      from './RadialStackControls';
import generateRadialStackCode                  from '../../code-generators/generateRadialStackCode';
import {
    Chart,
    Stack,
    ResponsiveRadialStack as RadialStack,
    RadialStackAngleAxis
} from 'nivo';


class RadialStackPage extends Component {
    constructor(props) {
        super(props);

        this.handleDiceRoll       = this.handleDiceRoll.bind(this);
        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            settings: {
                angleAxis:     true,
                innerRadius:   0.4,
                colors:        'nivo',
                offset:        'zero',
                labelPosition: 'top',
                labelRotation: 90,
                labelOffset:   10
            },
            layers: []
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    handleDiceRoll() {
        this.setState({ layers: generateStackData(4) });
    }

    componentWillMount() {
        this.handleDiceRoll();
    }

    render() {
        const { layers } = this.state;



        const offsetDemos = [];
        /*
        ['wiggle', 'silhouette', 'expand'].forEach(offset => {
            offsetDemos.push(
                <div className="grid_item grid_item-1_4" key={`${offset}.chart`}>
                    <div className="chart" style={{ height: '120px' }}>
                        <RadialStack
                            innerRadius={0.5}
                            layers={_.cloneDeep(layers)}
                            colors="nivo" offset={offset}
                        >
                            <RadialAxis />
                        </RadialStack>
                    </div>
                </div>
            );
            offsetDemos.push(
                <div className="grid_item grid_item-3_4" key={`${offset}.info`}>
                    <h3>'{offset}' offset</h3>
                    <ChartCode snippetId={`radial-stack-${offset}`} />
                </div>
            );
        });
        */

        let data = [
            [{ x: 0, y: 2 }, { x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 10 }],
            [{ x: 0, y: 2 }, { x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 10 }]
        ];
        //                                <RadialStackRadiusAxis angleData={0} />

        const { settings } = this.state;

        const code = generateRadialStackCode(settings);

        /*
                                        <div className="chart" style={{ height: '80px' }}>
                                    <Chart>
                                        <Stack
                                            layers={_.cloneDeep(layers)}
                                            offset={settings.offset}
                                            colors={settings.colors}
                                            transitionDuration={400}
                                            transitionEasing="linear"
                                        />
                                    </Chart>
                                </div>

         */

        return (
            <div>
                <ChartHeader chartClass="RadialStack" tags={['stack', 'radial']} />
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <div className="main-chart">
                                <RadialStack
                                    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                                    layers={_.cloneDeep(layers)}
                                    transitionDuration={400}
                                    transitionEasing="linear"
                                    {...settings}
                                >
                                    <RadialStackAngleAxis
                                        labelPosition={settings.labelPosition}
                                        labelOffset={settings.labelOffset}
                                        labelRotation={settings.labelRotation}
                                    />
                                </RadialStack>
                            </div>
                            <p className="description">
                                Combine <a href="https://github.com/mbostock/d3/wiki/Stack-Layout" target="_blank">d3 Stack layout</a> with <a href="https://github.com/mbostock/d3/wiki/SVG-Shapes#area_radial" target="_blank">radial area</a>,
                                see <a href="http://bl.ocks.org/mbostock/3048740" target="_blank">this block</a> which also highlight some limitations of this chart type.
                            </p>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <RadialStackControls
                                settings={settings}
                                onSettingsUpdate={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} dataKey="layers" data={layers} />
                        </div>
                        <div className="grid_item grid_item-1_2">
                            <div className="grid">
                                {offsetDemos}
                            </div>
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="RadialStack"
                                properties={[
                                    ['width', 'number', true, '', ''],
                                    ['height', 'number', true, '', ''],
                                    ['sort', 'function', false, (<code>null</code>), ''],
                                    ['layers', 'array', true, '', ''],
                                    ['offset', 'string', true, (<code className="code-string">'zero'</code>), ''],
                                    ['keyProp', 'string', true, (<code className="code-string">'label'</code>), ''],
                                    ['valueProp', 'string', true, (<code className="code-string">'value'</code>), ''],
                                    ['interpolation', 'string', true, (<code className="code-string">'monotone'</code>), (<a href="https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate" target="_blank">official d3 documentation</a>)],
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


export default RadialStackPage;

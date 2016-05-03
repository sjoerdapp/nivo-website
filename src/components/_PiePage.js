import React, { Component, PropTypes }      from 'react';
import _                                    from 'lodash';
import { Link }                             from 'react-router';
import { generateProgrammingLanguageStats } from '../generators';
import PropsTable                           from './PropsTable';
import ChartCode                            from './ChartCode';
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

        this.handleDiceRoll = this.handleDiceRoll.bind(this);

        this.state = { data: [] };
    }

    handleDiceRoll() {
        this.setState({ data: generateProgrammingLanguageStats(false) });
    }

    componentWillMount() {
        this.handleDiceRoll();
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <h1 className="page_header">Pie</h1>
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                <div className="component_meta">
                    <span className="component_meta_tag">pie</span>
                    <span className="component_meta_tag">basics</span>
                    <span className="component_meta_tag">radial</span>
                    <span className="component_meta_tag">circle</span>
                </div>
                <div className="intro">
                    <p className="description">Use <a href="https://github.com/mbostock/d3/wiki/Pie-Layout" target="_blank">d3 Pie layout</a>. The pie layout is a convenience for computing the start and end angles of arcs that comprise a pie or donut chart</p>
                </div>
                <div className="grid">
                    <div className="grid_item">
                        <h2>Default style</h2>
                        <div className="chart">
                            <Chart margin={{ top: 40, bottom: 40 }}>
                                <Pie data={_.cloneDeep(data)} colors="nivo" transitionDuration={2000}>
                                    <PieColumnLegends lineColor="inherit" textColor="inherit:darker(.5)" transitionDuration={2000}/>
                                </Pie>
                            </Chart>
                        </div>
                    </div>
                    <div className="grid_item">
                        <h2>Donut style</h2>
                        <div className="chart">
                            <Chart margin={{ top: 40, bottom: 40 }}>
                                <Pie data={_.cloneDeep(data)} colors="nivo" innerRadius={0.6}>
                                    <PieColumnLegends lineColor="inherit" textColor="inherit:darker(.5)" />
                                </Pie>
                            </Chart>
                        </div>
                    </div>
                    <div className="grid_item grid_item-full">
                        <h2>Properties</h2>
                        <PropsTable
                            propsSpec={[
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
                    <div className="grid_item grid_item-full">
                        <h2>PieColumnLegends</h2>
                        <p className="description">Distribute legends on left/right side of the pie with a link to the corresponding slice.</p>
                    </div>
                    <div className="grid_item">
                        <div className="chart">
                            <Chart margin={{ top: 40, right: 120, bottom: 40, left: 120 }}>
                                <Pie data={_.cloneDeep(data)} colors="nivo" innerRadius={0.6}>
                                    <PieColumnLegends
                                        horizontalOffset={30} radiusOffset={20}
                                        lineColor="inherit" textColor="inherit"
                                    />
                                </Pie>
                            </Chart>
                        </div>
                    </div>
                    <div className="grid_item">
                        <ChartCode snippetId="pie-column-legends" dataKey="data" data={data} />
                    </div>
                    <div className="grid_item grid_item-full">
                        <h2>Properties</h2>
                        <PropsTable
                            propsSpec={[
                                ['labelFn', 'function', true, '', ''],
                                ['radiusOffset', 'number', true, (<code className="code-number">16</code>), 'distance (px) from the outer pie radius to first link point'],
                                ['horizontalOffset', 'number', true, (<code className="code-number">30</code>), 'distance (px) from pie side to end of the link'],
                                ['textOffset', 'number', true, (<code className="code-number">10</code>), 'distance (px) from the end off the link to the text'],
                                'transitionDuration',
                                'transitionEasing',
                                ['lineColor', 'any', true, (<code className="code-string">'none'</code>), (<Link to="colors">documentation</Link>)],
                                ['textColor', 'any', true, (<code className="code-string">'none'</code>), (<Link to="colors">documentation</Link>)]
                            ]}
                        />
                    </div>
                    <div className="grid_item grid_item-full">
                        <h2>PieSliceLegends</h2>
                        <p className="description">Distribute legends inside each pie slice. This component is useful to display data value on each pie slice, but won't work well with labels.</p>
                    </div>
                    <div className="grid_item grid_item-1_4">
                        <div className="chart">
                            <Chart margin={{ top: 40, bottom: 40 }}>
                                <Pie data={_.cloneDeep(data)} colors="nivo" innerRadius={0.6}>
                                    <PieSliceLegends
                                        orient={false} radius={16} labelFn={d => d.data.value}
                                        badgeColor="inherit:darker(.5)" textColor="inherit:brighter(.9)"
                                    />
                                </Pie>
                            </Chart>
                        </div>
                    </div>
                    <div className="grid_item grid_item-1_4">
                        <div className="chart">
                            <Chart margin={{ top: 40, bottom: 40 }}>
                                <Pie data={_.cloneDeep(data)} colors="nivo" innerRadius={0.6}>
                                    <PieSliceLegends
                                        orient={true} radius={16} labelFn={d => d.data.value}
                                        badgeColor="inherit:darker(.5)" textColor="inherit:brighter(.9)"
                                    />
                                </Pie>
                            </Chart>
                        </div>
                    </div>
                    <div className="grid_item">
                        <ChartCode snippetId="pie-slice-legends" dataKey="data" data={data} />
                    </div>
                    <div className="grid_item grid_item-full">
                        <h2>Properties</h2>
                        <PropsTable
                            propsSpec={[
                                'transitionDuration',
                                'transitionEasing'
                            ]}
                        />
                    </div>
                    <div className="grid_item grid_item-full">
                        <h2>PieRadialLegends</h2>
                        <p className="description">Radial legend distribution around your pie.</p>
                    </div>
                    <div className="grid_item">
                        <div className="chart">
                            <Chart margin={{ top: 40, right: 120, bottom: 40, left: 120 }}>
                                <Pie data={_.cloneDeep(data)} colors="nivo" innerRadius={0.6}>
                                    <PieRadialLegends textColor="inherit:brighter(.5)" />
                                </Pie>
                            </Chart>
                        </div>
                    </div>
                    <div className="grid_item">
                        <ChartCode snippetId="pie-radial-legends" dataKey="data" data={data} />
                    </div>
                    <div className="grid_item grid_item-full">
                        <h2>Properties</h2>
                        <PropsTable
                            propsSpec={[
                                'transitionDuration',
                                'transitionEasing'
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default PiePage;

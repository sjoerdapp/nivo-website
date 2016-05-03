import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import { Link }                        from 'react-router';
import { ResponsiveTreeMapD3 }         from 'nivo';
import ChartHeader                     from '../../ChartHeader';
import ChartCodeAndData                from '../../ChartCodeAndData';
import Properties                      from '../../Properties';
import TreeMapControls                 from './TreeMapControls';
import { generateTreeMapD3Code }       from '../../../code-generators/treeMapCodeGenerator';


class TreeMapD3 extends Component {
    constructor(props) {
        super(props);

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            settings: {
                mode:         'squarify',
                orientLabels: false,
                padding:      0,
                skipVMin:     0,
                colors:       'nivo',
            }
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    render() {
        const { root }     = this.props;
        const { settings } = this.state;

        /*
        <div className="grid">
            <ChartCode snippetId="treemap" dataKey="root" data={_.cloneDeep(libTree)} />
            <div className="grid_item">
                <h3>'slice' mode</h3>
                <p className="description">Horizontal subdivision.</p>
                <div className="chart" style={{ height: '120px' }}>
                    <TreeMap
                        root={_.cloneDeep(libTree)}
                        valueAccessor={d => d.loc}
                        labelFn={() => ''}
                        mode="slice"
                        borderColor="inherit:darker(1)"
                        colors="nivo"
                    />
                </div>
            </div>
            <div className="grid_item">
                <h3>'dice' mode</h3>
                <p className="description">Vertical subdivision.</p>
                <div className="chart" style={{ height: '120px' }}>
                    <TreeMap
                        root={_.cloneDeep(libTree)}
                        valueAccessor={d => d.loc}
                        labelFn={() => ''}
                        mode="dice"
                        borderColor="inherit:darker(1)"
                        colors="nivo"
                    />
                </div>
            </div>
            <div className="grid_item grid_item-full">
                <h3>'slice-dice' mode</h3>
                <p className="description">Alternating between horizontal and vertical subdivision.</p>
                <div className="chart" style={{ height: '120px' }}>
                    <TreeMap
                        root={_.cloneDeep(libTree)}
                        valueAccessor={d => d.loc}
                        labelFn={() => ''}
                        mode="slice-dice"
                        borderColor="inherit:darker(1)"
                        colors="nivo"
                    />
                </div>
            </div>
        </div>
         */

        const code = generateTreeMapD3Code(settings);

        return (
            <div>
                <ChartHeader chartClass="TreeMapD3" tags={['treemap', 'hierarchy', 'd3']} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <div className="main-chart">
                                <ResponsiveTreeMapD3
                                    margin={{ top: 30, right: 10, bottom: 30, left: 10 }}
                                    root={_.cloneDeep(root)}
                                    valueAccessor={d => d.loc}
                                    borderColor="inherit:darker(1)"
                                    {...settings}
                                />
                            </div>
                            <p className="description">Use <a href="https://github.com/mbostock/d3/wiki/Treemap-Layout" target="_blank">d3 Treemap layout</a>, see <a href="https://bl.ocks.org/mbostock/4063582" target="_blank">this block</a>.</p>
                            <p className="description">Use d3 for DOM mutation and transitions.</p>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <TreeMapControls
                                settings={settings}
                                onSettingsUpdate={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} dataKey="root" data={root} />
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="TreeMap"
                                properties={[
                                    ['root', 'object', true, '', ''],
                                    ['valueAccessor', 'function', true, (<code>d => d.size</code>), ''],
                                    ['labelFn', 'function', true, (<code>d => d.name</code>), ''],
                                    ['mode', 'string', true, (<code className="code-string">'squarify'</code>), (
                                        <span>
                                            valid values are: <code className="code-string">'squarify'</code>, <code className="code-string">'slice'</code>, <code className="code-string">'dice'</code>, <code className="code-string">'slice-dice'</code>,
                                            see <a href="https://github.com/mbostock/d3/wiki/Treemap-Layout#mode" target="_blank">d3 documentation</a>
                                        </span>
                                    )],
                                    'transitionDuration',
                                    'transitionEasing',
                                    ['borderColor', 'any', true, (<code className="code-string">'none'</code>), (<Link to="colors">documentation</Link>)],
                                    'colors',
                                    ['margin', 'object', true, (<code>Nivo.defaults.margin</code>), '']
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default TreeMapD3;

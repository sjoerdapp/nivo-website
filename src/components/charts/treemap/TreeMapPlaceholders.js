import React, { Component, PropTypes }     from 'react';
import _                                   from 'lodash';
import { Link }                            from 'react-router';
import { ResponsiveTreeMapPlaceholders }   from 'nivo';
import ChartHeader                         from '../../ChartHeader';
import ChartCode                           from '../../ChartCode';
import Properties                          from '../../Properties';
import TreeMapPlaceholdersControls         from './TreeMapPlaceholdersControls';
import { generateTreeMapPlaceholdersCode } from '../../../code-generators/treeMapCodeGenerator';


class TreeMapPlaceholdersPage extends Component {
    constructor(props) {
        super(props);

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            settings: {
                mode:   'squarify',
                padding: 0,
                colors: 'nivo'
            }
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    render() {
        const { root }     = this.props;
        const { settings } = this.state;

        const code = generateTreeMapPlaceholdersCode(settings);

        return (
            <div>
                <ChartHeader chartClass="TreeMapPlaceholders" tags={['treemap', 'hierarchy', 'placeholders', 'isomorphic']} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <div className="main-chart">
                                <ResponsiveTreeMapPlaceholders
                                    margin={{ top: 30, right: 10, bottom: 30, left: 10 }}
                                    root={_.cloneDeep(root)}
                                    valueAccessor={d => d.loc}
                                    {...settings}
                                >
                                    {nodes => nodes.map(node => {
                                        return (
                                            <div
                                                style={{
                                                    position:         'absolute',
                                                    top:              node.style.y,
                                                    left:             node.style.x,
                                                    width:            node.style.width,
                                                    height:           node.style.height,
                                                    //background:       'rgba(0, 0, 0, 0.3)',
                                                    borderRadius:     '3px',
                                                    border:           '1px solid #000',
                                                }}
                                            />
                                        );
                                    })}
                                </ResponsiveTreeMapPlaceholders>
                            </div>
                            <p className="description">Use <a href="https://github.com/mbostock/d3/wiki/Treemap-Layout" target="_blank">d3 Treemap layout</a>, see <a href="https://bl.ocks.org/mbostock/4063582" target="_blank">this block</a>.</p>
                            <p className="description">Take total control over TreeMap component.</p>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <TreeMapPlaceholdersControls
                                settings={settings}
                                onSettingsUpdate={this.handleSettingsUpdate}
                            />
                            <ChartCode code={code} dataKey="root" data={_.cloneDeep(root)} />
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


export default TreeMapPlaceholdersPage;

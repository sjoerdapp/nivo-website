import React, { Component, PropTypes }     from 'react'
import _                                   from 'lodash'
import { Link }                            from 'react-router'
import { ResponsiveTreeMapPlaceholders }   from 'nivo'
import ChartHeader                         from '../../ChartHeader'
import ChartCodeAndData                    from '../../ChartCodeAndData'
import Properties                          from '../../Properties'
import TreeMapControls                     from './TreeMapControls'
import { generateTreeMapPlaceholdersCode } from '../../../code-generators/treeMapCodeGenerator'


class TreeMapPlaceholdersPage extends Component {
    constructor(props) {
        super(props)

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this)

        this.state = {
            settings: {
                tile:         'squarify',
                leavesOnly:   false,
                innerPadding: 3,
                outerPadding: 3,
                colors:       'nivo',
            }
        }
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings })
    }

    render() {
        const { root }     = this.props
        const { settings } = this.state

        const code = generateTreeMapPlaceholdersCode(settings)

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
                                    identity="name"
                                    value="loc"
                                    {...settings}
                                >
                                    {nodes => nodes.map((node, i) => {
                                        return (
                                            <div
                                                key={`${i}.${node.key}.${node.data.loc}`}
                                                style={{
                                                    position:         'absolute',
                                                    top:              node.style.y,
                                                    left:             node.style.x,
                                                    width:            node.style.width,
                                                    height:           node.style.height,
                                                    background:       node.style.color,
                                                    borderRadius:     '3px',
                                                }}
                                            />
                                        )
                                    })}
                                </ResponsiveTreeMapPlaceholders>
                            </div>
                            <p className="description">Use <a href="https://github.com/d3/d3-hierarchy#treemap" target="_blank">d3-hierarchy.treemap</a>, see <a href="http://bl.ocks.org/mbostock/6bbb0a7ff7686b124d80" target="_blank">this block</a>.</p>
                            <p className="description">Take total control over TreeMap component.</p>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <TreeMapControls
                                target="TreeMapPlaceholders"
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} dataKey="root" data={root} />
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="TreeMapPlaceholders"
                                properties={[
                                    ['root', 'object', true, '', ''],
                                    ['valueAccessor', 'function', true, (<code>d => d.size</code>), ''],
                                    ['labelFn', 'function', true, (<code>d => d.name</code>), ''],
                                    ['tile', 'string', true, (<code className="code-string">'squarify'</code>), (
                                        <span>
                                            valid values are: <code className="code-string">'binary'</code>, <code className="code-string">'squarify'</code>, <code className="code-string">'resquarify'</code>, <code className="code-string">'slice'</code>, <code className="code-string">'dice'</code>, <code className="code-string">'sliceDice'</code>,
                                            see <a href="https://github.com/d3/d3-hierarchy#treemap-tiling" target="_blank">d3 documentation</a>
                                        </span>
                                    )],
                                    ['borderColor', 'any', true, (<code className="code-string">'none'</code>), (<Link to="colors">documentation</Link>)],
                                    'colors',
                                    ['margin', 'object', true, (<code>Nivo.defaults.margin</code>), ''],
                                    'animate',
                                    'motionStiffness',
                                    'motionDamping',
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TreeMapPlaceholdersPage

import React, { Component, PropTypes } from 'react'
import _                               from 'lodash'
import { Link }                        from 'react-router'
import { ResponsiveTreeMap }           from 'nivo'
import ChartHeader                     from '../../ChartHeader'
import ChartCodeAndData                from '../../ChartCodeAndData'
import Properties                      from '../../Properties'
import TreeMapControls                 from './TreeMapControls'
import { generateTreeMapD3Code }       from '../../../code-generators/treeMapCodeGenerator'


class TreeMapReact extends Component {
    constructor(props) {
        super(props)

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this)

        this.state = {
            settings: {
                tile:           'squarify',
                onlyLeaves:     false,
                orientLabels:   true,
                innerPadding:   3,
                outerPadding:   3,
                enableLabels:   true,
                labelSkipSize:  0,
                labelTextColor: 'inherit:darker(.6)',
                colors:         'nivo',
                borderWidth:    1,
                borderStyle:    'solid',
                borderColor:     'inherit:darker(.3)',
                motionStiffness: 90,
                motionDamping:   15,
            }
        }
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings })
    }

    render() {
        const { root }     = this.props
        const { settings } = this.state

        const code = generateTreeMapD3Code(settings)

        return (
            <div>
                <ChartHeader chartClass="TreeMap" tags={['treemap', 'hierarchy', 'isomorphic']} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <div className="main-chart">
                                <ResponsiveTreeMap
                                    margin={{ top: 30, right: 10, bottom: 30, left: 10 }}
                                    root={_.cloneDeep(root)}
                                    identity="name"
                                    value="loc"
                                    label="loc"
                                    labelFormat=".0s"
                                    //label={node => {
                                    //    return (
                                    //        <span>
                                    //            {node.name}<br/>
                                    //            <strong>{node.loc}</strong>&nbsp;loc
                                    //        </span>
                                    //    )
                                    //}}
                                    borderColor="inherit:darker(1)"
                                    {...settings}
                                />
                            </div>
                            <p className="description">Use <a href="https://github.com/d3/d3-hierarchy#treemap" target="_blank">d3-hierarchy.treemap</a>, see <a href="http://bl.ocks.org/mbostock/6bbb0a7ff7686b124d80" target="_blank">this block</a>.</p>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <TreeMapControls
                                target="TreeMap"
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
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
        )
    }
}


export default TreeMapReact

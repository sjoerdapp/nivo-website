/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

import React, { Component, PropTypes } from 'react'
import { Link }                        from 'react-router'
import { ResponsiveLine }              from 'nivo'
import ChartHeader                     from '../../ChartHeader'
import ChartCodeAndData                from '../../ChartCodeAndData'
import Properties                      from '../../Properties'
import LineControls                    from './LineControls'
import { generateLineCode }            from '../../../code-generators/lineCodeGenerator'
import chartsConfig                    from '../../../charts-config'
import config                          from '../../../config'


class Line extends Component {
    constructor(props) {
        super(props)

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this)

        this.state = {
            settings: {
                keys:             ['whisky', 'rhum', 'gin', 'vodka', 'cognac'],
                identity:         'country',
                cumulative:       false,
                curve:            'linear',
                colors:           'nivo',
                xAxis:            true,
                xAxisOrientation: 'bottom',
                xAxisTickSize:    5,
                xAxisTickPadding: 5,
                yAxis:            true,
                yAxisOrientation: 'left',
                yAxisTickSize:    5,
                yAxisTickPadding: 5,
                animate:          true,
                motionStiffness:  90,
                motionDamping:    15,
            }
        }
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings })
    }

    render() {
        const { data, onDataUpdate } = this.props
        const { settings }           = this.state

        const code = generateLineCode(settings)

        return (
            <div>
                <ChartHeader chartClass="Line" tags={['line', 'basics', 'isomorphic', 'nivo-api']} chartSize={1} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div className="main-chart main-chart-horizontal">
                                <ResponsiveLine
                                    margin={{ top: 40, right: 50, bottom: 40, left: 50 }}
                                    data={data}
                                    {...settings}
                                />
                            </div>
                            <LineControls
                                target="Line"
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} data={data} onDataUpdate={onDataUpdate} />
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <p className="description">Line chart with stacking ability.</p>
                            <p className="description">The responsive alternative of this component is <code>&lt;ResponsiveLine /&gt;</code>.</p>
                            <p className="description">This component is available in the <a href="https://github.com/plouc/nivo-api" target="_blank">nivo-api</a>, see <a href={`${config.nivoApiUrl}/samples/line`} target="_blank">sample</a>.</p>
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="Line"
                                properties={chartsConfig.Line}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Line

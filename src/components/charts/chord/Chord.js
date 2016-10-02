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
import { ResponsiveChord }             from 'nivo'
import ChartHeader                     from '../../ChartHeader'
import ChartCodeAndData                from '../../ChartCodeAndData'
import Properties                      from '../../Properties'
import ChordControls                   from './ChordControls'
import { generateBarsD3Code }          from '../../../code-generators/barsCodeGenerator'
import config                          from '../../../config'


const matrix = [
    [ 11975,  5871, 8916, 2868, 1967, 2987, 4300 ],
    [  1951, 10048, 2060, 6171, 1967, 2987, 4300 ],
    [  8010, 16145, 8090, 8045, 1967, 2987, 4300 ],
    [  1013,   990,  940, 6907, 2306, 1200, 900  ],
    [  1013,   990,  940, 6907,  800, 3400, 1200 ],
    [  1013,   990,  940, 6907, 1967, 2987, 4300 ],
    [  1013,   990,  940, 6907, 3000, 3456, 876  ],
]

class Bars extends Component {
    constructor(props) {
        super(props)

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this)

        this.state = {
            settings: {
                padAngle:          0.02,
                innerRadiusRatio:  0.96,
                innerRadiusOffset: 0.01,
                ribbonOpacity:     0.5,
                ribbonBorderWidth: 1,
                arcOpacity:        1,
                arcBorderWidth:    1,
                colors:            'nivo',
            }
        }
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings })
    }

    render() {
        const { data, onDataUpdate } = this.props
        const { settings }           = this.state

        const code = generateBarsD3Code(settings)

        return (
            <div>
                <ChartHeader chartClass="Chord" tags={['chord']} chartSize={1} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div className="main-chart">
                                <ResponsiveChord
                                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                    data={matrix}
                                    {...settings}
                                />
                            </div>
                            <ChordControls
                                target="Chord"
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} data={data} onDataUpdate={onDataUpdate} />
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <p className="description">Chord chart.</p>
                            <p className="description">The responsive alternative of this component is <code>&lt;ResponsiveChord /&gt;</code>.</p>
                            <p className="description">This component is available in the <a href="https://github.com/plouc/nivo-api" target="_blank">nivo-api</a>, see <a href={`${config.nivoApiUrl}/samples/chord`} target="_blank">sample</a>.</p>
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="Chord"
                                properties={[
                                    ['width', 'number', true, '', (
                                        <span>not required if using <code>&lt;ResponsiveBarsD3&nbsp;/&gt;</code>.</span>
                                    )],
                                    ['height', 'number', true, '', (
                                        <span>not required if using <code>&lt;ResponsiveBarsD3&nbsp;/&gt;</code>.</span>
                                    )],
                                    ['data', 'object', true, '', 'data.'],
                                    'colors',
                                    'transitionDuration',
                                    'transitionEasing',
                                    ['transitionStaggering', 'number', true, (<code className="code-number">10</code>), 'delay (ms) between each bar transition.'],
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Bars

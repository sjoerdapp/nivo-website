import React, { Component, PropTypes } from 'react'
import { Link }                        from 'react-router'
import { ResponsiveBars }              from 'nivo'
import ChartHeader                     from '../../ChartHeader'
import ChartCodeAndData                from '../../ChartCodeAndData'
import Properties                      from '../../Properties'
import BarsControls                    from './BarsControls'
import { generateBarsD3Code }          from '../../../code-generators/barsCodeGenerator'
import config                          from '../../../config'


class Bars extends Component {
    constructor(props) {
        super(props)

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this)

        this.state = {
            settings: {
                groupMode:            'stacked',
                spacing:              0.1,
                colors:               'nivo',
                transitionDuration:   1600,
                transitionEasing:     'elastic',
                transitionStaggering: 10,
                xAxis:                true,
                xAxisOrientation:     'bottom',
                xAxisTickSize:        5,
                xAxisTickPadding:     5,
                yAxis:                true,
                yAxisOrientation:     'left',
                yAxisTickSize:        5,
                yAxisTickPadding:     5,
                animate:              true,
                motionStiffness:      90,
                motionDamping:        15,
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
                <ChartHeader chartClass="Bars" tags={['bars', 'basics', 'isomorphic']} chartSize={1} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div className="main-chart main-chart-horizontal">
                                <ResponsiveBars
                                    margin={{ top: 40, right: 50, bottom: 40, left: 50 }}
                                    keys={['beer', 'whisky', 'rhum', 'gin', 'vodka', 'cognac']}
                                    data={data}
                                    identity="country"
                                    {...settings}
                                />
                            </div>
                            <BarsControls
                                target="Bars"
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} data={data} onDataUpdate={onDataUpdate} />
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <p className="description">Bar chart with grouping ability, stacked or side by side.</p>
                            <p className="description">The responsive alternative of this component is <code>&lt;ResponsiveBars /&gt;</code>.</p>
                            <p className="description">This component is available in the <a href="https://github.com/plouc/nivo-api" target="_blank">nivo-api</a>, see <a href={`${config.nivoApiUrl}/samples/bar`} target="_blank">sample</a>.</p>
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="Bars"
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

import React, { Component, PropTypes } from 'react'
import { Link }                        from 'react-router'
import { ResponsiveBarsPlaceholders }  from 'nivo'
import ChartHeader                     from '../../ChartHeader'
import ChartCodeAndData                from '../../ChartCodeAndData'
import Properties                      from '../../Properties'
import BarsControls                    from './BarsControls'
import { generateBarsD3Code }          from '../../../code-generators/barsCodeGenerator'


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
                <ChartHeader chartClass="BarsPlaceholders" tags={['bars', 'basics', 'placeholders', 'isomorphic']} chartSize={1} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div className="main-chart main-chart-horizontal">
                                <ResponsiveBarsPlaceholders
                                    margin={{ top: 40, right: 50, bottom: 40, left: 50 }}
                                    keys={['beer', 'whisky', 'rhum', 'gin', 'vodka', 'cognac']}
                                    data={data}
                                    identity="id"
                                    {...settings}
                                />
                            </div>
                            <BarsControls
                                target="BarsPlaceholders"
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} data={data} onDataUpdate={onDataUpdate} />
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <p className="description">Bar chart with grouping ability, stacked or side by side.</p>
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="BarsPlaceholders"
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

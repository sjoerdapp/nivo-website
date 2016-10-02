import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import { Link }                        from 'react-router';
import { ResponsiveBarsD3 }            from 'nivo';
import ChartHeader                     from '../../ChartHeader';
import ChartCodeAndData                from '../../ChartCodeAndData';
import Properties                      from '../../Properties';
import BarsD3Controls                  from './BarsD3Controls';
import { generateBarsD3Code }          from '../../../code-generators/barsCodeGenerator';


class BarsD3Page extends Component {
    constructor(props) {
        super(props);

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            settings: {
                groupMode:            'stacked',
                colors:               'nivo',
                transitionDuration:   1600,
                transitionEasing:     'elastic',
                transitionStaggering: 10,
            }
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    render() {
        const { data, onDataUpdate } = this.props;
        const { settings }           = this.state;

        const code = generateBarsD3Code(settings);

        return (
            <div>
                <ChartHeader chartClass="BarsD3" tags={['bars', 'basics', 'd3']} chartSize={1} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div className="main-chart main-chart-horizontal">
                                <ResponsiveBarsD3
                                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                    data={data}
                                    {...settings}
                                />
                            </div>
                            <BarsD3Controls
                                settings={settings}
                                onSettingsUpdate={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} data={data} onDataUpdate={onDataUpdate} />
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <p className="description">This component use d3 for both layout computing and DOM mutations. It's not suitable for isomorphic rendering.</p>
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="BarsD3"
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
        );
    }
}


export default BarsD3Page;

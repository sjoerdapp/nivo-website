import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import { Link }                        from 'react-router';
import { ResponsiveBubbleD3 }          from 'nivo';
import ChartHeader                     from '../../ChartHeader';
import ChartCodeAndData                from '../../ChartCodeAndData';
import Properties                      from '../../Properties';
import BubbleControls                  from './BubbleControls';
import { generateBubbleD3Code }        from '../../../code-generators/bubbleCodeGenerator';


class BubblePage extends Component {
    constructor(props) {
        super(props);

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            settings: {
                colors:         'nivo',
                padding:         1,
                labelSkipRadius: 18,
                labelTextColor:  'inherit:darker(.8)',
                labelTextDY:     4,
                borderWidth:     0,
                borderColor:     'inherit:darker(.3)',
                motionStiffness: 120,
                motionDamping:   10
            }
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    render() {
        const { root }     = this.props;
        const { settings } = this.state;

        const code = generateBubbleD3Code(settings);

        return (
            <div>
                <ChartHeader chartClass="BubbleD3" tags={['bubble', 'hierarchy', 'd3']} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <div className="main-chart">
                                <ResponsiveBubbleD3
                                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                    data={_.cloneDeep(root)}
                                    value="loc"
                                    {...settings}
                                />
                            </div>
                            <p className="description">This component use d3 for both layout computing and DOM mutations. It's not suitable for isomorphic rendering, if you need it, you should use the <Link to="/bubble/react">&lt;Bubble /&gt;</Link> component. This one performs better on transitions. If you want to completely customize your Bubble chart, have a look at the <Link to="/bubble/placeholders">&lt;BubblePlaceholders /&gt;</Link> component.</p>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <BubbleControls
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} data={root} />
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="BubbleD3"
                                properties={[
                                    'width',
                                    'height',
                                    ['data', 'object', true, '', 'data.'],
                                    ['value', 'string|function', true, (<code className="code-string">"value"</code>), (
                                        <span>
                                            define value accessor, if string given, will use <code>datum[value]</code>,<br/>if function given, it will be invoked for each node and will receive the node as first argument, it must the node value.
                                        </span>
                                    )],
                                    ['padding', 'number', true, (<code className="code-number">1</code>), (
                                        <span>sets the approximate padding between adjacent circles, in pixels. see <a href="https://github.com/mbostock/d3/wiki/Pack-Layout#padding" target="_blank">official d3 documentation</a>.</span>
                                    )],
                                    ['colors', '*', true, (<code>Nivo.defaults.colorRange</code>), (
                                        <span>
                                            colors used to colorize the circles, <Link to="/guides/colors">see dedicated documentation</Link>.
                                        </span>
                                    )],
                                    ['borderWidth', 'number', true, (<code className="code-number">0</code>), 'width of circle border.'],
                                    ['borderColor', 'any', true, (<code className="code-string">"inherit"</code>), (
                                        <span>
                                            how to compute border color, <Link to="/guides/colors">see dedicated documentation</Link>.
                                        </span>
                                    )],
                                    ['label', 'string', true, (<code className="code-string">"name"</code>), ''],
                                    ['labelFormat', 'string', false, '', (
                                        <span>
                                            how to format label, <a href="https://github.com/mbostock/d3/wiki/Formatting#d3_format" target="_blank">see d3.format() documentation</a>.
                                        </span>
                                    )],
                                    ['labelSkipRadius', 'number', true, (<code className="code-number">0</code>), 'if > 0, labels won\'t be rendered for nodes with a radius below the given value.'],
                                    ['labelTextColor', 'any', true, (<code className="code-string">"none"</code>), (
                                        <span>
                                            how to compute text color, <Link to="/guides/colors">see dedicated documentation</Link>.
                                        </span>
                                    )],
                                    ['labelTextDY', 'number', true, (<code className="code-number">5</code>), (
                                        <span>
                                            label y offset, used to vertically center text.
                                        </span>
                                    )],
                                    'transitionDuration',
                                    'transitionEasing'
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default BubblePage;

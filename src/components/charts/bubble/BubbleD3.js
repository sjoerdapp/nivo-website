import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import { Link }                        from 'react-router';
import { ResponsiveBubbleD3, BubbleLegends } from 'nivo';
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
                colors:     'nivo',
                padding:    1,
                skipRadius: 18,
                textColor:  'inherit:darker(.8)',
                stiffness:  120,
                damping:    10
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
                                    root={_.cloneDeep(root)}
                                    value="loc"
                                    {...settings}
                                >
                                    <BubbleLegends
                                        textColor={settings.textColor}
                                        skipRadius={settings.skipRadius}
                                    />
                                </ResponsiveBubbleD3>
                            </div>
                            <p className="description">Use d3 for DOM mutation and transitions.</p>
                            <p className="description">This chart offer various implementations, you can render it using <Link to="/bubble/d3">pure d3</Link> or <Link to="/bubble">let react handles all the rendering</Link> and you can even <Link to="/bubble/placeholders">render whatever you want</Link> instead of the boring circles.</p>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <BubbleControls
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} dataKey="root" data={root} />
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="BubbleD3"
                                properties={[
                                    'width',
                                    'height',
                                    ['root', 'object', true, '', 'data.'],
                                    ['value', 'string|function', true, (<code className="code-string">"value"</code>), (
                                        <span>
                                            define value accessor, if string given, will use <code>datum[value]</code>,<br/>if function given, it will be invoked for each node and will receive the node as first argument, it must the node value.
                                        </span>
                                    )],
                                    ['padding', 'number', true, (<code className="code-number">1</code>), (
                                        <span>sets the approximate padding between adjacent circles, in pixels. see <a href="https://github.com/mbostock/d3/wiki/Pack-Layout#padding" target="_blank">official d3 documentation</a>.</span>
                                    )],
                                    'colors',
                                    'transitionDuration',
                                    'transitionEasing'
                                ]}
                            />
                        </div>
                        <div className="grid_item grid_item-full">
                            <h2>BubbleLegends</h2>
                            <p className="description">By default, the Bubble component doesn't display any label, this component will add some, centered on each node.</p>
                            <h3>Properties</h3>
                            <Properties
                                chartClass="BubbleLegends"
                                properties={[
                                    ['labelAccessor', 'function', true, (<code>d => d.name</code>), ''],
                                    ['textColor', 'any', true, (<code className="code-string">'none'</code>), (
                                        <span>
                                            how to compute text color, <Link to="colors">see dedicated documentation</Link>.
                                        </span>
                                    )],
                                    ['skipRadius', 'number', true, 0, 'if > 0, labels won\'t be rendered for nodes with a radius below the given value.']
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

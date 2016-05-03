import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import { Link }                        from 'react-router';
import { Bubble }                      from 'nivo';
import ChartHeader                     from '../../ChartHeader';
import ChartCodeAndData                from '../../ChartCodeAndData';
import Properties                      from '../../Properties';
import { generateBubbleCode }          from '../../../code-generators/bubbleCodeGenerator';
import BubbleControls                  from './BubbleControls';


class BubbleReact extends Component {
    constructor(props) {
        super(props);

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            settings: {
                colors:        'nivo',
                padding:       1,
                enableFisheye: false,
                skipRadius:    18,
                textColor:     'inherit:darker(.8)',
                stiffness:     120,
                damping:       10
            }
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    render() {
        const { root }     = this.props;
        const { settings } = this.state;

        const code = generateBubbleCode(settings);

        return (
            <div>
                <ChartHeader chartClass="Bubble" tags={['bubble', 'hierarchy', 'react', 'isomorphic']} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <div className="main-chart">
                                <Bubble
                                    margin={{ top: 40, bottom: 40 }}
                                    root={_.cloneDeep(root)}
                                    valueProperty="loc"
                                    {...settings}
                                >
                                </Bubble>
                            </div>
                            <div>
                                <p className="description">Use React for rendering and react-motion for transitions.</p>
                                <p className="description">This chart offer various implementations, you can render it using <Link to="/bubble/d3">pure d3</Link> or <Link to="/bubble">let react handles all the rendering</Link> and you can even <Link to="/bubble/placeholders">render whatever you want</Link> instead of the boring circles.</p>
                            </div>
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
                                chartClass="Bubble"
                                properties={[
                                    ['root', 'object', true, '', ''],
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


export default BubbleReact;

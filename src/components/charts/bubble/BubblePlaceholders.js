import React, { Component, PropTypes }    from 'react';
import _                                  from 'lodash';
import { Link }                           from 'react-router';
import { ResponsiveBubblePlaceholders }   from 'nivo';
import ChartHeader                        from '../../ChartHeader';
import ChartCodeAndData                   from '../../ChartCodeAndData';
import Properties                         from '../../Properties';
import { generateBubblePlaceholdersCode } from '../../../code-generators/bubbleCodeGenerator';
import BubblePlaceholdersControls         from './BubblePlaceholdersControls';


class BubblePlaceholdersPage extends Component {
    constructor(props) {
        super(props);

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            settings: {
                padding:   1,
                colors:    'nivo',
                stiffness: 120,
                damping:   10
            }
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    render() {
        const { root }     = this.props;
        const { settings } = this.state;

        const code = generateBubblePlaceholdersCode(settings);

        return (
            <div>
                <ChartHeader chartClass="BubblePlaceholders" tags={['bubble', 'hierarchy', 'placeholders', 'isomorphic']} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <div className="main-chart">
                                <ResponsiveBubblePlaceholders
                                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                    root={_.cloneDeep(root)}
                                    namespace="html"
                                    value="loc"
                                    {...settings}
                                >
                                    {nodes => nodes.map(node => {
                                        return (
                                            <div
                                                key={node.key}
                                                style={{
                                                    position:        'absolute',
                                                    top:             node.style.y - node.style.r,
                                                    left:            node.style.x - node.style.r,
                                                    width:           node.style.r * 2,
                                                    height:          node.style.r * 2,
                                                    borderRadius:    node.style.r,
                                                    border:          `2px solid ${node.style.color}`,
                                                    backgroundSize:  'contain',
                                                    backgroundImage: `url(http://placekitten.com/240/240)`
                                                    //backgroundImage: `url(http://placekitten.com/${Math.ceil(node.data.r * 2)}/${Math.ceil(node.data.r * 2)})`
                                                }}
                                            />
                                        );
                                    })}
                                </ResponsiveBubblePlaceholders>
                            </div>
                            <p className="description">Take total control over Bubble component (kittens compliant).</p>
                            <p className="description">This chart offer various implementations, you can render it using <Link to="/bubble/d3">pure d3</Link> or <Link to="/bubble">let react handles all the rendering</Link> and you can even <Link to="/bubble/placeholders">render whatever you want</Link> instead of the boring circles.</p>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <BubblePlaceholdersControls
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} dataKey="root" data={root} />
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="BubblePlaceholders"
                                properties={[
                                    'width',
                                    'height',
                                    ['root', 'object', true, '', 'data.'],
                                    ['value', 'string|function', true, (<code className="code-string">"value"</code>), (
                                        <span>
                                            define value accessor, if string given, will use <code>datum[value]</code>,<br/>if function given, it will be invoked for each node and will receive the node as first argument, it must the node value.
                                        </span>
                                    )],
                                    ['namespace', 'string', true, (<code className="code-string">"html"</code>), (
                                        <span>
                                            must be one of <code className="code-string">"html"</code> or <code className="code-string">"svg"</code>,<br/>when <code className="code-string">"html"</code> used, the surrounding elements will be <code>&lt;div/&gt;</code> tags,<br/>for <code className="code-string">"svg"</code>, you'll have a <code>&lt;g/&gt;</code> tag wrapped inside an <code>&lt;svg/&gt;</code> tag.
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
                                    'motionStiffness',
                                    'motionDamping',
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default BubblePlaceholdersPage;

import React, { Component, PropTypes }  from 'react';
import _                                from 'lodash';
import { Link }                         from 'react-router';
import { ResponsiveStack, StackSlicer } from 'nivo';
import { generateStackData }            from 'nivo-generators';
import ChartHeader                      from '../../ChartHeader';
import ChartCodeAndData                 from '../../ChartCodeAndData';
import Properties                       from '../../Properties';
import generateStackCode                from '../../../code-generators/stackCodeGenerator';
import StackControls                    from './StackControls';
import StackSlicerControls              from './StackSlicerControls';


class StackPage extends Component {
    constructor(props) {
        super(props);

        this.handleDiceRoll                  = this.handleDiceRoll.bind(this);
        this.handleStackSettingsUpdate       = this.handleStackSettingsUpdate.bind(this);
        this.handleStackSlicerSettingsUpdate = this.handleStackSlicerSettingsUpdate.bind(this);

        this.state = {
            stackSettings: {
                offset:          'expand',
                colors:          'nivo',
                overColor:       'inherit:brighter(.8)',
                controlsSpacing: 15,
            },
            stackSlicerSettings: {
                showOnOver:      false,
                radius:          5,
                color:           'inherit:brighter(.3)',
                dotBorderWidth:  1,
                dotBorderColor:  'inherit:darker(.6)',
                lineWidth:       1,
                lineColor:       'inherit:darker(.6)',
            },
            layers: [],
        };
    }

    handleDiceRoll() {
        this.setState({ layers: generateStackData(6) });
    }

    handleStackSettingsUpdate(stackSettings) {
        this.setState({ stackSettings });
    }

    handleStackSlicerSettingsUpdate(stackSlicerSettings) {
        this.setState({ stackSlicerSettings });
    }

    componentWillMount() {
        this.handleDiceRoll();
    }

    render() {
        const { layers, stackSettings, stackSlicerSettings } = this.state;

        const code = generateStackCode(stackSettings, stackSlicerSettings);

        return (
            <div>
                <ChartHeader chartClass="Stack" tags={['stack']} chartSize={1} />
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div className="main-chart main-chart-horizontal" style={{ position: 'relative' }}>
                                <ResponsiveStack
                                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                                    data={_.cloneDeep(layers)}
                                    {...stackSettings}
                                >
                                    <StackSlicer {...stackSlicerSettings} />
                                </ResponsiveStack>
                            </div>
                            <StackControls
                                settings={stackSettings}
                                onSettingsUpdate={this.handleStackSettingsUpdate}
                            />
                            <StackSlicerControls
                                settings={stackSlicerSettings}
                                onSettingsUpdate={this.handleStackSlicerSettingsUpdate}
                            />
                            <ChartCodeAndData code={code} dataKey="layers" data={layers} />
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <p className="description">Use <a href="https://github.com/mbostock/d3/wiki/Stack-Layout" target="_blank">d3 Stack layout</a>, there's also a <Link to="radial-stack">RadialStack</Link></p>
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="Stack"
                                properties={[
                                    ['width', 'number', true, '', ''],
                                    ['height', 'number', true, '', ''],
                                    ['sort', 'function', false, (<code>null</code>), ''],
                                    ['data', 'array', true, '', ''],
                                    ['offset', 'string', true, (<code className="code-string">'zero'</code>), ''],
                                    ['keyProp', 'string', true, (<code className="code-string">'label'</code>), ''],
                                    ['valueProp', 'string', true, (<code className="code-string">'value'</code>), ''],
                                    ['interpolation', 'string', true, (<code className="code-string">'monotone'</code>), (<a href="https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate" target="_blank">official d3 documentation</a>)],
                                    'transitionDuration',
                                    'transitionEasing',
                                ]}
                            />
                        </div>
                        <div className="grid_item grid_item-full">
                            <Properties
                                chartClass="StackSlicer"
                                properties={[
                                    ['showOnOver', 'boolean', true, (<code>false</code>), 'if true, only shows dots on mouseover'],
                                    ['radius', 'number', true, (<code className="code-number">4</code>), 'defines dots radius.'],
                                    ['color', 'any', true, (<code className="code-string">"inherit"</code>), (
                                        <span>
                                            how to compute dot color, <Link to="/guides/colors">see dedicated documentation</Link>.
                                        </span>
                                    )],
                                    ['dotBorderWidth', 'number', true, (<code className="code-number">1</code>), 'defines dots border width.'],
                                    ['dotBorderColor', 'any', true, (<code className="code-string">"inherit:darker(.4)"</code>), (
                                        <span>
                                            how to compute dot border color, <Link to="/guides/colors">see dedicated documentation</Link>.
                                        </span>
                                    )],
                                    ['lineWidth', 'number', true, (<code className="code-number">1</code>), 'defines line width.'],
                                    ['lineColor', 'any', true, (<code className="code-string">"inherit:darker(.4)"</code>), (
                                        <span>
                                            how to compute line color, <Link to="/guides/colors">see dedicated documentation</Link>.
                                        </span>
                                    )],
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default StackPage;

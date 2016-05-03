import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import { Link }                        from 'react-router';
import { ResponsiveStack as Stack }    from 'nivo';
import { generateStackData }           from '../../generators';
import ChartHeader                     from '../ChartHeader';
import ChartCodeAndData                from '../ChartCodeAndData';
import Properties                      from '../Properties';
import StackControls                   from './StackControls';
import generateStackCode               from '../../code-generators/generateStackCode';


class StackPage extends Component {
    constructor(props) {
        super(props);

        this.handleDiceRoll       = this.handleDiceRoll.bind(this);
        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            settings: {
                offset: 'zero',
                colors: 'nivo'
            },
            layers: []
        };
    }

    handleDiceRoll() {
        this.setState({ layers: generateStackData(6) });
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    componentWillMount() {
        this.handleDiceRoll();
    }

    render() {
        const { layers, settings } = this.state;

        const code = generateStackCode(settings);

        return (
            <div>
                <ChartHeader chartClass="Stack" tags={['stack']} />
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div className="main-chart main-chart-horizontal">
                                <Stack layers={_.cloneDeep(layers)} {...settings} margin={{ top: 80 }} />
                            </div>
                            <StackControls
                                settings={settings}
                                onSettingsUpdate={this.handleSettingsUpdate}
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
                                    ['layers', 'array', true, '', ''],
                                    ['offset', 'string', true, (<code className="code-string">'zero'</code>), ''],
                                    ['keyProp', 'string', true, (<code className="code-string">'label'</code>), ''],
                                    ['valueProp', 'string', true, (<code className="code-string">'value'</code>), ''],
                                    ['interpolation', 'string', true, (<code className="code-string">'monotone'</code>), (<a href="https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate" target="_blank">official d3 documentation</a>)],
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

/*
<div className="grid_item grid_item-1_3">
    <h3>'wiggle' offset</h3>
    <div className="chart" style={{ height: '110px' }}>
        <Chart margin={{ top: 10, bottom: 10 }}>
            <Stack layers={_.cloneDeep(layers)} offset="wiggle" colors="nivo" />
        </Chart>
    </div>
</div>
<div className="grid_item grid_item-1_3">
    <h3>'silhouette' offset</h3>
    <div className="chart" style={{ height: '110px' }}>
        <Chart margin={{ top: 10, bottom: 10 }}>
            <Stack layers={_.cloneDeep(layers)} offset="silhouette" colors="nivo" />
        </Chart>
    </div>
</div>
<div className="grid_item grid_item-1_3">
    <h3>'expand' offset</h3>
    <div className="chart" style={{ height: '110px' }}>
        <Chart>
            <Stack layers={_.cloneDeep(layers)} offset="expand" colors="nivo" />
        </Chart>
    </div>
</div>
*/


export default StackPage;

import React, { Component, PropTypes }      from 'react';
import d3                                   from 'd3';
import _                                    from 'lodash';
import { generateProgrammingLanguageStats } from '../generators';
import ChartCodeAndData                     from './ChartCodeAndData';
import Nivo, {
    Chart,
    Pie,
    PieColumnLegends,
    PieRadialLegends,
    PieSliceLegends
} from 'nivo';

const category10  = d3.scale.category10().range();
const category20  = d3.scale.category20().range();
const category20b = d3.scale.category20b().range();
const category20c = d3.scale.category20c().range();


class ColorsPage extends Component {
    render() {
        const langs    = generateProgrammingLanguageStats(false, 3);
        const langsExt = generateProgrammingLanguageStats(false, 20);

        const colorDirectives = ['none', 'inherit', 'inherit:darker(.5)', 'inherit:brighter(.5)'];

        return (
            <div>
                <div className="chart_header">
                    <div className="grid_item-2_3">
                        <h1 className="page_header">Colors</h1>
                    </div>
                </div>
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <h2>The colors property</h2>
                            <div className="intro">
                                <p className="description">
                                    Beside highlighting data insights, your dataviz should be pretty, right ?<br />
                                    nivo provides an easy way to deal with colors, very useful when using nested components.
                                </p>
                            </div>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <div className="grid">
                                <div className="grid_item grid_item-1_5">
                                    <h3>nivo</h3>
                                    <div style={{ height: 90 }}>
                                        <Chart margin={{}}>
                                            <Pie innerRadius={0.6} data={_.cloneDeep(langsExt)} colors="nivo" transitionDuration={0} />
                                        </Chart>
                                    </div>
                                </div>
                                <div className="grid_item grid_item-1_5">
                                    <h3>d310</h3>
                                    <div style={{ height: 90 }}>
                                        <Chart margin={{}}>
                                            <Pie innerRadius={0.6} data={_.cloneDeep(langsExt)} colors="d310" transitionDuration={0} />
                                        </Chart>
                                    </div>
                                </div>
                                <div className="grid_item grid_item-1_5">
                                    <h3>d320</h3>
                                    <div style={{ height: 90 }}>
                                        <Chart margin={{}}>
                                            <Pie innerRadius={0.6} data={_.cloneDeep(langsExt)} colors="d320" transitionDuration={0} />
                                        </Chart>
                                    </div>
                                </div>
                                <div className="grid_item grid_item-1_5">
                                    <h3>d320b</h3>
                                    <div style={{ height: 90 }}>
                                        <Chart margin={{}}>
                                            <Pie innerRadius={0.6} data={_.cloneDeep(langsExt)} colors="d320b" transitionDuration={0} />
                                        </Chart>
                                    </div>
                                </div>
                                <div className="grid_item grid_item-1_5">
                                    <h3>d320c</h3>
                                    <div style={{ height: 90 }}>
                                        <Chart margin={{}}>
                                            <Pie innerRadius={0.6} data={_.cloneDeep(langsExt)} colors="d320c" transitionDuration={0} />
                                        </Chart>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid_item grid_item-full">
                            <table>
                                <thead>
                                <tr>
                                    <th>directive</th>
                                    <th>description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><code className="code-string">'data'</code></td>
                                    <td>use this directive when your data set already contains a color property (<code>d.color || d.data.color</code>).</td>
                                </tr>
                                <tr>
                                    <td><code>function</code></td>
                                    <td>if you want a full control over color generation, you can provide a custom generator function, it will receive the data bound to each element you want to colorize.</td>
                                </tr>
                                <tr>
                                    <td><code className="code-string">'nivo'</code></td>
                                    <td>
                                        looks familiar isn't it, obviously it's the categorical colors used on this doc.<br />
                                        {Nivo.colors.nivoCategoricalColors().range().map(color => (
                                            <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <td><code className="code-string">'d310'</code></td>
                                    <td>
                                        Use d3 categorical colors <code>category10</code>, <a href="https://github.com/mbostock/d3/wiki/Ordinal-Scales#category10" target="_blank">d3 documentation</a>.<br />
                                        {category10.map(color => (
                                            <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <td><code className="code-string">'d320'</code></td>
                                    <td>
                                        Use d3 categorical colors <code>category20</code>, <a href="https://github.com/mbostock/d3/wiki/Ordinal-Scales#category20" target="_blank">d3 documentation</a>.<br />
                                        {category20.map(color => (
                                            <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <td><code className="code-string">'d320b'</code></td>
                                    <td>
                                        Use d3 categorical colors <code>category20b</code>, <a href="https://github.com/mbostock/d3/wiki/Ordinal-Scales#category20b" target="_blank">d3 documentation</a>.<br />
                                        {category20b.map(color => (
                                            <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <td><code className="code-string">'d320c'</code></td>
                                    <td>
                                        Use d3 categorical colors <code>category20c</code>, <a href="https://github.com/mbostock/d3/wiki/Ordinal-Scales#category20c" target="_blank">d3 documentation</a>.<br />
                                        {category20c.map(color => (
                                            <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                        ))}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="grid_item grid_item-full">
                            <h2>Single color property</h2>
                            <p className="description">A lot of components have a <code>*Color</code> property, but what can we pass to it ?</p>
                        </div>
                        {colorDirectives.map(directive => (
                            <div className="grid_item grid_item-1_4">
                                <h3>{directive}</h3>
                                <div style={{ width: 320, height: 200 }}>
                                    <Chart margin={{ top: 60, right: 0, bottom: 50 }}>
                                        <Pie
                                            innerRadius={0.6} endAngle={360}
                                            data={langs} colors="nivo"
                                            transitionDuration={0}
                                        >
                                            <PieColumnLegends
                                                horizontalOffset={30} radiusOffset={20}
                                                lineColor={directive} textColor={directive}
                                                transitionDuration={0}
                                            />
                                        </Pie>
                                    </Chart>
                                </div>
                                <ChartCodeAndData code={`<Whatever color="${directive}" />`} />
                            </div>
                        ))}
                        <div className="grid_item-full">
                            <table>
                                <thead>
                                    <tr>
                                        <th>directive</th>
                                        <th>description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code className="code-string">'none'</code></td>
                                        <td>will do nothing, it's often the default, it's useful if you manage chart styles via <code>css</code></td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'inherit'</code></td>
                                        <td>will use color from parent context/component</td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'inherit:darker(.5)'</code></td>
                                        <td>will use parent context/component color, and apply <a href="https://github.com/mbostock/d3/wiki/Colors#rgb_darker" target="_blank"><code>darker</code></a> function on it with an amount of <code className="code-number">.5</code></td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'inherit:brighter(1)'</code></td>
                                        <td>will use parent context/component color, and apply <a href="https://github.com/mbostock/d3/wiki/Colors#rgb_brighter" target="_blank"><code>brighter</code></a> function on it with an amount of <code className="code-number">1</code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ColorsPage;

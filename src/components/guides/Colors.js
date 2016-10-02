import React, { Component, PropTypes }      from 'react'
import _                                    from 'lodash'
import { generateProgrammingLanguageStats } from 'nivo-generators'
import ChartCodeAndData                     from '../ChartCodeAndData'
import {
    schemeCategory10,
    schemeCategory20,
    schemeCategory20b,
    schemeCategory20c,
} from 'd3'
import {
    schemeAccent,
    schemeDark2,
    schemePaired,
    schemePastel1,
    schemePastel2,
    schemeSet1,
    schemeSet2,
    schemeSet3,
} from 'd3-scale-chromatic'
import Nivo, {
    Chart,
    Pie,
    PieColumnLegends,
    PieRadialLegends,
    PieSliceLegends
} from 'nivo'


class Colors extends Component {
    render() {
        const langs    = generateProgrammingLanguageStats(false, 3)
        const langsExt = generateProgrammingLanguageStats(false, 20)

        const colorDirectives = ['none', 'inherit', 'inherit:darker(.5)', 'inherit:brighter(.5)']

        return (
            <div>
                <div className="chart_header">
                    <div className="grid_item-1_3">
                        <h1 className="page_header">Colors</h1>
                        <p>Understanding nivo color related properties.</p>
                    </div>
                    <div className="grid_item-2_3" />
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
                        {/*
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
                        */}
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
                                            <p>looks familiar isn't it, obviously it's the categorical colors used on this doc.</p>
                                            {Nivo.colors.nivoCategoricalColors().range().map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'d310'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale" target="_blank">d3-scale</a> package <a href="https://github.com/d3/d3-scale#schemeCategory10" target="_blank">schemeCategory10</a> color scale.</p>
                                            {schemeCategory10.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'d320'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale" target="_blank">d3-scale</a> package <a href="https://github.com/d3/d3-scale#schemeCategory20" target="_blank">schemeCategory20</a> color scale.</p>
                                            {schemeCategory20.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'d320b'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale" target="_blank">d3-scale</a> package <a href="https://github.com/d3/d3-scale#schemeCategory20b" target="_blank">schemeCategory20b</a> color scale.</p>
                                            {schemeCategory20b.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'d320c'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale" target="_blank">d3-scale</a> package <a href="https://github.com/d3/d3-scale#schemeCategory20c" target="_blank">schemeCategory20c</a> color scale.</p>
                                            {schemeCategory20c.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'accent'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale-chromatic" target="_blank">d3-scale-chromatic</a> package <a href="https://github.com/d3/d3-scale-chromatic#schemeAccent" target="_blank">schemeAccent</a> color scale.</p>
                                            {schemeAccent.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'dark2'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale-chromatic" target="_blank">d3-scale-chromatic</a> package <a href="https://github.com/d3/d3-scale-chromatic#schemeDark2" target="_blank">schemeDark2</a> color scale.</p>
                                            {schemeDark2.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'paired'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale-chromatic" target="_blank">d3-scale-chromatic</a> package <a href="https://github.com/d3/d3-scale-chromatic#schemePaired" target="_blank">schemePaired</a> color scale.</p>
                                            {schemePaired.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'pastel1'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale-chromatic" target="_blank">d3-scale-chromatic</a> package <a href="https://github.com/d3/d3-scale-chromatic#schemePastel1" target="_blank">schemePastel1</a> color scale.</p>
                                            {schemePastel1.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'pastel2'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale-chromatic" target="_blank">d3-scale-chromatic</a> package <a href="https://github.com/d3/d3-scale-chromatic#schemePastel2" target="_blank">schemePastel2</a> color scale.</p>
                                            {schemePastel2.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'set1'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale-chromatic" target="_blank">d3-scale-chromatic</a> package <a href="https://github.com/d3/d3-scale-chromatic#schemeSet1" target="_blank">schemeSet1</a> color scale.</p>
                                            {schemeSet1.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'set2'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale-chromatic" target="_blank">d3-scale-chromatic</a> package <a href="https://github.com/d3/d3-scale-chromatic#schemeSet2" target="_blank">schemeSet2</a> color scale.</p>
                                            {schemeSet2.map(color => (
                                                <span style={{ display: 'inline-block', background: color, width: 18, height: 18 }}></span>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code className="code-string">'set3'</code></td>
                                        <td>
                                            <p><a href="https://github.com/d3/d3-scale-chromatic" target="_blank">d3-scale-chromatic</a> package <a href="https://github.com/d3/d3-scale-chromatic#schemeSet3" target="_blank">schemeSet3</a> color scale.</p>
                                            {schemeSet3.map(color => (
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
                        {/*colorDirectives.map(directive => (
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
                        ))*/}
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
        )
    }
}


export default Colors

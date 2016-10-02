import React                         from 'react'
import { Line, Axis, curvePropKeys } from 'nivo'


const TreeMapDefaults = Line.defaultProps
const AxisDefaults    = Axis.defaultProps

const curveOptions = []
curvePropKeys.forEach((curve, i) => {
    curveOptions.push(<code key={curve}>'{curve}'</code>)
    if (i < curvePropKeys.length - 1) {
        curveOptions.push(<span key={`${curve}.comma`}>,&nbsp;</span>)
    }
})


module.exports = [
    ['width', 'number', true, '', (
        <span>not required if using <code>&lt;ResponsiveLine&nbsp;/&gt;</code>.</span>
    )],
    ['height', 'number', true, '', (
        <span>not required if using <code>&lt;ResponsiveLine&nbsp;/&gt;</code>.</span>
    )],
    ['data', 'array', true, '', (
        <div>
            The chart data.
        </div>
    )],
    ['keys', 'array', true, '', (
        <div>
            The keys used to extract series from the dataSet.
        </div>
    )],
    ['cumulative', 'boolean', false, <code>{TreeMapDefaults.cumulative ? 'true' : 'false'}</code>, (
        <div>
            When set to <code>true</code>, instead of rendering each serie independently, they will be stacked.
        </div>
    )],
    ['curve', 'string', false, <code>'{TreeMapDefaults.curve}'</code>, (
        <div>
            Defines the curve factory to use for the line generator.<br />
            Must be one of: {curveOptions}.
        </div>
    )],
    ['xAxis', 'boolean', false, <code>{TreeMapDefaults.xAxis ? 'true' : 'false'}</code>, 'Enable/disable x axis.'],
    ['xAxisOrientation', 'string', false, <code>'{TreeMapDefaults.xAxisOrientation}'</code>, 'X axis orientation.'],
    ['xAxisTickSize', 'number', false, <code>{AxisDefaults.tickSize}</code>, 'Size of the ticks for x axis.'],
    ['xAxisTickPadding', 'number', false, <code>{AxisDefaults.tickPadding}</code>, 'Padding between ticks and ticks legend for x axis.'],
    ['yAxis', 'boolean', false, <code>{TreeMapDefaults.yAxis ? 'true' : 'false'}</code>, 'Enable/disable y axis.'],
    ['yAxisOrientation', 'string', false, <code>'{TreeMapDefaults.yAxisOrientation}'</code>, 'Y axis orientation.'],
    ['yAxisTickSize', 'number', false, <code>{AxisDefaults.tickSize}</code>, 'Size of the ticks for y axis.'],
    ['yAxisTickPadding', 'number', false, <code>{AxisDefaults.tickPadding}</code>, 'Padding between ticks and ticks legend for y axis.'],
    'colors',
]

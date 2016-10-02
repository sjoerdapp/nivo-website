export const generateLineCode = ({
    keys,
    identity,
    cumulative,
    curve,
    colors,
    xAxis,
    xAxisOrientation,
    xAxisTickSize,
    xAxisTickPadding,
    yAxis,
    yAxisOrientation,
    yAxisTickSize,
    yAxisTickPadding,
    animate,
    motionStiffness,
    motionDamping,
}) => {
    return `import { render } from 'react-dom'
import { Line }   from 'nivo'

const data = [/*…*/]

render((
    <Line
        width={800} height={300}
        data={data} identity="${identity}"
        keys={['${keys.join('\', \'')}']}
        cumulative={${cumulative ? 'true' : 'false'}}
        colors="${colors}"
        curve="${curve}"
        xAxis={${xAxis ? 'true' : 'false'}} xAxisOrientation="${xAxisOrientation}"
        xAxisTickSize={${xAxisTickSize}} xAxisTickPadding={${xAxisTickPadding}}
        yAxis={${yAxis ? 'true' : 'false'}} yAxisOrientation="${yAxisOrientation}"
        yAxisTickSize={${yAxisTickSize}} yAxisTickPadding={${yAxisTickPadding}}
        animate={${animate ? 'true' : 'false'}}
        motionStiffness={${motionStiffness}} motionDamping={${motionDamping}}
    />
), document.getElementById('chart'));`
}

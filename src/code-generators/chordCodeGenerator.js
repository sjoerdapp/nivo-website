export const generateChordCode = ({
    padAngle,
    colors,
    innerRadiusRatio,
    innerRadiusOffset,
    ribbonOpacity,
    ribbonBorderWidth,
    arcOpacity,
    arcBorderWidth,
}) => {
    return `import { render } from 'react-dom'
import { Chord }  from 'nivo'

const data = […]

render((
    <Chord
        width={600} height={600}
        data={data}
        padAngle={${padAngle}}
        innerRadiusRatio={${innerRadiusRatio}}
        innerRadiusOffset={${innerRadiusOffset}}
        ribbonOpacity={${ribbonOpacity}}
        ribbonBorderWidth={${ribbonBorderWidth}}
        arcOpacity={${arcOpacity}}
        arcBorderWidth={${arcBorderWidth}}
        colors="${colors}"
    />
), document.getElementById('chart'))`
}

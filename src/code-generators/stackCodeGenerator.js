const generateStackCode = (
    { colors, offset, controlsSpacing },
    { showOnOver, radius, color, dotBorderWidth, dotBorderColor, lineWidth, lineColor }
) => {
    return `import { render } from 'react-dom';
import { Stack, StackDots }  from 'nivo';

const layers = […];

render((
    <Stack
        layers={layers}
        width={360} height={240}
        offset="${offset}" colors="${colors}"
        controlsSpacing={${controlsSpacing}}
    >
        <StackSlicer
            showOnOver={${showOnOver ? 'true' : 'false'}}
            radius={${radius}} color="${color}"
            dotBorderWidth={${dotBorderWidth}} dotBorderColor="${dotBorderColor}"
            lineWidth={${lineWidth}} lineColor="${lineColor}"
        />
    </Stack>
), document.getElementById('chart'));`;
};


export default generateStackCode;

export const generateBarsD3Code = ({
    groupMode, colors,
    transitionDuration, transitionEasing, transitionStaggering
}) => {
    return `import { render } from 'react-dom';
import { BarsD3 } from 'nivo';

const data = […];

render((
    <BarsD3
        width={800} height={300}
        data={data}
        groupMode="${groupMode}" colors="${colors}"
        transitionDuration={${transitionDuration}} transitionEasing="${transitionEasing}"
        transitionStaggering={${transitionStaggering}}
    >
    </BarsD3>
), document.getElementById('chart'));`;
};

const generateStackCode = ({ colors, offset }) => {
    return `import { render } from 'react-dom';
import { Stack }  from 'nivo';

const layers = […];

render(
    <Stack
        layers={layers}
        width={360} height={240}
        offset="${offset}" colors="${colors}"
    />,
    document.getElementById('chart')   
)`;
};


export default generateStackCode;

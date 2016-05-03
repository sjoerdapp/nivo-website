export const generateTreeMapD3Code = ({ mode, orientLabels, padding, skipVMin }) => {
    return `import { render }    from 'react-dom';
import { TreeMapD3 } from 'nivo';

const root = {…};

render(
    <TreeMapD3
        width={360} height={240}
        root={root}
        valueProperty="loc"
        mode="${mode}" orientLabels={${orientLabels ? 'true' : 'false'}}
        padding={${padding}} skipVMin={${skipVMin}}
    />,
    document.getElementById('chart')
);`;
};


export const generateTreeMapPlaceholdersCode = ({ mode, padding }) => {
    return `import { render }              from 'react-dom';
import { TreeMapPlaceholders } from 'nivo';

const root = {…};

render(
    <TreeMapPlaceholders
        root={root}
        valueProperty="loc"
        mode="${mode}" padding={${padding}}
    >
        {nodes => nodes.map(node => (
            <div
                style={{
                    position:     'absolute',
                    top:          node.style.y,
                    left:         node.style.x,
                    width:        node.style.width,
                    height:       node.style.height,
                    background:   'rgba(0, 0, 0, .2)',
                    borderRadius: '3px'
                }}
            />
        ))}
    </TreeMapPlaceholders>,
    document.getElementById('chart')
);`;
};
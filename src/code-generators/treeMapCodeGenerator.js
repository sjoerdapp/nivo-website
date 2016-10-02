export const generateTreeMapD3Code = ({ tile, orientLabels, innerPadding, outerPadding, skipVMin }) => {
    return `import { render }    from 'react-dom';
import { TreeMapD3 } from 'nivo';

const root = {…};

render(
    <TreeMapD3
        width={360} height={240}
        root={root}
        valueProperty="loc"
        tile="${tile}"
        orientLabels={${orientLabels ? 'true' : 'false'}}
        innerPadding={${innerPadding}}
        outerPadding={${outerPadding}}
        skipVMin={${skipVMin}}
    />,
    document.getElementById('chart')
);`;
};


export const generateTreeMapPlaceholdersCode = ({ tile, innerPadding, outerPadding }) => {
    return `import { render }              from 'react-dom';
import { TreeMapPlaceholders } from 'nivo';

const root = {…};

render(
    <TreeMapPlaceholders
        root={root}
        valueProperty="loc"
        tile="${tile}"
        innerPadding={${innerPadding}}
        outerPadding={${outerPadding}}
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
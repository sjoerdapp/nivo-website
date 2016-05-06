export const generateBubbleCode = ({ padding, colors, skipRadius, textColor }) => {
    return `import { render } from 'react-dom';
import { Bubble } from 'nivo';

render((
    <Bubble
        width={400} height={400}
        root={root}
        value="loc" label="name"
        padding={${padding}} skipRadius={${skipRadius}}
        colors="${colors}" textColor="${textColor}"
    />
), document.getElementById('chart'));`;
};


export const generateBubbleD3Code = ({ padding, colors, skipRadius, textColor }) => {
    return `import { render }   from 'react-dom';
import { BubbleD3 } from 'nivo';

render((
    <BubbleD3
        width={400} height={400}
        root={root}
        value="loc" label="name"
        padding={${padding}} skipRadius={${skipRadius}}
        colors="${colors}" textColor="${textColor}"
    />
), document.getElementById('chart'));`;
};


export const generateBubblePlaceholdersCode = ({ padding, colors }) => {
    return `import { render }             from 'react-dom';
import { BubblePlaceholders } from 'nivo';

render((
    <BubblePlaceholders
        width={400} height={400}
        namespace="html"
        root={root} value="loc"
        padding={${padding}}
        colors="${colors}"
    >
        {nodes => nodes.map(node => (
            <div
                key={node.key}
                style={{
                    position:        'absolute',
                    top:             node.style.y - node.style.r,
                    left:            node.style.x - node.style.r,
                    width:           node.style.r * 2,
                    height:          node.style.r * 2,
                    borderRadius:    node.style.r,
                    border:          \`2px solid \${node.style.color}\`,
                    backgroundSize:  'contain',
                    backgroundImage: 'url(http://placekitten.com/240/240)'
                }}
            />
        ))}
    </BubblePlaceholders>
), document.getElementById('chart'));`;
};
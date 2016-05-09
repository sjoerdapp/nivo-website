export const generateBubbleCode = ({ padding, colors, borderWidth, borderColor, labelSkipRadius, labelTextColor }) => {
    return `import { render } from 'react-dom';
import { Bubble } from 'nivo';

render((
    <Bubble
        width={400} height={400}
        data={data} value="loc"
        padding={${padding}} colors="${colors}"
        borderWidth={${borderWidth}} borderColor="${borderColor}"
        label="name" labelSkipRadius={${labelSkipRadius}} labelTextColor="${labelTextColor}"
    />
), document.getElementById('chart'));`;
};


export const generateBubbleD3Code = ({ padding, colors, borderWidth, borderColor, labelSkipRadius, labelTextColor }) => {
    return `import { render }   from 'react-dom';
import { BubbleD3 } from 'nivo';

render((
    <BubbleD3
        width={400} height={400}
        data={data} value="loc"
        padding={${padding}} colors="${colors}"
        borderWidth={${borderWidth}} borderColor="${borderColor}"
        label="name" labelSkipRadius={${labelSkipRadius}} labelTextColor="${labelTextColor}"
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
        data={data} value="loc"
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
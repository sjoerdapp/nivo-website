export const generateBubbleCode = ({ padding, colors, legends, skipRadius, textColor }) => {
    return `<Bubble
    root={root}
    valueProperty="loc"
    padding={${padding}}
    colors="${colors}"
>
    <BubbleLegends
        skipRadius={${skipRadius}}
        textColor="${textColor}"
    />
</Bubble>`;
};


export const generateBubblePlaceholdersCode = ({ padding }) => {
    return `<BubblePlaceholders
    root={root}
    valueProperty="loc"
    padding={${padding}}
>
    {nodes => nodes.map(node => (
        <div
            style={{
                position:        'absolute',
                top:             node.style.y,
                left:            node.style.x,
                width:           node.style.r * 2,
                height:          node.style.r * 2,
                marginTop:       -node.style.r,
                marginLeft:      -node.style.r,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius:    node.style.r,
                display:         'flex',
                justifyContent:  'center',
                alignItems:      'center'
            }}
        >
            {node.key}
        </div>
    ))}
</BubblePlaceholders>`;
};
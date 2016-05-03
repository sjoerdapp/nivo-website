const generateTreeCode = ({
    direction,
    rootLabelPosition,
    intermediateLabelPosition,
    leafLabelPosition,
    colors
}) => {
    return `<Tree
    root={root}
    direction="${direction}"
    nodeRadius={nodeRadius}
    labelOffset={labelOffset}
    rootLabelPosition="${rootLabelPosition}"
    intermediateLabelPosition="${intermediateLabelPosition}"
    leafLabelPosition="${leafLabelPosition}"
    rootLabelRotation={rootLabelRotation}
    intermediateLabelRotation={intermediateLabelRotation}
    leafLabelRotation={leafLabelRotation}
    colors="${colors}"
/>`;
};


export default generateTreeCode;

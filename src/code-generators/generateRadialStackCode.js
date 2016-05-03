const generateRadialStackCode = ({
    colors, offset, innerRadius, angleAxis,
    labelPosition, labelRotation, labelOffset
}) => {
    return `<RadialStack
    layers={layers}
    offset="${offset}"
    innerRadius={${innerRadius}}
    colors="${colors}"
>
    <RadialStackAngleAxis
        labelPosition="${labelPosition}"
        labelRotation={${labelRotation}}
        labelOffset={${labelOffset}}
    />
</RadialStack>`;
};


export default generateRadialStackCode;

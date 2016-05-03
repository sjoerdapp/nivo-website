const generatePieCode = ({ colors, innerRadius, padAngle, cornerRadius }) => {
    return `<Pie
    data={data}
    colors="${colors}"
    innerRadius={${innerRadius}}
    padAngle={${padAngle}}
    cornerRadius={${cornerRadius}}
>
</Pie>`;
};


export default generatePieCode;

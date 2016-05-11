const generateCalendarCode = ({
    direction,
    yearSpacing, yearLegendOffset,
    daySpacing, dayBorderWidth, dayBorderColor,
    monthBorderWidth, monthBorderColor, monthLegendOffset,
    transitionDuration, transitionEasing, transitionStaggering
}) => {
    return `import { render }   from 'react-dom';
import { Calendar } from 'nivo';

render((
    <Calendar
        width={600} height={240}
        direction="${direction}"
        yearSpacing={${yearSpacing}} yearLegendOffset={${yearLegendOffset}}
        daySpacing={${daySpacing}} dayBorderWidth={${dayBorderWidth}} dayBorderColor="${dayBorderColor}"
        monthBorderWidth={${monthBorderWidth}} monthBorderColor="${monthBorderColor}" monthLegendOffset={${monthLegendOffset}}
        transitionDuration={${transitionDuration}} transitionEasing="${transitionEasing}" transitionStaggering={${transitionStaggering}}
    />
), document.getElementById('chart'));`;
};


export default generateCalendarCode;

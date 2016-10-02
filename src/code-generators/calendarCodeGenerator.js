export const generateCalendarD3Code = ({
    direction,
    yearSpacing, yearLegendOffset,
    daySpacing, dayBorderWidth, dayBorderColor,
    monthBorderWidth, monthBorderColor, monthLegendOffset,
    transitionDuration, transitionEasing, transitionStaggering
}) => {
    return `import { render }   from 'react-dom';
import { CalendarD3 } from 'nivo';

const data = […];

render((
    <CalendarD3
        width={600} height={240}
        data={data} direction="${direction}"
        yearSpacing={${yearSpacing}} yearLegendOffset={${yearLegendOffset}}
        daySpacing={${daySpacing}} dayBorderWidth={${dayBorderWidth}} dayBorderColor="${dayBorderColor}"
        monthBorderWidth={${monthBorderWidth}} monthBorderColor="${monthBorderColor}" monthLegendOffset={${monthLegendOffset}}
        transitionDuration={${transitionDuration}} transitionEasing="${transitionEasing}" transitionStaggering={${transitionStaggering}}
    />
), document.getElementById('chart'));`;
};


export const generateCalendarCode = ({
    direction,
    yearSpacing, yearLegendOffset,
    daySpacing, dayBorderWidth, dayBorderColor,
    monthBorderWidth, monthBorderColor, monthLegendOffset,
    motion, motionStiffness, motionDamping
}) => {
    return `import { render }   from 'react-dom';
import { Calendar } from 'nivo';

const data = […];

render((
    <Calendar
        width={600} height={240}
        data={data} direction="${direction}"
        yearSpacing={${yearSpacing}} yearLegendOffset={${yearLegendOffset}}
        daySpacing={${daySpacing}} dayBorderWidth={${dayBorderWidth}} dayBorderColor="${dayBorderColor}"
        monthBorderWidth={${monthBorderWidth}} monthBorderColor="${monthBorderColor}" monthLegendOffset={${monthLegendOffset}}
        motion={${motion ? 'true' : 'false'}} motionStiffness={${motionStiffness}} motionDamping={${motionDamping}}
    />
), document.getElementById('chart'));`;
};

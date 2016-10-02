import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import d3                              from 'd3';
import {
    ResponsiveBubbleD3,
    ResponsiveStack,
    StackSlicer,
    ResponsiveCalendarD3,
    ResponsiveTreeMapD3,
    ResponsiveBarsD3
} from 'nivo';


const from = new Date(2016, 0, 1);
const to   = new Date(2016, 11, 31);

const constrainedActivities = [
    'working', 'commuting',
];

const niceActivities = [
    'sport', 'cooking', 'shopping', 'procrastinating', 'drawing', 'photography', 'writing', 'chatting'
];

const generateDayActivity = () => {
    let activities = ['sleeping'];

    const hasConstrainedActivities = Math.random() < .5;
    if (hasConstrainedActivities) {
        activities = activities.concat(constrainedActivities);
    }

    activities = activities.concat(_.shuffle(niceActivities).slice(0, 1 + Math.round(Math.random() * (niceActivities.length - 1))));

    let randomTable = _.range(0, activities.length).map(i => Math.random());
    let randomSum   = _.sum(randomTable);
    randomTable = randomTable.map(r => Math.floor(r / randomSum * 10) / 10);
    randomSum = _.sum(randomTable);
    randomTable[0] += 1 - randomSum;

    return activities.map((activity, i) => {
        return {
            type:  activity,
            hours: randomTable[i] * 24
        }
    });
};

const dayFormat = d3.time.format('%Y-%m-%d');

const rawData = d3.time.days(from, to).map(dayDate => ({
    date:       dayDate,
    day:        dayFormat(dayDate),
    activities: generateDayActivity(),
}));

const computeBubbleChildren = () => {
    const children = [];

    rawData.forEach(datum => {
        datum.activities.forEach(activity => {
            let item = _.find(children, { name: activity.type });
            if (!item) {
                item = {
                    name:  activity.type,
                    value: 0
                };
                children.push(item);
            }

            item.value += activity.hours;
        });
    });

    return children;
};


class ConnectedCharts extends Component {
    constructor(props) {
        super(props);

        this.handleDayClick       = this.handleDayClick.bind(this);
        this.handleDayFilterClear = this.handleDayFilterClear.bind(this);
        this.handleActivityClick  = this.handleActivityClick.bind(this);
        this.handleBarsModeToggle = this.handleBarsModeToggle.bind(this);

        this.state = {
            dayFilter:      null,
            barsMode:       'grouped',
            activityFilter: 'sleeping',
        };
    }

    handleDayClick(day) {
        this.setState({ dayFilter: day.day });
    }

    handleDayFilterClear() {
        this.setState({ dayFilter: null });
    }

    handleActivityClick(activity) {
        this.setState({ activityFilter: activity.name });
    }

    handleBarsModeToggle() {
        const { barsMode } = this.state;
        this.setState({ barsMode: barsMode === 'stacked' ? 'grouped' : 'stacked' })
    }

    render() {
        const { dayFilter, activityFilter, barsMode } = this.state;

        const calendarData = rawData.map(day => {
            const activity = _.find(day.activities, { type: activityFilter });

            return {
                day:   day.day,
                value: activity ? activity.hours : 0,
            }
        });

        let bubbleData;
        let bubbleLegend;
        if (dayFilter === null) {
            bubbleData = { children: computeBubbleChildren() };
            bubbleLegend = <span>year</span>;
        } else {
            const dayData = _.find(rawData, { day: dayFilter });

            bubbleData = {
                children: dayData.activities.map(({type, hours}) => ({
                    name: type,
                    value: hours
                }))
            };
            bubbleLegend = <span onClick={this.handleDayFilterClear}>x {dayFilter}</span>;
        }

        const stackData = [].concat(constrainedActivities, niceActivities).map(activity => {
            const activitySerie = [];

            let currentMonth = 0;
            let currentMonthValue = 0;

            rawData.forEach((day, i) => {
                if (day.date.getMonth() !== currentMonth) {
                    activitySerie.push({
                        type: activity,
                        x:    currentMonth,
                        y:    currentMonthValue
                    });

                    currentMonth      = day.date.getMonth();
                    currentMonthValue = 0;
                }

                const activityData = _.find(day.activities, { type: activity });
                currentMonthValue += activityData ? activityData.hours : 0;
            });

            activitySerie.push({ x: currentMonth, y: currentMonthValue });

            return activitySerie;
        });

        const barsData = stackData[0].map((datum, i) => {
            return  {
                id:     datum.x,
                x:      datum.x,
                values: stackData.reduce((stack, activity) => {
                    stack.push({
                        id: activity[i].type,
                        y:  activity[i].y
                    });

                    return stack;
                }, [])
            };
        });

        console.log(barsData);

        const colors             = 'd320b';
        const transitionDuration = 1200;
        const transitionEasing   = 'elastic';

        return (
            <div>
                <div className="chart_header">
                    <div className="grid_item grid_item-full">
                        <h1 className="page_header">ConnectedCharts</h1>
                    </div>
                </div>
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-2_3">
                            <div>
                                activity: {activityFilter}
                            </div>
                            <div style={{ height: '200px' }}>
                                <ResponsiveCalendarD3
                                    margin={{ top: 30, right: 30, bottom: 2, left: 30 }}
                                    from={from} to={to}
                                    data={calendarData}
                                    onDayClick={this.handleDayClick}
                                    dayBorderColor="#fff" monthBorderColor="#fff"
                                    colorScale={{
                                        type:   'linear',
                                        domain: [0, 12],
                                        range:  ['#fff', '#F47560']
                                    }}
                                    transitionDuration={transitionDuration} transitionEasing={transitionEasing}
                                    transitionStaggering={2}
                                />
                            </div>
                            <div style={{ height: '200px' }}>
                                <div>
                                    <span onClick={this.handleBarsModeToggle}>mode: {barsMode}</span>
                                </div>
                                <ResponsiveBarsD3
                                    margin={{ top: 30, right: 30, bottom: 2, left: 30 }}
                                    data={barsData}
                                    groupMode={barsMode}
                                    transitionDuration={transitionDuration} transitionEasing={transitionEasing}
                                />
                            </div>
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <div>
                                {bubbleLegend}
                            </div>
                            <div style={{ height: '280px' }}>
                                <ResponsiveBubbleD3
                                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                    data={bubbleData} colors={colors}
                                    labelTextColor="inherit:darker(2)"
                                    onBubbleClick={this.handleActivityClick}
                                    transitionDuration={transitionDuration} transitionEasing={transitionEasing}
                                />
                            </div>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <div>
                                by month
                            </div>
                            <div style={{ width: '100%', height: '280px' }}>
                                <ResponsiveStack
                                    margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
                                    data={stackData} colors={colors} offset="wiggle"
                                    transitionDuration={transitionDuration} transitionEasing={transitionEasing}
                                >
                                    <StackSlicer
                                        radius={4}
                                        color="inherit:brighter(.6)"
                                    />
                                </ResponsiveStack>
                            </div>
                        </div>
                        <div className="grid_item grid_item-1_3">
                            <div>
                                {bubbleLegend}
                            </div>
                            <div style={{ width: '100%', height: '280px' }}>
                                <ResponsiveTreeMapD3
                                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    root={bubbleData} colors={colors}
                                    valueAccessor={d => d.value}
                                    onBubbleClick={this.handleActivityClick}
                                    transitionDuration={transitionDuration} transitionEasing={transitionEasing}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ConnectedCharts;

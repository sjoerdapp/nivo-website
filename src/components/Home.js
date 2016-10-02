/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

import React, { Component } from 'react'
import { Link }             from 'react-router'
import MediaQuery           from 'react-responsive'
import { redColorRange }    from '../colors'
import {
    generateStackData,
    generateProgrammingLanguageStats,
    generateCitiesPopulation,
    generateDayCounts,
    generateLibTree,
    generateDrinkStats,
} from 'nivo-generators'
import {
    ResponsiveBubble,
    ResponsiveTreeMap,
    ResponsiveBars,
    ResponsiveLine,
    ResponsiveChord,
} from 'nivo'


const colors             = redColorRange
const transitionDuration = 0

const calendarFrom = new Date(2015, 3, 1)
const calendarTo   = new Date(2016, 10, 1)
const calendarData = generateDayCounts(calendarFrom, calendarTo)

class Home extends Component {
    render() {
        return (
            <div className="home">
                <MediaQuery query="(min-width: 1200px)" className="home_item">
                    <Link to="/chord">
                        <ResponsiveChord
                            colors={colors}
                            padAngle={0.04}
                            innerRadiusRatio={0.94}
                            data={[
                                [ 11975,  5871, 8916, 2868, 1967, 2987, 4300 ],
                                [  1951, 10048, 2060, 6171, 1967, 2987, 4300 ],
                                [  8010, 16145, 8090, 8045, 1967, 2987, 4300 ],
                                [  1013,   990,  940, 6907, 2306, 1200, 900  ],
                                [  1013,   990,  940, 6907,  800, 3400, 1200 ],
                                [  1013,   990,  940, 6907, 1967, 2987, 4300 ],
                                [  1013,   990,  940, 6907, 3000, 3456, 876  ],
                            ]}
                        />
                        <span className="home_item_label">
                            <span>Chord documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <Link className="home_item" to="/">
                    {/*
                    <ResponsivePie
                        margin={{ top: 40, right: 120, bottom: 40, left: 120 }}
                        data={generateProgrammingLanguageStats(false, 7).map(({ label, value }) => ({
                            id: label, label, value
                        }))}
                        transitionDuration={transitionDuration}
                        innerRadius={0.6} colors={colors}
                    >
                        <PieColumnLegends
                            horizontalOffset={30} radiusOffset={20}
                            lineColor="inherit" textColor="inherit"
                        />
                    </ResponsivePie>
                    <span className="home_item_label">
                        <span>Pie documentation</span>
                    </span>
                    */}
                </Link>
                <Link className="home_item" to="/">
                    {/*
                    <ResponsiveStack
                        margin={{ top: 4, right: 4, bottom: 4, left: 4 }}
                        data={generateStackData()}
                        colors={colors}
                        offset="wiggle"
                        transitionDuration={transitionDuration}
                    >
                        <StackSlicer
                            radius={4} borderWidth={1}
                            color="inherit" dotBorderColor="#e25d47"
                            lineWidth={0} lineColor="#e25d47"
                        />
                    </ResponsiveStack>
                    <span className="home_item_label">
                        <span>Stack documentation</span>
                    </span>
                    */}
                </Link>
                <MediaQuery query="(min-width: 1000px)" className="home_item">
                    <Link className="home_item" to="/bars">
                        <ResponsiveBars
                            margin={{ top: 10, bottom: 15, left: 24, right: 0 }}
                            data={generateDrinkStats(8)}
                            keys={['beer', 'whisky', 'rhum', 'gin', 'vodka', 'cognac']}
                            identity="country"
                            spacing={.2}
                            colors={colors}
                            groupMode="grouped"
                            xAxisTickSize={4}
                            xAxisTickPadding={2}
                            yAxisTickSize={4}
                            YAxisTickPadding={2}
                            animate={false}
                        />
                        <span className="home_item_label">
                            <span>Bars documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <MediaQuery query="(min-width: 1200px)" className="home_item">
                    <Link className="home_item" to="/">
                        {/*
                        <Tree
                            margin={{ top: 3, right: 6, bottom: 30, left: 6 }}
                            root={generateLibTree()} identity={d => d.name}
                            labelPaddingX={4} labelPaddingY={1}
                            direction="vertical-reverse"
                            colors={[colors[0]]} nodeRadius={2}
                            transitionDuration={transitionDuration}
                        />
                        <span className="home_item_label">
                            <span>Tree documentation</span>
                        </span>
                         */}
                    </Link>
                </MediaQuery>
                <div className="home_item">
                    <span className="logo" />
                </div>
                <div className="home_item home_item-baseline">
                    <p>nivo provides a rich set of dataviz components,<br />built on top of the awesome d3 and Reactjs libraries.</p>
                </div>
                <Link className="home_item" to="/line">
                    <ResponsiveLine
                        margin={{ top: 10, bottom: 15, left: 24, right: 0 }}
                        keys={['beer', 'whisky', 'rhum', 'gin', 'vodka', 'cognac']}
                        data={generateDrinkStats(12)}
                        identity="country"
                        colors={colors}
                        xAxisTickSize={4}
                        xAxisTickPadding={2}
                        yAxisTickSize={4}
                        YAxisTickPadding={2}
                        animate={false}
                        curve="monotoneX"
                    />
                    <span className="home_item_label">
                        <span>Line documentation</span>
                    </span>
                </Link>
                <MediaQuery query="(min-width: 1200px)" className="home_item">
                    <Link className="home_item" to="/">
                        {/*
                        <ResponsivePie
                            margin={{ top: 40, right: 120, bottom: 40, left: 120 }}
                            data={generateProgrammingLanguageStats(false, 7).map(({ label, value }) => ({
                                id: label, label, value
                            }))}
                            innerRadius={0}
                            colors={colors}
                            transitionDuration={transitionDuration}
                        >
                            <PieColumnLegends
                                horizontalOffset={30} radiusOffset={20}
                                lineColor="inherit" textColor="inherit"
                            />
                        </ResponsivePie>
                        <span className="home_item_label">
                            <span>Pie documentation</span>
                        </span>
                         */}
                    </Link>
                </MediaQuery>
                <Link className="home_item" to="/">
                    {/*
                    <RadialStack
                        innerRadius={0.4}
                        layers={generateStackData()}
                        colors={colors}
                        transitionDuration={transitionDuration}
                        offset="wiggle"
                    >
                        <RadialStackAngleAxis />
                    </RadialStack>
                    <span className="home_item_label">
                        <span>RadialStack documentation</span>
                    </span>
                    */}
                </Link>
                <Link className="home_item" to="/">
                    {/*
                    <ResponsiveStack
                        margin={{ top: 4, right: 4, bottom: 4, left: 4 }}
                        data={generateStackData()}
                        transitionDuration={transitionDuration}
                        colors={colors}
                        transitionDuration={transitionDuration}
                    >
                        <StackSlicer
                            radius={4} borderWidth={1}
                            color="inherit" dotBorderColor="#e25d47"
                            lineWidth={0} lineColor="#e25d47"
                        />
                    </ResponsiveStack>
                    <span className="home_item_label">
                        <span>Stack documentation</span>
                    </span>
                    */}
                </Link>
                <Link className="home_item" to="/">
                    {/*
                    <ResponsiveCalendarD3
                        margin={{ top: 20, right: 2, bottom: 2, left: 20 }}
                        from={calendarFrom} to={calendarTo}
                        data={calendarData}
                        dayBorderWidth={1}
                        yearLegendSpacing={6}
                        emptyColor="#e25d47" dayBorderColor="#C6432D" monthBorderColor="#C6432D"
                        colorScale={{
                            type:   'linear',
                            domain: [0, 400],
                            range:  ['#FF8D72', '#C6432D']
                        }}
                        transitionDuration={transitionDuration} transitionStaggering={0}
                    />
                    <span className="home_item_label">
                        <span>Calendar documentation</span>
                    </span>
                    */}
                </Link>
                <MediaQuery query="(min-width: 1200px)" className="home_item">
                    <Link className="home_item" to="/treemap">
                        <ResponsiveTreeMap
                            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                            root={generateLibTree()}
                            identity="name"
                            value="loc"
                            colors={colors}
                            leavesOnly={true}
                            innerPadding={1}
                            animate={false}
                            label="loc"
                            labelFormat=".0s"
                            enableLabels={true}
                            labelTextColor={() => '#e25d47'}
                        />
                        <span className="home_item_label">
                            <span>TreeMap documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <MediaQuery query="(min-width: 1000px)" className="home_item">
                    <Link className="home_item" to="/bubble">
                        <ResponsiveBubble
                            root={generateLibTree()}
                            identity="name"
                            enableLabel={false}
                            value="loc"
                            animate={false}
                            colors={colors}
                        />
                        <span className="home_item_label">
                            <span>Bubble documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <MediaQuery query="(min-width: 1000px)" className="home_item">
                    <Link className="home_item" to="/line">
                        <ResponsiveLine
                            margin={{ top: 10, bottom: 15, left: 24, right: 0 }}
                            keys={['beer', 'whisky', 'rhum', 'gin', 'vodka', 'cognac']}
                            data={generateDrinkStats(8)}
                            identity="country"
                            colors={colors}
                            cumulative={false}
                            xAxisTickSize={4}
                            xAxisTickPadding={2}
                            yAxisTickSize={4}
                            YAxisTickPadding={2}
                            animate={false}
                        />
                        <span className="home_item_label">
                            <span>Line documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <MediaQuery query="(min-width: 1000px)" className="home_item">
                    <Link to="/chord">
                        <ResponsiveChord
                            colors={colors}
                            padAngle={0.04}
                            innerRadiusRatio={0.94}
                            data={[
                                [ 11975,  5871, 8916, 2868, 1967 ],
                                [  1951, 10048, 2060, 6171, 1967 ],
                                [  8010, 16145, 8090, 8045, 1967 ],
                                [  1013,   990,  940, 6907, 2306 ],
                                [  1013,   990,  940, 6907,  800 ],
                            ]}
                        />
                        <span className="home_item_label">
                            <span>Chord documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
            </div>
        )
    }
}


export default Home

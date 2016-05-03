import React, { Component } from 'react';
import { Link }             from 'react-router';
import MediaQuery           from 'react-responsive';
import { redColorRange }    from '../colors';
import {
    generateStackData,
    generateProgrammingLanguageStats,
    generateCitiesPopulation,
    generateLibTree
} from '../generators';
import {
    Chart,
    Pie,
    PieColumnLegends,
    ResponsiveTreeMapD3 as TreeMap,
    Tree,
    Bubble,
    ResponsiveStack as Stack,
    ResponsiveRadialStack as RadialStack,
    RadialStackAngleAxis,
    XYScales,
    AreaShape,
    LineShape,
    AxisX,
    AxisY
} from 'nivo';


const colors             = redColorRange;
const transitionDuration = 0;


class Home extends Component {
    render() {
        return (
            <div className="home">
                <MediaQuery query="(min-width: 1200px)" className="home_item">
                    <Link to="/radial-stack">
                        <RadialStack
                            innerRadius={0.6}
                            layers={generateStackData()}
                            colors={colors}
                            transitionDuration={transitionDuration}
                        />
                        <span className="home_item_label">
                            <span>RadialStack documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <Link className="home_item" to="/pie">
                    <Chart margin={{ top: 40, right: 120, bottom: 40, left: 120 }}>
                        <Pie
                            data={generateProgrammingLanguageStats(false, 7)}
                            transitionDuration={transitionDuration}
                            innerRadius={0.6} colors={colors}
                        >
                            <PieColumnLegends
                                horizontalOffset={30} radiusOffset={20}
                                lineColor="inherit" textColor="inherit"
                            />
                        </Pie>
                    </Chart>
                    <span className="home_item_label">
                        <span>Pie documentation</span>
                    </span>
                </Link>
                <Link className="home_item" to="/stack">
                    <Stack
                        layers={generateStackData()}
                        colors={colors}
                        offset="wiggle"
                        transitionDuration={transitionDuration}
                    />
                    <span className="home_item_label">
                        <span>Stack documentation</span>
                    </span>
                </Link>
                <MediaQuery query="(min-width: 1000px)" className="home_item">
                    <Link className="home_item" to="/line-chart">
                        <Chart margin={{ top: 30, bottom: 30, left: 50 }}>
                            <XYScales data={generateCitiesPopulation(50)} valueAccessor={d => d.population}>
                                <LineShape interpolation="monotone" yAccessor={d => d.population} interpolation="linear" />
                                <AxisX />
                                <AxisY tickCount={6} tickMode="grid" tickPadding={8} />
                            </XYScales>
                        </Chart>
                        <span className="home_item_label">
                            <span>LineChart documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <MediaQuery query="(min-width: 1200px)" className="home_item">
                    <Link className="home_item" to="/tree">
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
                    </Link>
                </MediaQuery>
                <div className="home_item">
                    <span className="logo" />
                </div>
                <div className="home_item home_item-baseline">
                    <p>nivo provides a rich set of dataviz components,<br />built on top of the awesome d3 and Reactjs libraries.</p>
                </div>
                <Link className="home_item" to="/stack">
                    <Stack
                        layers={generateStackData()}
                        colors={colors}
                        offset="expand"
                    />
                    <span className="home_item_label">
                        <span>Stack documentation</span>
                    </span>
                </Link>
                <MediaQuery query="(min-width: 1200px)" className="home_item">
                    <Link className="home_item" to="/pie">
                        <Chart margin={{ top: 40, right: 120, bottom: 40, left: 120 }}>
                            <Pie
                                data={generateProgrammingLanguageStats(false, 7)}
                                innerRadius={0}
                                colors={colors}
                                transitionDuration={transitionDuration}
                            >
                                <PieColumnLegends
                                    horizontalOffset={30} radiusOffset={20}
                                    lineColor="inherit" textColor="inherit"
                                />
                            </Pie>
                        </Chart>
                        <span className="home_item_label">
                            <span>Pie documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <Link className="home_item" to="/radial-stack">
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
                </Link>
                <Link className="home_item" to="/stack">
                    <Stack
                        layers={generateStackData()}
                        transitionDuration={transitionDuration}
                        colors={colors}
                    />
                    <span className="home_item_label">
                        <span>Stack documentation</span>
                    </span>
                </Link>
                <Link className="home_item" to="/pie">
                    <Chart margin={{ top: 40, right: 120, bottom: 40, left: 120 }}>
                        <Pie
                            data={generateProgrammingLanguageStats(false, 7)}
                            innerRadius={0.4}
                            transitionDuration={transitionDuration}
                            colors={colors}
                        >
                            <PieColumnLegends
                                horizontalOffset={30} radiusOffset={20}
                                lineColor="inherit" textColor="inherit"
                            />
                        </Pie>
                    </Chart>
                    <span className="home_item_label">
                        <span>Pie documentation</span>
                    </span>
                </Link>
                <MediaQuery query="(min-width: 1200px)" className="home_item">
                    <Link className="home_item" to="/treemap">
                        <TreeMap
                            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                            root={generateLibTree()}
                            valueAccessor={d => d.loc}
                            colors={colors}
                        />
                        <span className="home_item_label">
                            <span>TreeMap documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <MediaQuery query="(min-width: 1000px)" className="home_item">
                    <Link className="home_item" to="/pie">
                        <Chart margin={{ top: 40, right: 120, bottom: 40, left: 120 }}>
                            <Pie
                                data={generateProgrammingLanguageStats(false, 7)}
                                innerRadius={0.9}
                                colors={colors}
                                transitionDuration={transitionDuration}
                            >
                                <PieColumnLegends
                                    horizontalOffset={30} radiusOffset={20}
                                    lineColor="inherit" textColor="inherit"
                                />
                            </Pie>
                        </Chart>
                        <span className="home_item_label">
                            <span>Pie documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <MediaQuery query="(min-width: 1000px)" className="home_item">
                    <Link className="home_item" to="/bubble">
                        <Bubble
                            root={generateLibTree()}
                            valueProperty="loc"
                            transitionDuration={transitionDuration}
                            colors={colors}
                        />
                        <span className="home_item_label">
                            <span>Bubble documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
                <MediaQuery query="(min-width: 1000px)" className="home_item">
                    <Link className="home_item" to="/radial-stack">
                        <RadialStack
                            innerRadius={0.4}
                            layers={generateStackData()}
                            transitionDuration={transitionDuration}
                            colors={colors}
                            offset="wiggle"
                        />
                        <span className="home_item_label">
                            <span>RadialStack documentation</span>
                        </span>
                    </Link>
                </MediaQuery>
            </div>
        );
    }
}


export default Home;

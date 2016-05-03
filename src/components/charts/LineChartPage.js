import React, { Component, PropTypes } from 'react';
import { generateCitiesPopulation }    from '../../generators';
import ChartHeader                     from '../ChartHeader';
import JsonData                        from '../JsonData';
import {
    Chart,
    XYScales,
    AreaShape,
    LineShape,
    AxisX,
    AxisY
} from 'nivo';


class LineChartPage extends Component {
    constructor(props) {
        super(props);

        this.handleDiceRoll = this.handleDiceRoll.bind(this);

        this.state = { population: [] };
    }

    handleDiceRoll() {
        this.setState({
            population: generateCitiesPopulation(40)
        });
    }

    componentWillMount() {
        this.handleDiceRoll();
    }

    render() {
        const { population } = this.state;

        return (
            <div>
                <ChartHeader chartClass="LineChart" tags={['basics']} />
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item">
                            <div className="main-chart">
                                <Chart margin={{ bottom: 30, left: 50 }}>
                                    <XYScales data={population} valueAccessor={d => d.population}>
                                        <LineShape interpolation="monotone" yAccessor={d => d.population} />
                                        <AxisX />
                                        <AxisY tickCount={6} tickMode="grid" tickPadding={8} />
                                    </XYScales>
                                </Chart>
                            </div>
                            <div className="chart_code">
                                <pre>
    {`<Chart margin={{ bottom: 30, left: 50 }}>
        <XYScales data={population} valueAccessor={d => d.population}>
            <LineShape interpolation="monotone" yAccessor={d => d.population} />
            <AxisX />
            <AxisY tickCount={6} tickMode="grid" tickPadding={8} />
        </XYScales>
    </Chart>`}
                                </pre>
                            </div>
                            <JsonData dataKey="{population}" data={population} />
                        </div>
                        <div className="grid_item">
                            <p className="description">Back to the basics.</p>
                            <h2>'monotone' interpolation</h2>
                            <div className="chart">
                                <Chart margin={{ top: 10, bottom: 30, left: 50 }}>
                                    <XYScales data={population} valueAccessor={d => d.population}>
                                        <AreaShape interpolation="monotone" yAccessor={d => d.population} />
                                        <LineShape interpolation="monotone" yAccessor={d => d.population} />
                                        <AxisY tickCount={6} tickMode="grid" tickPadding={8} />
                                    </XYScales>
                                </Chart>
                            </div>
                            <div className="chart_code">
                                <pre>
    {`<Chart margin={{ top: 10, bottom: 30, left: 50 }}>
        <XYScales data={population} valueAccessor={d => d.population}>
            <AreaShape interpolation="monotone" yAccessor={d => d.population} />
            <LineShape interpolation="monotone" yAccessor={d => d.population} />
            <AxisY tickCount={6} tickMode="grid" tickPadding={8} />
        </XYScales>
    </Chart>`}
                                </pre>
                            </div>
                            <JsonData dataKey="{population}" data={population} />
                        </div>
                        <div className="grid_item">
                            <h2>'step-before' interpolation</h2>
                            <div className="chart">
                                <Chart margin={{ top: 10, right: 0, bottom: 10, left: 50 }}>
                                    <XYScales data={population} valueAccessor={d => d.population}>
                                        <LineShape interpolation="step-before" yAccessor={d => d.population} />
                                        <AxisY tickCount={6} tickMode="grid" tickPadding={8} />
                                    </XYScales>
                                </Chart>
                            </div>
                            <JsonData dataKey="{population}" data={population} />
                        </div>
                        <div className="grid_item">
                            <h2>'step-after' interpolation</h2>
                            <div className="chart">
                                <Chart margin={{ top: 10, right: 0, bottom: 10, left: 50 }}>
                                    <XYScales data={population} valueAccessor={d => d.population}>
                                        <LineShape interpolation="step-after" yAccessor={d => d.population} />
                                        <AxisY tickCount={6} tickMode="grid" tickPadding={8} />
                                    </XYScales>
                                </Chart>
                            </div>
                            <JsonData dataKey="{population}" data={population} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default LineChartPage;

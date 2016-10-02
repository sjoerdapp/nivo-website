import React, { Component, PropTypes } from 'react';
import _                               from 'lodash';
import { Link }                        from 'react-router';
import { Tree }                        from 'nivo';
import { generateLibTree }             from 'nivo-generators';
import ChartHeader                     from '../ChartHeader';
import ChartCodeAndData                from '../ChartCodeAndData';
import Properties                      from '../Properties';
import TreeControls                    from './TreeControls';
import generateTreeCode                from '../../code-generators/generateTreeCode';


class TreePage extends Component {
    constructor(props) {
        super(props);

        this.handleDiceRoll                        = this.handleDiceRoll.bind(this);
        this.handleSettingsUpdate                  = this.handleSettingsUpdate.bind(this);
        this.handleRadiusChange                    = this.handleRadiusChange.bind(this);
        this.handleLabelOffsetChange               = this.handleLabelOffsetChange.bind(this);
        this.handleRootLabelRotationChange         = this.handleRootLabelRotationChange.bind(this);
        this.handleIntermediateLabelRotationChange = this.handleIntermediateLabelRotationChange.bind(this);

        this.state = {
            libTree:                   {},
            nodeRadius:                4,
            labelOffset:               10,
            rootLabelRotation:         null,
            intermediateLabelRotation: null,
            leafLabelRotation:         null,
            settings:                  {
                direction:                 'vertical',
                colors:                    'nivo',
                rootLabelPosition:         null,
                intermediateLabelPosition: null,
                leafLabelPosition:         null
            }
        };
    }

    handleDiceRoll() {
        this.setState({
            libTree: generateLibTree()
        });
    }

    componentWillMount() {
        this.handleDiceRoll();
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    handleLabelOffsetChange(e) {
        this.setState({ labelOffset: e.target.value });
    }

    handleRadiusChange(e) {
        this.setState({ nodeRadius: e.target.value });
    }

    handleRootLabelRotationChange(e) {
        this.setState({ rootLabelRotation: e.target.value });
    }

    handleIntermediateLabelRotationChange(e) {
        this.setState({ intermediateLabelRotation: e.target.value });
    }


    render() {
        const { libTree, settings } = this.state;

        const transitionDuration = 0;

        const code = generateTreeCode(settings);

        /*
        <div className="grid_item grid_item-1_3">
                        <div className="chart" style={{ height: '280px' }}>
                            <Tree
                                margin={{ top: 10, right: 60, bottom: 10, left: 80 }}
                                root={libTree} identity={d => d.name}
                                direction="horizontal-reverse"
                                colors="nivo" nodeRadius={3}
                                transitionDuration={transitionDuration}
                                transitionEasing="linear"
                            />
                        </div>
                    </div>
                    <div className="grid_item grid_item-1_3">
                        <div className="chart" style={{ height: '280px' }}>
                            <Tree
                                margin={{ top: 80, right: 10, bottom: 30, left: 10 }}
                                root={libTree} identity={d => d.name}
                                direction="vertical-reverse"
                                colors="nivo" nodeRadius={3}
                                transitionDuration={transitionDuration}
                                transitionEasing="linear"
                            />
                        </div>
                    </div>
                    <div className="grid_item grid_item-1_3">
                        <div className="chart" style={{ height: '280px' }}>
                            <Tree
                                margin={{ top: 10, right: 80, bottom: 10, left: 60 }}
                                root={libTree} identity={d => d.name}
                                direction="horizontal"
                                colors="nivo" nodeRadius={3}
                                transitionDuration={transitionDuration}
                                transitionEasing="linear"
                            />
                        </div>
                    </div>
         */

        const {
            nodeRadius,
            labelOffset,
            rootLabelRotation,
            intermediateLabelRotation,
            leafLabelRotation
        } = this.state;

        //console.log(settings);

        return (
            <div className="bubble_page">
                <ChartHeader chartClass="Tree" tags={['dendrogram', 'hierarchy']} />
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_2">
                            <div className="main-chart">
                                <Tree
                                    margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
                                    root={libTree}
                                    nodeRadius={nodeRadius}
                                    transitionDuration={800}
                                    transitionEasing="linear"
                                    labelOffset={labelOffset}
                                    rootLabelRotation={rootLabelRotation}
                                    intermediateLabelRotation={intermediateLabelRotation}
                                    leafLabelRotation={leafLabelRotation}
                                    {...settings}
                                />
                            </div>
                            <ChartCodeAndData code={code} dataKey="root" data={libTree} />
                        </div>
                        <div className="grid_item grid_item-1_2">
                            <p><a href="http://bl.ocks.org/mbostock/4063570" target="_blank">block</a>.</p>
                            <TreeControls
                                settings={settings}
                                onSettingsUpdate={this.handleSettingsUpdate}
                            />
                            <div>
                                nodeRadius:&nbsp;
                                <input type="range" min="0" max="24" step="1" onChange={this.handleRadiusChange}/>
                                &nbsp;|&nbsp;labelOffset:&nbsp;
                                <input type="range" min="0" max="100" step="1" onChange={this.handleLabelOffsetChange}/>
                            </div>
                            <div>
                                root label:&nbsp;
                                &nbsp;|&nbsp;rotation:&nbsp;
                                0 <input type="range" min="0" max="360" step="10" onChange={this.handleRootLabelRotationChange} /> 360
                            </div>
                            <div>
                                intermediate label:&nbsp;
                                &nbsp;|&nbsp;rotation:&nbsp;
                                0 <input type="range" min="0" max="360" step="10" onChange={this.handleIntermediateLabelRotationChange} /> 360
                            </div>
                            <div>
                                leaf label:&nbsp;
                                &nbsp;|&nbsp;rotation:&nbsp;
                                {[0, 45, 90, 135, 180, 225, 270, 315].map(rotation => (
                                    <span>
                                        &nbsp;
                                        <span onClick={() => this.setState({ leafLabelRotation: rotation })}>
                                            {rotation}
                                        </span>
                                        &nbsp;
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default TreePage;

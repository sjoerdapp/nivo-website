import React, { Component, PropTypes }    from 'react';
import _                                  from 'lodash';
import { Link }                           from 'react-router';
import { BubblePlaceholders }             from 'nivo';
import ChartHeader                        from '../../ChartHeader';
import ChartCode                          from '../../ChartCode';
import { generateBubblePlaceholdersCode } from '../../../code-generators/bubbleCodeGenerator';
import BubblePlaceholdersControls         from './BubblePlaceholdersControls';


class BubblePlaceholdersPage extends Component {
    constructor(props) {
        super(props);

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);

        this.state = {
            settings: {
                padding:   1,
                stiffness: 120,
                damping:   10
            }
        };
    }

    handleSettingsUpdate(settings) {
        this.setState({ settings });
    }

    render() {
        const { root }     = this.props;
        const { settings } = this.state;

        const code = generateBubblePlaceholdersCode(settings);

        return (
            <div>
                <ChartHeader chartClass="BubblePlaceholders" tags={['bubble', 'hierarchy', 'placeholders', 'isomorphic']} />
                <div className="page_content">
                    <div className="grid">
                        <div className="grid_item grid_item-1_3">
                            <div className="main-chart">
                                <BubblePlaceholders
                                    root={_.cloneDeep(root)}
                                    valueProperty="loc"
                                    {...settings}
                                >
                                    {nodes => nodes.map(node => {
                                        return (
                                            <div
                                                key={node.key}
                                                style={{
                                                    position:        'absolute',
                                                    top:             node.style.y,
                                                    left:            node.style.x,
                                                    width:           node.style.r * 2,
                                                    height:          node.style.r * 2,
                                                    marginTop:       -node.style.r,
                                                    marginLeft:      -node.style.r,
                                                    borderRadius:    node.style.r,
                                                    backgroundImage: `url(http://placekitten.com/${Math.ceil(node.data.r * 2)}/${Math.ceil(node.data.r * 2)})`
                                                }}
                                            />
                                        );
                                    })}
                                </BubblePlaceholders>
                            </div>
                            <p className="description">Take total control over Bubble component (kittens compliant).</p>
                            <p className="description">This chart offer various implementations, you can render it using <Link to="/bubble/d3">pure d3</Link> or <Link to="/bubble">let react handles all the rendering</Link> and you can even <Link to="/bubble/placeholders">render whatever you want</Link> instead of the boring circles.</p>
                        </div>
                        <div className="grid_item grid_item-2_3">
                            <BubblePlaceholdersControls
                                settings={settings}
                                onChange={this.handleSettingsUpdate}
                            />
                            <ChartCode code={code} dataKey="root" data={_.cloneDeep(root)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default BubblePlaceholdersPage;

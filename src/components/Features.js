import React, { Component, PropTypes } from 'react';
import { Link }                        from 'react-router';


class Features extends Component {
    render() {
        return (
            <div>
                <div className="chart_header">
                    <div className="grid_item-1_3">
                        <h1 className="page_header">Features</h1>
                    </div>
                    <div className="grid_item-2_3" />
                </div>
                <div className="page_content">
                    <ul>
                        <li>use d3 v4</li>
                        <li>composable</li>
                        <li>highly customizable</li>
                        <li>motion/transitions</li>
                        <li>component playground</li>
                        <li>exhaustive documentation</li>
                        <li>isomorphic rendering</li>
                        <li>support for SVG and HTML</li>
                        <li>placeholder components for advanced customization</li>
                        <li>
                            <a href="https://github.com/plouc/nivo-api" target="_blank">server side rendering API</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Features;
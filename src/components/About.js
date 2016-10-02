import React, { Component, PropTypes } from 'react';


class About extends Component {
    render() {
        return (
            <div>
                <div className="chart_header">
                    <div className="grid_item-1_3">
                        <h1 className="page_header">About</h1>
                    </div>
                    <div className="grid_item-2_3" />
                </div>
                <div className="page_content">
                    <p>nivo provides supercharged React components to easily build dataviz apps, it's built on top of d3.</p>
                </div>
            </div>
        );
    }
}


export default About;

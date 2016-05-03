import React, { Component, PropTypes } from 'react';
import { Link }                        from 'react-router';


class BubbleIndex extends Component {
    render() {
        return (
            <div className="intro">
                <p className="description">Use <a href="https://github.com/mbostock/d3/wiki/Pack-Layout" target="_blank">d3 Pack layout</a>, see <a href="http://bl.ocks.org/mbostock/4063269" target="_blank">this block</a>.</p>
            </div>
        );
    }
}


export default BubbleIndex;

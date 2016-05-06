import React, { Component, PropTypes } from 'react';
import { Link }                        from 'react-router';


class Features extends Component {
    render() {
        return (
            <div>
                <h1>Features</h1>
                <div>
                    <ul>
                        <li>composable</li>
                        <li>highly customizable</li>
                        <li><Link to="/guides/animations">animate everything</Link></li>
                        <li>component playground</li>
                        <li>exhaustive documentation</li>
                        <li>isomorphic rendering (restricted to subset of components)</li>
                        <li>d3 and or React rendering (restricted to subset of components)</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default Features;
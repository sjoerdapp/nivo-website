/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

import React, { Component, PropTypes } from 'react'
import { Link }                        from 'react-router'
import Chord                           from './charts/Chord'


class API extends Component {
    render() {
        return (
            <div>
                <div className="chart_header">
                    <div className="grid_item-1_3">
                        <h1 className="page_header">API client</h1>
                    </div>
                    <div className="grid_item-2_3" />
                </div>
                <div className="page_content">
                    <Chord />
                </div>
            </div>
        )
    }
}


export default API

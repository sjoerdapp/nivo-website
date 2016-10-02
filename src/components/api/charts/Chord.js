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
import CollapsibleCard                 from '../../CollapsibleCard'
import ChordControls                   from '../../charts/chord/ChordControls'
import config                          from '../../../config'

const matrix = [
    [ 11975,  5871, 8916, 2868, 1967 ],
    [  1951, 10048, 2060, 6171, 1967 ],
    [  8010, 16145, 8090, 8045, 1967 ],
    [  1013,   990,  940, 6907, 2306 ],
    [  1013,   990,  940, 6907,  800 ],
]

class Chord extends Component {
    constructor(props) {
        super(props)

        this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this)
        this.handleDataUpdate     = this.handleDataUpdate.bind(this)
        this.handleSubmit         = this.handleSubmit.bind(this)

        this.state = {
            props: {
                width:             300,
                height:            300,
                data:              JSON.stringify(matrix, null, '  '),
                padAngle:          0.02,
                innerRadiusRatio:  0.96,
                innerRadiusOffset: 0.01,
                ribbonOpacity:     0.5,
                ribbonBorderWidth: 1,
                arcOpacity:        1,
                arcBorderWidth:    1,
                colors:            'nivo',
            },
            loading:        false,
            responseStatus: null,
            response:       null,
        }
    }

    handleSettingsUpdate(settings) {
        this.setState({ props: settings })
    }

    handleDataUpdate(e) {
        const { props } = this.state

        this.setState({
            props: Object.assign({}, props, {
                data: e.target.value,
            })
        })
    }

    handleSubmit() {
        const { props } = this.state

        this.setState({
            loading:        true,
            response:       null,
            responseStatus: null,
        })

        fetch(`${config.nivoApiUrl}/charts/chord`, {
            method:  'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            },
            body:    JSON.stringify(props),
        })
            .then(res => {
                this.setState({
                    loading:        false,
                    responseStatus: res.status,
                })

                return res.json()
            })
            .then(res => {
                this.setState({ response: res })
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        const { props, loading, responseStatus, response } = this.state

        return (
            <div className="grid">
                <div className="grid_item grid_item-2_3">
                    {responseStatus === 201 && response && (
                        <div className="api_image">
                            <img src={response.url} />
                        </div>
                    )}
                    <ChordControls
                        target="ChordAPI"
                        settings={props}
                        onChange={this.handleSettingsUpdate}
                    />
                </div>
                <div className="grid_item grid_item-1_3">
                    <span className="api_submit" onClick={this.handleSubmit}>
                        {loading ? 'sending' : 'send'}
                    </span>
                    <CollapsibleCard title="data" expandedByDefault={true}>
                        <textarea
                            className="api_data"
                            value={props.data}
                            onChange={this.handleDataUpdate}
                        />
                    </CollapsibleCard>
                    <CollapsibleCard title="Body" expandedByDefault={false}>
                        <div className="code-snippet">
                            <pre>
                                {JSON.stringify(props, null, '  ')}
                            </pre>
                        </div>
                    </CollapsibleCard>
                    <CollapsibleCard title={`Response (${responseStatus ? responseStatus : 'n/a'})`} expandedByDefault={true}>
                        <div className="code-snippet">
                            <pre>
                                {response && JSON.stringify(response, null, '  ')}
                            </pre>
                        </div>
                    </CollapsibleCard>
                </div>
            </div>
        )
    }
}


export default Chord

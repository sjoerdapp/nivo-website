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
import { generateLibTree }             from 'nivo-generators'


class ChordPage extends Component {
    constructor(props) {
        super(props)

        this.handleDiceRoll = this.handleDiceRoll.bind(this)

        this.state = { libTree: generateLibTree() }
    }

    handleDiceRoll() {
        this.setState({ libTree: generateLibTree() })
    }

    render() {
        const { libTree } = this.state

        return (
            <div className="chord_page">
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                {React.cloneElement(this.props.children, { root: libTree })}
            </div>
        )
    }
}


export default ChordPage

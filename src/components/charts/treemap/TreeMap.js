import React, { Component, PropTypes } from 'react'
import { Link }                        from 'react-router'
import {
    generateLibTree,
    generateProgrammingLanguageStats,
} from 'nivo-generators'


class TreeMap extends Component {
    constructor(props) {
        super(props)

        this.handleDiceRoll = this.handleDiceRoll.bind(this)

        this.state = { root: generateLibTree() }
    }

    handleDiceRoll() {
        this.setState({ root: generateLibTree() })
    }

    render() {
        const { root } = this.state

        return (
            <div className="treemap_page">
                <span
                    className="dice-roll"
                    onClick={this.handleDiceRoll}
                >
                    roll the dices
                </span>
                {React.cloneElement(this.props.children, { root })}
            </div>
        )
    }
}


export default TreeMap

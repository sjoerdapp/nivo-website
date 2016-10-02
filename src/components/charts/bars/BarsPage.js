import React, { Component, PropTypes } from 'react'
import { Link }                        from 'react-router'
import { generateDrinkStats }          from 'nivo-generators'
import { barsDataSchema }              from 'nivo'
import {
    randomUniform,
} from 'd3'


const randSize = () => Math.round(randomUniform(8, 16)())


class BarsPage extends Component {
    constructor(props) {
        super(props)

        this.handleDiceRoll   = this.handleDiceRoll.bind(this)
        this.handleDataUpdate = this.handleDataUpdate.bind(this)

        this.state = { data: generateDrinkStats(randSize()) }
    }

    handleDiceRoll() {
        this.setState({ data: generateDrinkStats(randSize()) })
    }

    handleDataUpdate(data) {
        this.setState({ data })
    }

    render() {
        const { data } = this.state;

        return (
            <div className="bars_page">
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                {React.cloneElement(this.props.children, {
                    data,
                    onDataUpdate: this.handleDataUpdate,
                })}
            </div>
        );
    }
}


export default BarsPage;

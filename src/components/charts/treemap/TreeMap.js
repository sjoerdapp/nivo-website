import React, { Component, PropTypes } from 'react';
import { Link }                        from 'react-router';
import { generateLibTree }             from '../../../generators';


class TreeMap extends Component {
    constructor(props) {
        super(props);

        this.handleDiceRoll = this.handleDiceRoll.bind(this);

        this.state = {
            libTree: generateLibTree()
        };
    }

    handleDiceRoll() {
        this.setState({
            libTree: generateLibTree()
        });
    }

    render() {
        const { libTree } = this.state;

        return (
            <div className="treemap_page">
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                {React.cloneElement(this.props.children, { root: libTree })}
            </div>
        );
    }
}


export default TreeMap;

import React, { Component, PropTypes } from 'react';
import { Link }                        from 'react-router';
import { generateDayCounts }           from 'nivo-generators';


class CalendarPage extends Component {
    constructor(props) {
        super(props);

        this.handleDiceRoll = this.handleDiceRoll.bind(this);

        const from = new Date(2015, 3, 1);
        const to   = new Date(2016, 7, 12);

        this.state = {
            from, to,
            data: generateDayCounts(from, to)
        };
    }

    handleDiceRoll() {
        const { from, to } = this.state;
        this.setState({
            data: generateDayCounts(from, to)
        });
    }

    render() {
        const { from, to, data } = this.state;

        return (
            <div className="calendar_page">
                <span className="dice-roll" onClick={this.handleDiceRoll}>roll the dices</span>
                {React.cloneElement(this.props.children, { from, to, data })}
            </div>
        );
    }
}


export default CalendarPage;

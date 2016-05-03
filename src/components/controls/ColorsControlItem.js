import React, { Component, PropTypes } from 'react';
import classNames                      from 'classnames'


class ColorsControlItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.isCurrent !== this.props.isCurrent;
    }

    handleClick() {
        const { onClick, id } = this.props;
        onClick(id);
    }

    render() {
        const { colors, isCurrent } = this.props;

        return (
            <div
                className={classNames('control-colors_colors', {
                    '_is-current': isCurrent
                })}
                onClick={this.handleClick}
            >
                {colors.map(color => (
                    <span
                        key={color}
                        className="control-colors_colors_item"
                        style={{ background: color }}
                    />
                ))}
            </div>
        );
    }
}

const { string, bool, array, func } = PropTypes;

ColorsControlItem.propTypes = {
    id:        string.isRequired,
    colors:    array.isRequired,
    isCurrent: bool.isRequired,
    onClick:   func.isRequired
};


export default ColorsControlItem;

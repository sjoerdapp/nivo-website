import React, { Component }  from 'react';
import { Link }              from 'react-router';


class MiniNavLink extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = { clickFeedback: false };
    }

    handleClick(e) {
        const { onClick } = this.props;

        /*
        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timer = setTimeout(() => {
            this.setState({ clickFeedback: false });
        }, 1200);

        this.setState({ clickFeedback: true });
        */

        if (onClick) {
            e.preventDefault();
            onClick();
        }
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render () {
        const { path, className, label, style } = this.props;
        const { clickFeedback }                 = this.state;

        return (
            <Link
                className={`mini-nav_item mini-nav_item-${className} ${clickFeedback ? ' click' : ''}`}
                to={path}
                activeClassName="active"
                onClick={this.handleClick}
                style={style}
            >
                <span className="mini-nav_item_feedback" />
                <span className="mini-nav_item_icon" />
                <span className="mini-nav_item_label">{label}</span>
            </Link>
        );
    }
}


export default MiniNavLink;

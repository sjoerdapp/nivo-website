import React, { Component } from 'react';


class ChartCode extends Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.code === this.props.code) {
            return false;
        }

        return true;
    }

    render() {
        const { code } = this.props;

        return (
            <div className="code-snippet">
                <pre>{code}</pre>
            </div>
        );
    }
}


export default ChartCode;

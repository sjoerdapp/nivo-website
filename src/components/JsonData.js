import React, { Component, PropTypes } from 'react';


class JsonData extends Component {
    constructor(props) {
        super(props);

        this.handleToggleClick = this.handleToggleClick.bind(this);

        this.state = { show: false };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.data === this.props.data && nextState.show === this.state.show) {
            return false;
        }

        return true;
    }

    handleToggleClick() {
        this.setState({ show: !this.state.show });
    }

    render() {
        const { data, dataKey } = this.props;
        const { show }          = this.state;

        let content = (
            <span className="json-data_key">{dataKey}</span>
        );
        if (show) {
            content = (
                <div className="json-data_json">
                    <pre>{JSON.stringify(data, null, '  ')}</pre>
                </div>
            );
        }

        return (
            <div className={`json-data${show ? ' _show' : ''}`}>
                {content}
                <span className="json-data_toggle" onClick={this.handleToggleClick}>
                    {show ? 'hide' : 'data {…}'}
                </span>
            </div>
        );
    }
}


export default JsonData;

import React, { Component, PropTypes } from 'react';
import CollapsibleCard                 from './CollapsibleCard';


class JsonData extends Component {
    constructor(props) {
        super(props);

        this.handleDataUpdate  = this.handleDataUpdate.bind(this);

        this.state = {
            value: JSON.stringify(props.data, null, '    ')
        };
    }

    /*
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.data === this.props.data && nextState.show === this.state.show) {
            return false;
        }

        return true;
    }
    */

    handleDataUpdate(e) {
        const { onDataUpdate } = this.props;
        onDataUpdate(JSON.parse(e.target.value));
        this.setState({ value: e.target.value });
    }

    render() {
        const { data } = this.props;
        const { value } = this.state;

        return (
            <CollapsibleCard title="Data">
                <div className="json-data_json">
                    <textarea onChange={this.handleDataUpdate} value={value} />
                </div>
            </CollapsibleCard>
        );
    }
}

const { func } = PropTypes;

JsonData.propTypes = {
    onDataUpdate: func.isRequired
};


export default JsonData;

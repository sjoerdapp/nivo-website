import React, { Component, PropTypes } from 'react';
import PropertiesTable                 from './PropertiesTable';


class Properties extends Component {
    render() {
        const { chartClass, properties } = this.props;

        return (
            <div className="properties">
                <div className="properties_header">
                    <h2>{chartClass}</h2>
                </div>
                <div className="properties_body">
                    <PropertiesTable properties={properties} />
                </div>
            </div>
        );
    }
}


export default Properties;

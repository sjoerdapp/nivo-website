import React, { Component, PropTypes } from 'react'
import PropertiesTable                 from './PropertiesTable'
import CollapsibleCard                 from './CollapsibleCard'


class Properties extends Component {
    shouldComponentUpdate() {
        return false
    }

    render() {
        const { chartClass, properties } = this.props;

        return (
            <CollapsibleCard title={`<${chartClass} /> properties`} expandedByDefault={true}>
                <PropertiesTable properties={properties} />
            </CollapsibleCard>
        )
    }
}


export default Properties
